'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export type AnimationMode = 'default' | 'plasma' | 'minimal'

interface AnimationModeContextType {
    mode: AnimationMode
    setMode: (mode: AnimationMode) => void
}

const AnimationModeContext = createContext<AnimationModeContextType | undefined>(undefined)

export function AnimationModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setModeState] = useState<AnimationMode>('default')
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
        // Load mode from localStorage
        const savedMode = localStorage.getItem('animation-mode') as AnimationMode
        if (savedMode && ['default', 'plasma', 'minimal'].includes(savedMode)) {
            setModeState(savedMode)
        }
    }, [])

    // Auto-switch from plasma to default when entering light mode
    useEffect(() => {
        if (mounted && resolvedTheme === 'light' && mode === 'plasma') {
            setModeState('default')
            localStorage.setItem('animation-mode', 'default')
        }
    }, [resolvedTheme, mode, mounted])

    const setMode = (newMode: AnimationMode) => {
        setModeState(newMode)
        if (mounted) {
            localStorage.setItem('animation-mode', newMode)
        }
    }

    return (
        <AnimationModeContext.Provider value={{ mode, setMode }}>
            {children}
        </AnimationModeContext.Provider>
    )
}

export function useAnimationMode() {
    const context = useContext(AnimationModeContext)
    if (context === undefined) {
        throw new Error('useAnimationMode must be used within an AnimationModeProvider')
    }
    return context
}
