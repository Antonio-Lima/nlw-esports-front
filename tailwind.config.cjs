/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'nwl-gradient': 'linear-gradient(89.86deg, #9572FC 10%, #43E7AD 60%, #E1D55D 100%)',
        'shadow-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        galaxy: "url('/background-galaxy.png')",
      }
    },
  },
  plugins: [],
}
