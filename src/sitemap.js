const sitemap = require('sitemap');
const hostname = 'https://davidmenechi.fr';

const urls = [
  { url: '/', changefreq: 'weekly', priority: 1 },
  { url: '/english', changefreq: 'weekly', priority: 1 },
  { url: '/contact', changefreq: 'monthly', priority: 0.2 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require('fs');

    // Write sitemap to public directory
    fs.writeFileSync('../public/sitemap.xml', sitemapInstance.toString());