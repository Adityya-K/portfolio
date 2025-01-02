import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'mouse-radial': 'radial-gradient(circle, rgba(173,216,230,0.8) 0%, rgba(255,255,255,0) 50%)',
        'mouse-radial-dark': 'radial-gradient(circle, rgba(2,56,110,0.5) 0%, rgba(255,255,255,0) 50%)',
      }
    }
  },

  plugins: [typography, forms, containerQueries]
} satisfies Config;
