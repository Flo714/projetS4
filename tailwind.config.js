module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
        'raleway': ['Raleway', 'sans-serif'] 
        
      },
      transitionTimingFunction: {
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },

  },
  plugins: [],
}
