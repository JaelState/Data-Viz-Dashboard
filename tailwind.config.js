/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/context/**/*.{js,jsx,ts,tsx}",
    "./src/hooks/**/*.{js,jsx,ts,tsx}",
    "./src/services/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // Extend the default Tailwind theme
    extend: {
      colors: {
        primary: '#3b82f6',  // Customize with your primary color
        secondary: '#ec4899',  // Customize with your secondary color
        background: '#f3f4f6',  // Light background color
        surface: '#ffffff',  // Default surface color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Set a custom sans-serif font
      },
      spacing: {
        '128': '32rem',  // Custom spacing values
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',  // Large border radius
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',  // Custom shadow for a subtle effect
        'custom-heavy': '0 10px 15px rgba(0, 0, 0, 0.25)',  // Heavier shadow for emphasis
      },
    },
  },
  // Enable necessary plugins for additional utilities
  plugins: [
    require('@tailwindcss/forms'),  // For better styling of form elements
    require('@tailwindcss/typography'),  // For better typography styling
  ],
}
