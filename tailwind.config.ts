import type { Config } from 'tailwindcss'

const config: Config = {
  // Określamy, gdzie Tailwind ma szukać klas – Nuxtowe pliki
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    extend: {
      // Dodajemy własny obraz jako tło np. przycisku
      backgroundImage: {
        // Przyciski czerwone
        'button-red-buy': "url('/images/button_red_buy.png')",
        'button-red-empty': "url('/images/button_red_empty.png')",
        'button-red-search': "url('/images/button_red_search.png')",
        'button-red-long': "url('/images/button_red_long.png')",
        'button_red_be_cyber': "url('/images/button_red_be_cyber.png')",
      
        // Przyciski białe
        'button-white-buy': "url('/images/button_white_buy.png')",
        'button-white-empty': "url('/images/button_white_empty.png')",
        'button-white-long': "url('/images/button_white_long.png')",

        // Figury i dekory
        'circle-red-1': "url('/images/circle_red_1.png')",
        'circle-red-2': "url('/images/circle_red_2.png')",
        'circle-red-3': "url('/images/circle_red_3.png')",
        'circle-red-4': "url('/images/circle_red_4.png')",
        'triangle-red-1': "url('/images/triangle_red_small_1.png')",
        'triangle-red-2': "url('/images/triangle_red_small_2.png')",

        // Prostokąty
        'rectangle-red-empty': "url('/images/rectangle_red_empty.png')",
        'rectangle-red-locked': "url('/images/rectangle_red_locked.png')",
        'rectangle-red-small': "url('/images/rectangle_red__small_empty.png')",

        // Pasek wyszukiwania (np. bottom border)
        'search-bar-bottom': "url('/images/search_bar_bottom.png')",
        
      },

      // Opcjonalnie: niestandardowa czcionka
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

export default config
