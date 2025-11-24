'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useEffect, useState } from 'react'

export function Navbar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: 'home' },
        { href: '/about', label: 'about us' },
        { href: '/projects', label: 'projects' },
        { href: '/contact', label: 'contact us' },
    ]

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 w-1/2 z-50 transition-all duration-500 rounded-2xl ${isScrolled
                ? 'bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl'
                : 'bg-white/5 dark:bg-black/5 backdrop-blur-md border border-white/10 dark:border-white/5'
                }`}
        >
            <div className="px-6 sm:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                    >
                        metafuse
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === link.href
                                    ? 'bg-white/20 dark:bg-white/10 backdrop-blur-md text-foreground'
                                    : 'text-foreground/70 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Switcher */}
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    )
}
