import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Gates the internal Product Truth / stakeholder document viewer (/documents/*).
 * That section exposes per-feature roadmap detail (planned/vision/gap states, research
 * status) that is useful to competitors and not intended for public/grower consumption —
 * it must stay access-controlled, not just unlinked from nav.
 *
 * Set DOCS_BASIC_AUTH_USER / DOCS_BASIC_AUTH_PASS in the environment (Vercel project env
 * vars, or a local .env.local) to enable. If either is unset, /documents is blocked outright
 * rather than left open, so a missing config can never silently expose it.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  // Belt-and-suspenders: even if a URL leaks, tell crawlers not to index it.
  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  const expectedUser = process.env.DOCS_BASIC_AUTH_USER;
  const expectedPass = process.env.DOCS_BASIC_AUTH_PASS;

  const unauthorized = () =>
    new NextResponse("Authentication required.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="ElysHub Product Truth"' },
    });

  if (!expectedUser || !expectedPass) {
    return unauthorized();
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) {
    return unauthorized();
  }

  const decoded = atob(authHeader.slice("Basic ".length));
  const separatorIndex = decoded.indexOf(":");
  const user = decoded.slice(0, separatorIndex);
  const pass = decoded.slice(separatorIndex + 1);

  if (user !== expectedUser || pass !== expectedPass) {
    return unauthorized();
  }

  return response;
}

export const config = {
  matcher: "/documents/:path*",
};
