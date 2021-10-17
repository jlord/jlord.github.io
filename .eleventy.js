const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/")
    eleventyConfig.addWatchTarget("./src/css/")
    eleventyConfig.addPlugin(pluginRss)
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}