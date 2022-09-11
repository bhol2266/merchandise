/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // BACKEND_URL: 'https://king-prawn-app-d3yfg.ondigitalocean.app/',
    BACKEND_URL: 'http://localhost:5000/',
    FRONTEND_URL: 'http://localhost:3000/',
    // FRONTEND_URL: 'https://www.closm.com/',
    FACEBOOK_APP_SECRET:'4c30ed043dbfc9e5b59e9db484283609',
    FACEBOOK_APP_ID:'1762910734100962',
    GOOGLE_CLIENT_ID:'737624608726-it8582ctpmd6i8b79th0v2hqfrf5clcg.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'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',
  },

}

module.exports = nextConfig
