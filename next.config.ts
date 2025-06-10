import createNextBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ["framer-motion"],
  },
};

const withBundleAnalyzer = createNextBundleAnalyzer({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();
export default withBundleAnalyzer(withNextIntl(nextConfig));
