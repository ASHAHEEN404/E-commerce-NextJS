/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "ar",
    localeDetection: false,
  },

  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
