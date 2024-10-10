import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      screens: {
        'xs':'0px',
        'sm': '320px',  // Mobile screens (480px and up)
        'md': '705px',  // Tablet screens (768px and up)
        'lg': '900px', // Laptop screens (1024px and up)
        'xl': '1200px', // Desktop screens (1280px and up)
        '2xl': '1536px', // Extra large screens
      },

      animation: {
        popOut: 'popOut 0.3s ease-in-out forwards',
        bounceSlow: 'bounce 3s infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeOut: 'fadeOut 2s ease-in-out',
        spinSlow: 'spin 5s linear infinite',
        pulseFast: 'pulse 1s linear infinite',
        slideIn: 'slideIn 0.5s ease-out',
        slideOut: 'slideOut 0.5s ease-in',
        wiggle: 'wiggle 1s ease-in-out infinite',
        flipX: 'flipX 1s ease-in-out',
        flipY: 'flipY 1s ease-in-out',
        scaleDown: 'scaleDown 0.5s ease-out',
        rollIn: 'rollIn 1s ease-out',
        rollOut: 'rollOut 1s ease-in',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        rubberBand: 'rubberBand 1s ease-in-out',
        jello: 'jello 1s ease-in-out',
        flip: 'flip 1s ease-in-out',
        rotate: 'rotate 2s linear infinite',
        shake: 'shake 1s ease-in-out infinite',
        swing: 'swing 1s ease-in-out infinite',
        blink: 'blink 1.5s step-start infinite',
        bounceIn: 'bounceIn 0.75s ease-out',
        flash: 'flash 1s ease-in-out infinite',
        scaleUp: 'scaleUp 0.5s ease-in-out',
        tada: 'tada 1s ease-in-out',
        hinge: 'hinge 2s ease-in-out',
        lightSpeedIn: 'lightSpeedIn 1s ease-out',
        lightSpeedOut: 'lightSpeedOut 1s ease-in',
        swingIn: 'swingIn 0.5s ease-out',
        swingOut: 'swingOut 0.5s ease-in',
        slideOutLeft: 'slideOutLeft 0.5s ease-in',
        slideOutRight: 'slideOutRight 0.5s ease-in',
        slideOutTop: 'slideOutTop 0.5s ease-in',
        slideOutBottom: 'slideOutBottom 0.5s ease-in',
        fadeInUp: 'fadeInUp 1s ease-out',
        fadeInDown: 'fadeInDown 1s ease-out',
        fadeOutUp: 'fadeOutUp 1s ease-in',
        fadeOutDown: 'fadeOutDown 1s ease-in',
        
        
      },
      keyframes: {

        popOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.10)' },
        },

        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flipX: {
          '0%': { transform: 'rotateX(0)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
        flipY: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.8)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        rollIn: {
          '0%': { transform: 'translateX(-100%) rotate(-120deg)' },
          '100%': { transform: 'translateX(0) rotate(0)' },
        },
        rollOut: {
          '0%': { transform: 'translateX(0) rotate(0)' },
          '100%': { transform: 'translateX(100%) rotate(120deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
        rubberBand: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.25, 0.75)' },
          '40%': { transform: 'scale(0.75, 1.25)' },
          '50%': { transform: 'scale(1.15, 0.85)' },
          '65%': { transform: 'scale(0.95, 1.05)' },
          '75%': { transform: 'scale(1.05, 0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        jello: {
          '0%, 100%': { transform: 'none' },
          '11.1%, 22.2%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
          '33.3%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
          '44.4%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
          '55.5%': { transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
          '66.6%': { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
          '77.7%': { transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        swing: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        blink: {
          '40%': { opacity: '0' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        flash: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        },
        hinge: {
          '0%': { transform: 'rotate(0)' },
          '20%, 60%': { transform: 'rotate(80deg)', transformOrigin: 'top left' },
          '40%, 80%': { transform: 'rotate(60deg)', transformOrigin: 'top left' },
          '100%': { transform: 'translateY(700px)', opacity: '0' },
        },
        lightSpeedIn: {
          '0%': { transform: 'translateX(100%) skewX(30deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) skewX(0)', opacity: '1' },
        },
        lightSpeedOut: {
          '0%': { transform: 'translateX(0) skewX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%) skewX(30deg)', opacity: '0' },
        },
        swingIn: {
          '0%': { transform: 'rotate(-100deg)', transformOrigin: 'top right' },
          '100%': { transform: 'rotate(0)', transformOrigin: 'top right' },
        },
        swingOut: {
          '0%': { transform: 'rotate(0)', transformOrigin: 'top left' },
          '100%': { transform: 'rotate(100deg)', transformOrigin: 'top left' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideOutTop: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slideOutBottom: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
        
      },
    },
  },
  plugins: [],
};
export default config;
