const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginDate = require("eleventy-plugin-date");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/")
    eleventyConfig.addWatchTarget("./src/css/")
    eleventyConfig.addPlugin(pluginRss)
    eleventyConfig.addPlugin(pluginDate, {
      formats: {
        readableDate: { year: "numeric", month: "short", day: "numeric" },
        readableMonth: { year: "numeric", month: "short" }
      }
    })
    // Don't show drafts in post list 
    eleventyConfig.addCollection("posts", collection => {
        return [...collection.getFilteredByGlob("./src/posts/*.md")]
          .filter(p => !p.data.draft).reverse()
    })

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
}