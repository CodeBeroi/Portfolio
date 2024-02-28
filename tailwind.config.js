/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'customred': "#E7473C",
        'custombrown': '#56423E',
        'custombeige': '#BEA6A1',
        'customcyan': '#009D99',
        'customgreen': '#006666'
      },
    },
    fontFamily: {
      'display': ['Univers', 'Helvetica\\ Neue', 'Helvetica', 'Myriad\\ Pro', 'Myriad', 'Geneva', 'Arial', 'sans-serif'],
      'p': ['Univers'],
    },
  },
  plugins: [],
};
