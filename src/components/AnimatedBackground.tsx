'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useAnimationMode } from '@/contexts/AnimationModeContext'

const PixelBlast = dynamic(() => import('./PixelBlast'), {
    ssr: false,
    loading: () => null
})

const FloatingLines = dynamic(() => import('./FloatingLines'), {
    ssr: false,
    loading: () => null
})

export function AnimatedBackground() {
    const [isMobile, setIsMobile] = useState(false)
    const { theme, systemTheme } = useTheme()
    const { mode } = useAnimationMode()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const checkMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase()
            const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
            const isSmallScreen = window.innerWidth < 768
            setIsMobile(isMobileDevice || (isTouchDevice && isSmallScreen))
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Determine current theme
    const currentTheme = theme === 'system' ? systemTheme : theme
    const isLightMode = currentTheme === 'light'

    // Use light blue for light mode, darker blue for dark mode
    const backgroundColor = isLightMode ? '#93c5fd' : '#2f70c5'
    const plasmaColor = isLightMode ? '#4a8de8' : '#2f70c5'

    // Don't render until mounted to avoid hydration issues
    if (!mounted) {
        return (
            <div className="fixed inset-0 -z-10 bg-blue-50 dark:bg-black" />
        )
    }

    // Minimal mode: only background color
    if (mode === 'minimal') {
        return (
            <div className="fixed inset-0 -z-10 bg-blue-50 dark:bg-black transition-colors duration-500" />
        )
    }

    // Plasma mode (FloatingLines)
    if (mode === 'plasma') {
        return (
            <div className="fixed inset-0 -z-10 bg-blue-50 dark:bg-black">
                <FloatingLines
                    enabledWaves={['top', 'middle', 'bottom']}
                    lineCount={[4, 6, 8]}
                    lineDistance={[12, 10, 8]}
                    bendRadius={5.0}
                    bendStrength={-0.2}
                    interactive={true}
                    parallax={true}
                    animationSpeed={0.3}
                    linesGradient={['#1a4d8f', '#2f70c5', '#3d7ec2', '#4a8de8']}
                    mixBlendMode="normal"
                />
            </div>
        )
    }

    // Default mode: PixelBlast
    return (
        <div className="fixed inset-0 -z-10 bg-blue-50 dark:bg-black">
            <PixelBlast
                variant="circle"
                pixelSize={isMobile ? 8 : 6}
                color={backgroundColor}
                patternScale={isMobile ? 2 : 3}
                patternDensity={isMobile ? 0.9 : 1.2}
                pixelSizeJitter={0.5}
                enableRipples={isMobile ? false : true}
                rippleSpeed={0.4}
                rippleThickness={0.12}
                rippleIntensityScale={1.5}
                liquid={isMobile ? false : true}
                liquidStrength={0.12}
                liquidRadius={1.2}
                liquidWobbleSpeed={5}
                speed={0.6}
                edgeFade={0.25}
                transparent
            />
        </div>
    )
}
