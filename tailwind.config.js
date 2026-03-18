/** @type {import('tailwindcss').Config} */
export default {
  
   // 1. Tailwind 클래스를 추출해서 적용할 파일들의 경로
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        primary: 'var(--color-primary)',
        'app-bg': '#f2f4f6', // 토스 특유의 배경색
        'app-gray': '#e5e8eb',
        'app-text': '#191f28',
        'app-sub': '#8b95a1',
        // 다크모드용
        'app-dark-bg': '#121212',
        'app-dark-card': '#1e1e1e',
        'app-dark-border': '#333333',
        'app-dark-text': '#ffffff',
        'app-dark-sub': '#b0b8c1',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'app': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'app-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}