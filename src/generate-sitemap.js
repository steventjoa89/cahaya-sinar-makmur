const { SitemapStream, streamToPromise } = require("sitemap");

// Base URL of your website
const baseUrl = "https://cahayasinarmakmur.com";

// Create a SitemapStream and add URLs to it
const sitemap = new SitemapStream({ hostname: baseUrl });
sitemap.write({ url: "/", changefreq: "monthly", priority: 1.0 });
sitemap.write({ url: "/about-us", changefreq: "monthly", priority: 0.7 });
sitemap.write({ url: "/products", changefreq: "monthly", priority: 0.9 });
sitemap.write({ url: "/contact-us", changefreq: "monthly", priority: 0.8 });
sitemap.end();

// Convert the sitemap stream to a string and print it to the console
streamToPromise(sitemap)
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
