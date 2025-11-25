'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Track multiple loading states
        const loadingStates = {
            windowLoaded: false,
            fontsLoaded: false,
            imagesLoaded: false,
            minTimeElapsed: false
        }

        const checkAllLoaded = () => {
            if (Object.values(loadingStates).every(state => state === true)) {
                setTimeout(() => {
                    setIsLoading(false)
                }, 500)
            }
        }

        // 1. Wait for window load
        const handleWindowLoad = () => {
            loadingStates.windowLoaded = true
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
                checkAllLoaded()
            })
        } else {
            loadingStates.fontsLoaded = true
        }

        // 3. Wait for images
        const images = Array.from(document.images)
        if (images.length === 0) {
            loadingStates.imagesLoaded = true
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
                checkAllLoaded()
            })
        }

        // 4. Minimum time (ensure animations complete)
        const minTimer = setTimeout(() => {
            loadingStates.minTimeElapsed = true
            checkAllLoaded()
        }, 2500)

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
                    <div className="relative">
                        {/* Logo and Text with Glare Effect */}
                        <motion.div
                            className="flex items-center gap-4 relative overflow-hidden rounded-3xl p-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Logo */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Image
                                    src="/metafuse.svg"
                                    alt="Metafuse Logo"
                                    width={80}
                                    height={80}
                                    className="w-16 h-16 md:w-20 md:h-20"
                                />
                            </motion.div>

                            {/* Text */}
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#2f70c5] via-[#4a8de8] to-[#5ba3ff] bg-clip-text text-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                metafuse
                            </motion.h1>

                            {/* Glare Effect Overlay - Sweeps across logo and text */}
                            <motion.div
                                initial={{ x: '-150%' }}
                                animate={{ x: '250%' }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    ease: 'easeInOut'
                                }}
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                                    width: '50%',
                                    transform: 'skewX(-20deg)',
                                    mixBlendMode: 'overlay',
                                    filter: 'blur(2px)'
                                }}
                            />

                            {/* Subtle glow pulse */}
                            <motion.div
                                className="absolute inset-0 -z-10 blur-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    background: 'radial-gradient(circle, rgba(47,112,197,0.4) 0%, rgba(74,141,232,0.3) 50%, transparent 70%)'
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
