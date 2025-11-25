'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)

    useEffect(() => {
        let progressInterval: NodeJS.Timeout

        // Track multiple loading states
        const loadingStates = {
            windowLoaded: false,
            fontsLoaded: false,
            imagesLoaded: false,
            minTimeElapsed: false
        }

        const updateProgress = () => {
            const completed = Object.values(loadingStates).filter(Boolean).length
            const total = Object.keys(loadingStates).length
            setLoadingProgress(Math.floor((completed / total) * 100))
        }

        const checkAllLoaded = () => {
            if (Object.values(loadingStates).every(state => state === true)) {
                // Small delay to ensure smooth transition
                setTimeout(() => {
                    setIsLoading(false)
                }, 500)
            }
        }

        // 1. Wait for window load
        const handleWindowLoad = () => {
            loadingStates.windowLoaded = true
            updateProgress()
            checkAllLoaded()
        }

        if (document.readyState === 'complete') {
            handleWindowLoad()
        } else {
            window.addEventListener('load', handleWindowLoad)
        }

        // 2. Wait for fonts
        if ('fonts' in document) {
            document.fonts.ready.then(() => {
                loadingStates.fontsLoaded = true
                updateProgress()
                checkAllLoaded()
            })
        } else {
            loadingStates.fontsLoaded = true
            updateProgress()
        }

        // 3. Wait for images
        const images = Array.from(document.images)
        if (images.length === 0) {
            loadingStates.imagesLoaded = true
            updateProgress()
        } else {
            Promise.all(
                images.map(img => {
                    if (img.complete) return Promise.resolve()
                    return new Promise(resolve => {
                        img.onload = resolve
                        img.onerror = resolve
                    })
                })
            ).then(() => {
                loadingStates.imagesLoaded = true
                updateProgress()
                checkAllLoaded()
            })
        }

        // 4. Minimum time (ensure animations complete)
        const minTimer = setTimeout(() => {
            loadingStates.minTimeElapsed = true
            updateProgress()
            checkAllLoaded()
        }, 3000) // 3 seconds minimum to show brand animation

        return () => {
            window.removeEventListener('load', handleWindowLoad)
            clearTimeout(minTimer)
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
                                        delay: index * 0.1,
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
                            transition={{ duration: 1, delay: 2.0, ease: 'easeInOut' }}
                            className="absolute inset-0 z-20 pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                                transform: 'skewX(-20deg)',
                                mixBlendMode: 'overlay'
                            }}
                        />

                        {/* Loading Bar */}
                        <div className="mt-4 w-full max-w-xs mx-auto">
                            <motion.div
                                className="h-1 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] rounded-full relative z-10"
                                initial={{ width: 0 }}
                                animate={{ width: `${loadingProgress}%` }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-center text-sm text-foreground/50 mt-4"
                        >
                            {loadingProgress < 100 ? 'Loading...' : 'Ready!'}
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
