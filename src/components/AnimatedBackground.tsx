'use client'

import dynamic from 'next/dynamic'

const LiquidEther = dynamic(() => import('./LiquidEther'), {
    ssr: false,
    loading: () => null
})

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            <LiquidEther
                colors={['#2f70c5', '#4a8de8', '#5ba3ff']}
                mouseForce={20}
                cursorSize={100}
                isViscous={false}
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
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
