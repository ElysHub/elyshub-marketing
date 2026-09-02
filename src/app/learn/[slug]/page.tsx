import { notFound } from "next/navigation";
import { pages, getPage } from "@/lib/pages";
import PublicPageView from "@/components/PublicPageView";

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) {
    notFound();
  }

  return <PublicPageView page={page} />;
}
