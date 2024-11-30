import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.OnlyFor( 
      { titles: ["Digital Garden"]},
      Component.RecentNotes({ 
        title: "Recent Notes",  
        showTags: false,
        limit: 5,
        filter: (node) => {
            // exclude folder pages
            return ! node.filePath?.endsWith('index.md')
          },
      }),
    ),
    Component.OnlyFor( 
      { titles: ["Digital Garden"]},
      Component.MobileOnly(Component.Explorer({
        folderClickBehavior: "link",
        useSavedState: false,
      })),
    )
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/maneesh29s/digital-garden-publish",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    // Component.ArticleTitle(),
    // Component.ContentMeta(),
    // Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link",
      useSavedState: false,
    })),
  ],
  right: [
    Component.TagList(),
    Component.Graph({
      localGraph: {
        showTags: false,
      }, globalGraph: {
        showTags: false,
      }
    }),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs()],// Component.ArticleTitle(), Component.ContentMeta()
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link",
      useSavedState: false,
    })),
  ],
  right: [],
}
