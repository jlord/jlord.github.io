const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginDate = require("eleventy-plugin-date")
const markdownIt = require('markdown-it')
const markdownItLinkAttr = require('markdown-it-link-attributes')
const markdownItAnchor = require('markdown-it-anchor')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/")
    eleventyConfig.addPassthroughCopy("./src/assets/")
    eleventyConfig.addWatchTarget("./src/css/")
    eleventyConfig.addPlugin(pluginRss)
    eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339)
    eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822)
    eleventyConfig.addPlugin(pluginDate, {
      formats: {
        readableNums: { year: "numeric", month: "numeric", day: "numeric" },
        readableDate: { year: "numeric", month: "short", day: "numeric" },
        readableMonth: { year: "numeric", month: "short" }
      }
    })
    // Don't show drafts in post list 
    eleventyConfig.addCollection("posts", collection => {
        return [...collection.getFilteredByGlob("./src/posts/*.md")]
          .filter(p => !p.data.draft).reverse()
    })

    eleventyConfig.setLibrary(
      'md',
      markdownIt({ html: true })
      // TODO don't use HTML headers, only md
      // https://github.com/valeriangalliat/markdown-it-anchor
        // .use(markdownItAnchor, {
        //   permalink: true
        // })
        .use(markdownItLinkAttr, {
          // Make external links open in a new tab.
          // https://github.com/crookedneighbor/markdown-it-link-attributes  
          // pattern: /^https?:\/\//,
          matcher(href, config) {
            return href.startsWith("https:");
          },
          attrs: {
            class: 'external-link',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        })
    )

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
}