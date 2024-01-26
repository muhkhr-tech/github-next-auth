module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'githubusercontent.com'
      }
    ]
  }
};
