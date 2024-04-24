
const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT( {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      screens: {
        s: '200px',
        sm: '640px',
        md: '1024px',
        // => @media (min-width: 1024px) { ... }
        lg: '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    }
    
  },
  plugins: [],
});