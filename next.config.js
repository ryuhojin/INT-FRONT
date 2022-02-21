/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const path = require("path");

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  webpack(config) {
    return config;
  },
});
