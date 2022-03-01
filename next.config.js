const withOptimizedImages = require("next-optimized-images");
module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  // your config for other plugins or the general next.js here...
});
module.exports = {
  exportTrailingSlash: true,
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
