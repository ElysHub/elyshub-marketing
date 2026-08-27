import type { DocumentDef } from "@/lib/documents";
import { getHeroSection } from "@/lib/documents";
import { getEngineTheme } from "@/lib/engine-themes";
import CapabilityMapSectionView from "./document/CapabilityMapSectionView";
import HeroSectionView from "./document/HeroSectionView";

export default function DocumentView({ document }: { document: DocumentDef }) {
  const theme = getEngineTheme(document.engine);
  const hero = getHeroSection(document);
  const documentTitle = hero?.title ?? document.navLabel;

  return (
    <article className="flex flex-col">
      {document.sections.map((section) => {
        switch (section.type) {
          case "hero":
            return (
              <HeroSectionView
                key={section.id}
                section={section}
                theme={theme}
              />
            );
          case "capability_map":
            return (
              <CapabilityMapSectionView
                key={section.id}
                section={section}
                theme={theme}
                documentTitle={documentTitle}
              />
            );
          default: {
            const _exhaustive: never = section;
            return _exhaustive;
          }
        }
      })}
    </article>
  );
}
