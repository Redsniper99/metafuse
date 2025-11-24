'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Mail, href: '#', label: 'Email' },
    ]

    const footerLinks = [
        { href: '/', label: 'home' },
        { href: '/about', label: 'about us' },
        { href: '/projects', label: 'projects' },
        { href: '/contact', label: 'contact us' },
    ]

    return (
        <footer className="relative mt-20 bg-white/5 dark:bg-black/5 backdrop-blur-lg border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent mb-4">
                            metafuse
                        </h3>
                        <p className="text-foreground/70 text-sm">
                            Crafting innovative digital solutions that transform ideas into reality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
                                >
                                    <social.icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-foreground/60 text-sm">
                        © {currentYear} metafuse. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
