'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './ThemeSwitcher'
import { AnimationModeSwitcher } from './AnimationModeSwitcher'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        { href: '/', label: 'home' },
        { href: '/about', label: 'about us' },
        { href: '/projects', label: 'projects' },
        { href: '/contact', label: 'contact us' },
    ]

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-1/2 transition-all duration-300 ${isScrolled ? 'top-2' : 'top-4'
                    }`}
            >
                <div className="relative">
                    {/* Enhanced background for light mode visibility */}
                    <div className="absolute inset-0 bg-gray-100/95 dark:bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-300 dark:border-white/20 shadow-lg" />

                    <div className="relative flex items-center justify-between px-6 py-3">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                        >
                            <img src="/metafuse.svg" alt="Metafuse" className="w-8 h-8 filter-none" />
                            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                                metafuse
                            </span>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === link.href
                                        ? 'bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] text-white shadow-md'
                                        : 'text-gray-700 dark:text-foreground/80 hover:text-[#2f70c5] dark:hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right side: Theme Switcher + Animation Mode Switcher + Mobile Menu Button */}
                        <div className="flex items-center gap-2">
                            <AnimationModeSwitcher />
                            <ThemeSwitcher />

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-background/95 dark:bg-background/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full p-6">
                                {/* Close Button */}
                                <div className="flex justify-end mb-8">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Mobile Navigation Links */}
                                <nav className="flex flex-col space-y-2">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`block px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 ${pathname === link.href
                                                    ? 'bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] text-white shadow-lg'
                                                    : 'text-gray-700 dark:text-foreground/90 hover:text-[#2f70c5] dark:hover:text-foreground transition-colors duration-200'
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Branding at bottom */}
                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-2 justify-center mb-4">
                                        <img src="/metafuse.svg" alt="Metafuse" className="w-8 h-8 filter-none" />
                                        <span className="text-2xl font-bold bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                                            metafuse
                                        </span>
                                    </div>
                                    <p className="text-sm text-foreground/50 mt-1 text-center">
                                        Digital Solutions
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
