/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/resend", "@workspace/trpc", "@workspace/ui"],
};

export default nextConfig;
