"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { documents } from "@/lib/documents";

export default function DocumentsSideNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Documents" className="w-full shrink-0 md:w-full">
      <p className="mb-3 px-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-elys-muted">
        Documents
      </p>
      <ul className="flex flex-col gap-1">
        {documents.map((doc) => {
          const href = `/documents/${doc.slug}`;
          const active = pathname === href;
          return (
            <li key={doc.slug}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`block rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "border-elys-primary bg-elys-primary/10 text-elys-primary"
                    : "border-transparent text-elys-text hover:border-elys-border hover:bg-elys-hero/40"
                }`}
              >
                {doc.navLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
