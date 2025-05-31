import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "randomuser.me",
			},
			{
				protocol: "https",
				hostname: "framerusercontent.com",
			},
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "alt.tailus.io",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "avatar.iran.liara.run",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
			},
		],
	},
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
