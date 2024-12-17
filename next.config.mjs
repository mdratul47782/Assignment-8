/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
          pathname: "/t/p/original/**", // Allows only images from this path
        },
      ],
    },
  };
  
  export default nextConfig;
  