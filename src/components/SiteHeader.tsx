"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const tallyUrl = "https://tally.so/r/7R4X82";

// /documents is an internal, access-controlled stakeholder viewer (see proxy.ts) —
// intentionally not linked from public nav. /learn is the public, grower-facing counterpart.
const navItems = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${el.offsetHeight}px`
      );
    };

    setHeaderHeight();

    const resizeObserver = new ResizeObserver(setHeaderHeight);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-elys-border bg-elys-page"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-elys-text transition hover:opacity-80"
        >
          <img
            src="/icon.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
          />
          <span className="font-serif text-lg font-normal tracking-tight">
            ElysHub
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`transition hover:text-elys-primary ${
                  active ? "text-elys-primary" : "text-elys-text"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={tallyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block shrink-0 rounded-full border-2 border-elys-primary bg-transparent px-5 py-2 text-sm font-medium text-elys-primary transition hover:bg-elys-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elys-primary focus-visible:ring-offset-2 focus-visible:ring-offset-elys-page"
        >
          Get early access
        </a>
      </div>

      <nav className="flex items-center justify-center gap-8 border-t border-elys-border py-3 text-sm font-medium md:hidden">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`transition hover:text-elys-primary ${
                active ? "text-elys-primary" : "text-elys-text"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export { tallyUrl };
