const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    NEXT_PUBLIC_MARKETING_HOST: process.env.NEXT_PUBLIC_MARKETING_HOST,
    NEXT_PUBLIC_APP_HOST: process.env.NEXT_PUBLIC_APP_HOST,
    NEXT_PUBLIC_APP_HOST: process.env.NEXT_PUBLIC_APP_HOST,
  },
};

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);

module.exports = config;
