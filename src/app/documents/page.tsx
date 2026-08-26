import { redirect } from "next/navigation";
import { documents } from "@/lib/documents";

export default function DocumentsIndex() {
  const first = documents[0];
  if (first) {
    redirect(`/documents/${first.slug}`);
  }
  return null;
}
