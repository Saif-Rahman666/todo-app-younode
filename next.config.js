/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    apiUrl: 'http://ec2-13-115-61-236.ap-northeast-1.compute.amazonaws.com:3000'
  }
}

module.exports = nextConfig
