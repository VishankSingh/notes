import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"
import { toString } from "mdast-util-to-string"
import Slugger from "github-slugger"

export interface Options {
  maxDepth: 1 | 2 | 3 | 4 | 5 | 6
  minEntries: number
  showByDefault: boolean
  collapseByDefault: boolean
}

const defaultOptions: Options = {
  maxDepth: 3,
  minEntries: 1,
  showByDefault: true,
  collapseByDefault: false,
}

interface TocEntry {
  depth: number
  text: string
  slug: string // this is just the anchor (#some-slug), not the canonical slug
}

// +++++
function extractTextWithMath(node: any): string {
  // Wrap math in unique delimiters to avoid conflicts with literal '$' text
  if (node.type === "inlineMath" || node.type === "math") {
    return `__MATH_START__${node.value}__MATH_END__`
  }
  if ("children" in node) {
    return node.children.map(extractTextWithMath).join("")
  }
  if ("value" in node) {
    return node.value
  }
  return ""
}

const slugAnchor = new Slugger()
export const TableOfContents: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "TableOfContents",
    markdownPlugins() {
      return [
        () => {
          return async (tree: Root, file) => {
            const display = file.data.frontmatter?.enableToc ?? opts.showByDefault
            if (display) {
              slugAnchor.reset()
              const toc: TocEntry[] = []
              let highestDepth: number = opts.maxDepth
              visit(tree, "heading", (node) => {
                if (node.depth <= opts.maxDepth) {
                  // const text = toString(node)
                  // // +++++
                  // // if (text.includes("ell_1")) {
                  // //   console.log(node);11
                  // // }
                  // // const text = node.children
                  // //   .map((child: any) => {
                  // //     if (child.type === "inlineMath") {
                  // //       return `$${child.value}$`
                  // //     }
                  // //     return toString(child)
                  // //   })
                  // //   .join("")
                  // highestDepth = Math.min(highestDepth, node.depth)
                  // toc.push({
                  //   depth: node.depth,
                  //   text,
                  //   slug: slugAnchor.slug(text),
                  // })

                  // +++++
                  const plainText = toString(node)
                  const displayText = extractTextWithMath(node)
                  highestDepth = Math.min(highestDepth, node.depth)

                  toc.push({
                    depth: node.depth,
                    text: displayText,
                    slug: slugAnchor.slug(plainText),
                  })
                }
              })

              if (toc.length > 0 && toc.length > opts.minEntries) {
                file.data.toc = toc.map((entry) => ({
                  ...entry,
                  depth: entry.depth - highestDepth,
                }))
                file.data.collapseToc = opts.collapseByDefault
              }
            }
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    toc: TocEntry[]
    collapseToc: boolean
  }
}
