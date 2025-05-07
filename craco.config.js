// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        // 👇 use the legacy adapter here, *not* the main tailwindcss package
        require('@tailwindcss/postcss')(),
        require('autoprefixer')(),
      ],
    },
  },
};
