const htmlmin = require('html-minifier');

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
};
