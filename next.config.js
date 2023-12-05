/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

// const nextConfig = withPWA({
//   // pwa: {
//   //   dest: 'public',
//   //   register: true,
//   //   skipWaiting: true,
//   // },
//   reactStrictMode: true,
//   // swcMinify: true,
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//           loader: "@svgr/webpack",
//           options: {
//             svgo: false, // 圧縮無効
//           },
//         },
//       ],
//     });
//     return config;
//   },
//   images: {
//     disableStaticImages: true,
//   },
// });

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      // use: ['@svgr/webpack']
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
