import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DocumentsSideNav from "@/components/DocumentsSideNav";

export default function DocumentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-elys-page text-elys-text">
      <SiteHeader />

      <div className="flex flex-col md:flex-row">
        <aside className="shrink-0 md:w-64">
          <div className="px-6 py-6 md:sticky md:top-[var(--header-height,73px)] md:max-h-[calc(100vh-var(--header-height,73px))] md:overflow-x-hidden md:overflow-y-auto md:overscroll-y-contain md:py-10">
            <DocumentsSideNav />
          </div>
        </aside>

        <div className="min-w-0 flex-1">{children}</div>
      </div>

      <SiteFooter />
    </main>
  );
}
