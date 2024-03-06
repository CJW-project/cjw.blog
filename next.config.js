/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "/src/styles/_variables.module.scss";`,
  },
};

module.exports = nextConfig;
