// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//   },
//   reactStrinctMode: true,
//   swcMinify: true,
// });

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  reactStrictMode: true,
});
