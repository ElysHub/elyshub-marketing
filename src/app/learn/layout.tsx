import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function LearnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen bg-elys-page text-elys-text">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
