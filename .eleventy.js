const htmlmin = require('html-minifier');
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = function(eleventyConfig) {
  // Liquid Filter
  eleventyConfig.addLiquidFilter('markdown2HTML', function(value) {
    let options = {
      html: true,
      breaks: true,
      linkify: true
    };

    let MarkdownIt = require('markdown-it');
    let md = new MarkdownIt(options);
    return md.render(value);
  });

  // HTML Minify
  eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // Copy assets
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/favicons');

  // Cache busting
  const cacheBusterOptions = {};
  eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));

  return {
    dir: {
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};
