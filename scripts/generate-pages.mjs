#!/usr/bin/env node
/**
 * Converts content/pages/*.yaml into src/lib/pages.generated.json.
 *
 * Sibling to generate-documents.mjs, same reasoning: pages.ts is imported by both server and
 * client components, so content must be a build-time JSON artifact, not read via `fs` at
 * runtime. See generate-documents.mjs for the fuller rationale.
 *
 * content/pages/*.yaml is the PUBLIC, grower-facing counterpart to content/documents/*.yaml
 * (the internal, access-controlled Product Truth viewer). Pages here should read at the
 * benefit/outcome level — informed by Product Truth, but deliberately not exposing per-feature
 * roadmap state (live/planned/vision/gap) or research status, which is competitively
 * sensitive and not useful to growers. See docs/Marketing-Website.md.
 *
 * Run manually after editing a content/pages/*.yaml file, or automatically via the
 * predev/prebuild npm scripts.
 */
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "url";
import { load } from "js-yaml";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const contentDir = join(rootDir, "content", "pages");
const outFile = join(rootDir, "src", "lib", "pages.generated.json");

const files = readdirSync(contentDir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"));

const pages = files
  .map((file) => load(readFileSync(join(contentDir, file), "utf8")))
  .sort((a, b) => basename(a.slug).localeCompare(basename(b.slug)));

writeFileSync(outFile, JSON.stringify(pages, null, 2) + "\n");

console.log(`Generated ${outFile} from ${files.length} page(s): ${files.join(", ")}`);
