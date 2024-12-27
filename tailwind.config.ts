import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#121212", // Dark theme background
        light: "#f9fafb", // Light theme background
        primary: "#1e3a8a", // Deep blue for primary actions
        secondary: "#9333ea", // Vibrant purple for accents
        accent: "#4ade80", // Soft green for highlights
        muted: "#64748b", // Muted blue-gray for secondary text
        error: "#dc2626", // Red for error messages
        success: "#16a34a", // Green for success messages
        info: "#2563eb", // Blue for informational messages
        warning: "#facc15", // Yellow for warnings
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Clean, modern font for body text
        heading: ["Poppins", "sans-serif"], // Elegant font for headings
        mono: ["Fira Code", "monospace"], // For code snippets and technical content
      },
      boxShadow: {
        glow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(72, 187, 255, 0.6)", // Glowing shadow for cards and buttons
        soft: "0 2px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for subtle depth
      },
    },
  },
  plugins: [
    
  ],
} satisfies Config;
