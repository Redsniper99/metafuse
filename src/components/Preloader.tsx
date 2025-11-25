'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time or wait for resources
        // In a real scenario, you might wait for specific assets
        // For now, we'll ensure a minimum display time for the brand
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        const handleLoad = () => {
            // If window load happens after timeout, we are good.
            // If before, we still wait for timeout to finish for smooth UX.
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => {
            clearTimeout(timer)
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                >
                    <div className="relative overflow-hidden p-4 sm:p-6 md:p-8">
                        {/* Base Logo with Blink */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 flex justify-center">
                            {"metafuse".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0.3 }}
                                    animate={{ opacity: [0.3, 1, 0.3, 1] }}
                                    transition={{
                                        duration: 1.5,
                                        times: [0, 0.4, 0.8, 1],
                                        delay: index * 0.1, // Stagger effect
                                        ease: "easeInOut"
                                    }}
                                    className="bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h1>

                        {/* Glare Effect Overlay */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{ duration: 1, delay: 2.0, ease: 'easeInOut' }} // Increased delay to wait for staggered blink
                            className="absolute inset-0 z-20 pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                                transform: 'skewX(-20deg)',
                                mixBlendMode: 'overlay'
                            }}
                        />

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            className="h-1 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] mt-2 rounded-full relative z-10"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
