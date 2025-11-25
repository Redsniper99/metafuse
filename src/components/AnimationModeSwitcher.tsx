'use client'

import { useAnimationMode } from '@/contexts/AnimationModeContext'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sparkles, Waves, Minimize2 } from 'lucide-react'

export function AnimationModeSwitcher() {
    const { mode, setMode } = useAnimationMode()
    const [mounted, setMounted] = useState(false)
    const { theme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-10 h-10" />
    }

    const isDark = resolvedTheme === 'dark' || theme === 'dark'

    // Define available modes based on theme
    const allModes = [
        { id: 'default' as const, icon: Sparkles, label: 'Default Animation' },
        { id: 'plasma' as const, icon: Waves, label: 'Floating Lines' },
        { id: 'minimal' as const, icon: Minimize2, label: 'Minimal Mode' }
    ]

    // Filter modes based on theme - plasma only in dark mode
    const availableModes = isDark
        ? allModes
        : allModes.filter(m => m.id !== 'plasma')

    const currentModeIndex = availableModes.findIndex(m => m.id === mode)
    const CurrentIcon = availableModes[currentModeIndex]?.icon || Sparkles

    const cycleMode = () => {
        const nextIndex = (currentModeIndex + 1) % availableModes.length
        setMode(availableModes[nextIndex].id)
    }

    return (
        <button
            onClick={cycleMode}
            className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            aria-label={`Change animation mode (current: ${availableModes[currentModeIndex]?.label})`}
            title={availableModes[currentModeIndex]?.label}
        >
            <CurrentIcon className="w-5 h-5 text-foreground/80 group-hover:scale-110 transition-transform duration-300" />
        </button>
    )
}
