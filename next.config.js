/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: 'https://king-prawn-app-d3yfg.ondigitalocean.app/',
    FACEBOOK_APP_SECRET:'4c30ed043dbfc9e5b59e9db484283609',
    FACEBOOK_APP_ID:'1762910734100962',
  },

}

module.exports = nextConfig
