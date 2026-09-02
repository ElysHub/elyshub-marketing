import { redirect } from "next/navigation";
import { pages } from "@/lib/pages";

export default function LearnIndex() {
  const first = pages[0];
  if (first) {
    redirect(`/learn/${first.slug}`);
  }
  return null;
}
