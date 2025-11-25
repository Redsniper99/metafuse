'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const LiquidEther = dynamic(() => import('./LiquidEther'), {
    ssr: false,
    loading: () => null
})

export function AnimatedBackground() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Detect mobile devices
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

    if (isMobile) {
        // Use simple gradient background on mobile for better performance
        return (
            <div className="fixed inset-0 -z-10">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-[#2f70c5]/20 via-[#4a8de8]/15 to-[#5ba3ff]/10 dark:from-[#2f70c5]/10 dark:via-[#4a8de8]/8 dark:to-[#5ba3ff]/5"
                    style={{
                        animation: 'gradientShift 15s ease infinite',
                    }}
                />
                <style jsx>{`
                    @keyframes gradientShift {
                        0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
                        50% { transform: scale(1.1) rotate(2deg); opacity: 0.9; }
                    }
                `}</style>
            </div>
        )
    }

    // Use LiquidEther on desktop
    return (
        <div className="fixed inset-0 -z-10">
            <LiquidEther
                colors={['#2f70c5', '#4a8de8', '#5ba3ff']}
                mouseForce={20}
                cursorSize={100}
                isViscous={false}
                viscous={30}
                iterationsViscous={20}
                iterationsPoisson={20}
                resolution={0.4}
                isBounce={false}
                autoDemo={true}
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                className="w-full h-full"
            />
        </div>
    )
}
