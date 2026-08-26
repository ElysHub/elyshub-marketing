import { notFound } from "next/navigation";
import { documents, getDocument } from "@/lib/documents";
import DocumentView from "@/components/DocumentView";

export function generateStaticParams() {
  return documents.map((doc) => ({ slug: doc.slug }));
}

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = getDocument(slug);

  if (!document) {
    notFound();
  }

  return <DocumentView document={document} />;
}
