#!/usr/bin/env node
/**
 * Converts content/documents/*.yaml into src/lib/documents.generated.json.
 *
 * Why generated instead of read at runtime: documents.ts is imported by both server
 * components and a "use client" component (DocumentsSideNav), so it must not call `fs` at
 * module scope — that would break the client bundle. A build-time JSON artifact keeps the
 * data statically importable everywhere, server and client, with no runtime fs dependency.
 *
 * Run manually after editing a content/documents/*.yaml file, or automatically via the
 * predev/prebuild npm scripts.
 */
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "url";
import { load } from "js-yaml";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const contentDir = join(rootDir, "content", "documents");
const outFile = join(rootDir, "src", "lib", "documents.generated.json");

const files = readdirSync(contentDir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"));

// Explicit nav order (Documents side nav / static params). Slugs not listed here fall back
// to alphabetical order, appended after the ones listed.
const NAV_ORDER = ["moisture", "soil", "fertilization"];

const documents = files
  .map((file) => load(readFileSync(join(contentDir, file), "utf8")))
  .sort((a, b) => {
    const aIndex = NAV_ORDER.indexOf(a.slug);
    const bIndex = NAV_ORDER.indexOf(b.slug);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return basename(a.slug).localeCompare(basename(b.slug));
  });

writeFileSync(outFile, JSON.stringify(documents, null, 2) + "\n");

console.log(
  `Generated ${outFile} from ${files.length} document(s): ${files.join(", ")}`
);
