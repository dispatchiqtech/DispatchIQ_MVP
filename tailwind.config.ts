import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#00FFC6', // Neon Teal
					foreground: '#000000',
					hover: '#00BFA5',
					glow: '#00FFC6'
				},
				secondary: {
					DEFAULT: '#7C4DFF', // Accent Purple
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#7C4DFF', // Accent Purple
					foreground: '#FFFFFF',
					glow: '#9C27B0'
				},
				muted: {
					DEFAULT: '#E0E0E0', // Light Gray
					foreground: '#666666'
				},
				success: {
					DEFAULT: '#00FFC6', // Neon Teal
					foreground: '#000000'
				},
				warning: {
					DEFAULT: '#FFB800',
					foreground: '#000000'
				},
				destructive: {
					DEFAULT: '#FF4444',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: '#0D0D0D', // Charcoal Black
					foreground: '#FFFFFF'
				},
				card: {
					DEFAULT: '#0D0D0D', // Charcoal Black
					foreground: '#FFFFFF'
				},
				sidebar: {
					DEFAULT: '#000000', // Midnight Black
					foreground: '#FFFFFF',
					primary: '#00FFC6',
					'primary-foreground': '#000000',
					accent: '#7C4DFF',
					'accent-foreground': '#FFFFFF',
					border: '#333333',
					ring: '#00FFC6'
				}
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #00FFC6 0%, #7C4DFF 100%)',
				'gradient-hero': 'linear-gradient(135deg, #00FFC6 0%, #7C4DFF 100%)',
				'gradient-card': 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 100%)',
				'gradient-mesh': 'linear-gradient(135deg, #000000 0%, #0D0D0D 50%, #000000 100%)'
			},
			boxShadow: {
				'glow': '0 0 20px rgba(0, 255, 198, 0.3)',
				'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
				'sm': '0 2px 8px rgba(0, 0, 0, 0.1)',
				'md': '0 4px 16px rgba(0, 0, 0, 0.15)',
				'lg': '0 8px 32px rgba(0, 0, 0, 0.2)',
				'teal-glow': '0 0 30px rgba(0, 255, 198, 0.4)',
				'purple-glow': '0 0 30px rgba(124, 77, 255, 0.4)',
				'intense': '0 0 80px rgba(0, 255, 198, 0.5)',
				'subtle': '0 2px 8px rgba(0, 255, 198, 0.1)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary-glow) / 0.4)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary-glow) / 0.8)' }
				},
				'pulse-teal': {
					'0%, 100%': { boxShadow: '0 0 25px rgba(0, 255, 198, 0.3)' },
					'50%': { boxShadow: '0 0 50px rgba(0, 255, 198, 0.6)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'bounce-in': {
					'0%': { opacity: '0', transform: 'scale(0.3)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 30px rgba(0, 255, 198, 0.4)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 60px rgba(0, 255, 198, 0.8)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'pulse-teal': 'pulse-teal 2.5s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
