import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        finguard: {
          black: '#0a0a0a',
          navy: '#0f1629',
          'navy-hover': '#111827',
          blue: '#2563eb',
          amber: '#f59e0b',
          red: '#ef4444',
          green: '#22c55e',
          slate: '#94a3b8'
        },
        border: {
          finguard: '#1e293b'
        }
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        'mono-jetbrains': ['var(--font-jetbrains-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif']
      }
    },
  },
  plugins: [],
}

export default config
