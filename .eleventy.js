module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets/": "/"});
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.setServerOptions({
    watch: ["dist/styles.css"]
  });

  return {
    dir: {
      input: "src/pages",
      output: "dist",
      layouts: "_layouts",
    },
  };
};
