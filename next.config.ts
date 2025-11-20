import createNextBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	output: "standalone",
	experimental: {
		optimizePackageImports: ["framer-motion", "@tabler/icons-react", "cobe"],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
};

const withBundleAnalyzer = createNextBundleAnalyzer({
	enabled: process.env.NEXT_PUBLIC_ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();
export default withBundleAnalyzer(withNextIntl(nextConfig));
