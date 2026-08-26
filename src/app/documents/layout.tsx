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

      <div className="flex flex-1 flex-col md:flex-row">
        <div className="shrink-0 px-6 py-10 md:w-64">
          <DocumentsSideNav />
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>

      <SiteFooter />
    </main>
  );
}
