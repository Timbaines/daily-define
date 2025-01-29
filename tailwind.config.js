/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class', // Use `class` to toggle dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Specify files for Tailwind to scan

  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))', // Links to --background (set in CSS)
        foreground: 'hsl(var(--foreground))', // Links to --foreground (set in CSS)
        primary: 'hsl(var(--primary))', // Links to --primary (set in CSS)
        'primary-foreground': 'hsl(var(--primary-foreground))', // Links to --primary-foreground
        secondary: 'hsl(var(--secondary))', // Links to --secondary
        'secondary-foreground': 'hsl(var(--secondary-foreground))', // Links to --secondary-foreground
        muted: 'hsl(var(--muted))', // Links to --muted
        'muted-foreground': 'hsl(var(--muted-foreground))', // Links to --muted-foreground
      },
    },
  },
  plugins: [],
};
