'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const PixelBlast = dynamic(() => import('./PixelBlast'), {
    ssr: false,
    loading: () => null
})

export function AnimatedBackground() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
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

    // Use PixelBlast for all devices with optimized settings
    return (
        <div className="fixed inset-0 -z-10">
            <PixelBlast
                variant="circle"
                pixelSize={isMobile ? 8 : 6}
                color="#2f70c5"
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
