const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/")
    eleventyConfig.addWatchTarget("./src/css/")
    eleventyConfig.addPlugin(pluginRss)
    // TODO add pagination
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