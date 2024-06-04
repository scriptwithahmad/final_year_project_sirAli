/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      DB_URI: "mongodb+srv://alishabbir3151:iloveyoumorethenanythingelse@uncroped.fnfrefx.mongodb.net/appointment?retryWrites=true&w=majority",
      JWT_SECRET: "wiuroiewmx#$#13213",
      SERVER_SIDE_URL:"https://www.edifycit.com/",
    },
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    }
  }
  
module.exports = nextConfig
  