/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        base: ['BaiJamjuree-Regular'],
        bold: ['BaiJamjuree-Bold'],
        light: ['BaiJamjuree-Light']
      },
      backgroundImage: {
        'desktop': "url('images/bg-header-desktop.png')",
        'mobile': "url('images/bg-header-mobile.png')",
      }
    },
  },
  plugins: [],
}

