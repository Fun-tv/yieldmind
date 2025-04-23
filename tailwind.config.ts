
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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))'
				},
				defi: {
					dark: '#0E1014',
					card: '#13151D',
					accent: '#4361EE',
					text: {
						primary: 'rgba(255, 255, 255, 0.95)',
						secondary: 'rgba(255, 255, 255, 0.8)',
						muted: 'rgba(255, 255, 255, 0.7)'
					},
					success: '#22c55e',
					warning: '#f59e0b',
					error: '#ef4444'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-light': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'slide-out-right': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-light': 'pulse-light 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'fade-in': 'fade-in 0.3s ease-in-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'rgba(255, 255, 255, 0.9)',
						a: {
							color: 'hsl(var(--defi-accent))',
							'&:hover': {
								color: 'hsl(var(--defi-accent), 0.8)',
							},
						},
						strong: {
							color: 'rgba(255, 255, 255, 0.95)',
						},
						code: {
							color: 'rgba(255, 255, 255, 0.95)',
							backgroundColor: 'rgba(0, 0, 0, 0.3)',
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem',
						},
						h1: {
							color: 'rgba(255, 255, 255, 0.95)',
						},
						h2: {
							color: 'rgba(255, 255, 255, 0.95)',
						},
						h3: {
							color: 'rgba(255, 255, 255, 0.95)',
						},
						h4: {
							color: 'rgba(255, 255, 255, 0.95)',
						},
					}
				}
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography')
	]
} satisfies Config;
