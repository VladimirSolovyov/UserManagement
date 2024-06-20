/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	assetPrefix: isProd ? '/UserManagement/' : '',
	basePath: isProd ? '/UserManagement' : '',
	images: {
		unoptimized: true,
	},
}

export default nextConfig
