export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/media");
  return {
    dir: {
      input: "src",
      output: "public ",
    },
  };
}
