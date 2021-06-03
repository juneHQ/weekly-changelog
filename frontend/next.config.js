module.exports = {
  images: {
    domains: [process.env.NEXT_PUBLIC_ASSETS_DOMAIN],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    NEXT_JUNE_MARKETING_HOST: process.env.NEXT_JUNE_MARKETING_HOST,
    NEXT_JUNE_APP_HOST: process.env.NEXT_JUNE_APP_HOST,
  },
};
