'use client'

import { Footer } from '@/components/Footer'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import TextType from '@/components/TextType'
import { ArrowRight, Code, Palette, Zap, Rocket } from 'lucide-react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices for scalability and performance.',
      features: ['React/Next.js', 'TypeScript', 'API Integration']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast load times and smooth interactions through advanced optimization techniques.',
      features: ['Code Splitting', 'Lazy Loading', 'Caching Strategies']
    },
    {
      icon: Rocket,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for modern applications.',
      features: ['AWS/Vercel', 'CI/CD', 'Monitoring']
    },
  ]

  const technologies = [
    {
      name: 'React',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4" /><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21.1c-1.2-2-2.3-4.1-3.6-6-1.2-2.1-2.4-4.2-3.6-6.1 3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.2zm7.6-13.8c-5.3-1.2-11.1-2-17.2-2-6.1 0-11.9.8-17.2 2-1.7-3.7-3-7.4-3.9-11.1-.6-2.3-.9-4.3-1-6.2-.1-1.6-.1-3.1 0-4.5.4-7.4 2.3-11.6 5.6-13.6 1.3-.8 2.9-1.2 4.9-1.2 6.2 0 14.2 5.2 22.2 13.9-7.9 8.7-15.9 13.9-22.2 13.9-2 0-3.6-.4-4.9-1.2-3.3-2-5.2-6.2-5.6-13.6-.1-1.4-.1-2.9 0-4.5.1-1.9.4-3.9 1-6.2.9-3.7 2.3-7.4 3.9-11.1 5.3 1.2 11.1 2 17.2 2s11.9-.8 17.2-2c1.7 3.7 3 7.4 3.9 11.1.6 2.3.9 4.3 1 6.2.1 1.6.1 3.1 0 4.5-.4 7.4-2.3 11.6-5.6 13.6z" /></g>
        </svg>
      )
    },
    {
      name: 'Next.js',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8c21.3-14.2 35.3-38.6 35.3-66.1C128 28.7 99.3 0 64 0zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'TypeScript',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#3178c6" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z" />
        </svg>
      )
    },
    {
      name: 'Node.js',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#83CD29" d="M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.974 10 35.044 10 38.43v51.14c0 3.386 1.951 6.456 4.82 8.096l11.61 6.699c6.317 3.118 8.543 3.118 11.387 3.118 9.318 0 14.644-5.66 14.644-15.48V43.104c0-.675-.551-1.247-1.246-1.247h-5.445c-.696 0-1.246.572-1.246 1.247v48.898c0 4.744-4.914 9.49-12.893 5.479l-12.176-7.016c-.403-.232-.651-.674-.651-1.15V38.43c0-.476.248-.918.651-1.15l43.793-25.286c.392-.227.919-.227 1.311 0l43.792 25.286c.404.232.652.674.652 1.15v51.14c0 .476-.248.918-.652 1.15L78.056 110.05c-.393.227-.919.227-1.311 0l-11.178-6.644c-.348-.2-.779-.193-1.121.006-3.812 2.232-4.568 2.53-8.181 3.781-.913.273-2.288.64.348 1.832l14.607 8.659c1.381.798 2.923 1.198 4.467 1.198s3.086-.4 4.467-1.198l43.792-25.284c2.79-1.64 4.52-4.71 4.52-8.096V38.43c0-3.387-1.73-6.456-4.52-8.096z" /><path fill="#83CD29" d="M77.727 76.172c-11.833 0-14.298-5.451-14.298-10.004 0-.676.551-1.248 1.246-1.248h5.545c.646 0 1.196.471 1.246 1.105.877 5.851 3.466 8.797 12.261 8.797 7.561 0 10.779-1.698 10.779-5.695 0-2.301-.908-4.004-12.63-5.149-9.756-1.004-15.805-3.105-15.805-10.818 0-7.121 6.011-11.377 16.085-11.377 11.319 0 16.92 3.922 17.631 12.368.029.349-.092.697-.327.952-.235.257-.565.405-.915.405h-5.545c-.615 0-1.151-.45-1.227-1.054-1.369-6.035-4.695-7.97-11.617-7.97-8.543 0-9.542 2.988-9.542 5.224 0 2.601 1.171 3.355 12.257 4.821 10.972 1.454 16.178 3.505 16.178 11.101 0 7.702-6.418 12.139-17.612 12.139z" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#38BDF8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" />
        </svg>
      )
    },
    {
      name: 'MongoDB',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#4DB33D" d="M65.7 110.5h-3.2c-.4.8-.7 1.7-.7 2.7v5.8l2.4-.1c0-3.6.3-6 1.5-8.4z" /><path fill="#4DB33D" d="M69.3 15.2C68 11.2 65.9 6.6 65 5v-.2l-.1-.1c-.1 0-.1 0-.2.1v.3c-1 1.5-3 6.1-4.4 10-9.3 26.6-17.5 36.1-17.5 58.3 0 11.2 4.9 20.2 11.7 26.7 1.7 1.8 4.5 4 5.8 5.6 1.3-1.7 4-3.8 5.7-5.5 6.9-6.5 11.9-15.5 11.9-26.9-.1-22.2-8.3-31.9-17.6-58.2zm-4.4 78.3c-1 2.4-1.3 4.8-1.5 8.4l-2.3.1v-5.8c0-1 .3-1.9.6-2.7h3.2zm-2.8 19.6c.4-.3.6-.9.6-1.5l.4-7.4c1 0 1.6-.4 2 0l.5 7.5c0 .7.2 1.3.8 1.7-1.3.8-2.7 1.4-4.3 1.8v-2.1z" />
        </svg>
      )
    },
    {
      name: 'PostgreSQL',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#336791" d="M91.3 104.1c4.5 0 7.8-.9 9.8-2.7 2.1-1.9 3-4.7 2.9-8.4-.1-3.7-1.2-6.5-3.3-8.5-2.1-2-5.4-3-9.9-3h-8.4v22.6h8.9zm-34-62.3c2.4 0 4.3.8 5.7 2.3 1.4 1.5 2.1 3.5 2.1 6 0 2.3-.7 4.2-2.1 5.9-1.4 1.6-3.3 2.4-5.7 2.4H49v-16.6h8.3zm58.5 50.4c3-3.2 4.5-7.6 4.5-13.2 0-5.3-1.5-9.6-4.5-12.9-3-3.3-7.2-4.9-12.6-4.9h-5.4V40.5c0-3.3-1.2-5.8-3.5-7.6-2.4-1.8-5.6-2.7-9.8-2.7H43.2c-3.6 0-6.5.8-8.6 2.5-2.1 1.6-3.2 3.8-3.2 6.5v72.4c0 2.7 1.1 4.9 3.2 6.5 2.1 1.6 5 2.4 8.6 2.4H82c4.2 0 7.5-.9 9.8-2.7 2.3-1.8 3.5-4.3 3.5-7.5V88.6h5.4c5.4-.1 9.6-1.8 12.6-5.4zM54.9 50.7c4.8 0 8.6 1.5 11.4 4.4 2.8 2.9 4.2 6.9 4.2 11.9 0 5-1.4 9-4.2 11.9-2.8 2.9-6.6 4.4-11.4 4.4h-6.4V50.7h6.4zM91.3 81.8h-4.2V89h4.2c2.3 0 4-.5 5.3-1.5 1.3-1 1.9-2.5 1.9-4.3 0-1.8-.6-3.3-1.9-4.3-1.3-1.1-3.1-1.6-5.3-1.6z" />
        </svg>
      )
    },
    {
      name: 'Express',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="currentColor" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.64 28.83 6.53-2.17 11.22-6.56 13.94-13.32 1-2.49 2.01-4.98 3.03-7.53.84.89 2.19 1.67 2.49 2.75a42.53 42.53 0 01-11.31 26.92c-18.23 17.06-46.07 14.23-60.67-6.01C-13.57 86.2-5.11 73.63 1.33 61.74zm5.81-1.71h50.45c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.45 27.57z" />
        </svg>
      )
    },
    {
      name: 'Docker',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#2496ED" d="M27.2 63.4h11.5v10.4H27.2zm12.7 0h11.5v10.4H39.9zm0-11.8h11.5v10.4H39.9zm12.6 11.8h11.6v10.4H52.5zm0-11.8h11.6v10.4H52.5zm12.8 11.8h11.5v10.4H65.3zm0-11.8h11.5v10.4H65.3zm0-11.8h11.5v10.4H65.3zM78 51.6h11.5v10.4H78zm0-11.8h11.5v10.4H78z" /><path fill="#2496ED" d="M107.3 55.3c-2.5-1.5-8.2-2.2-12.9-.6-1.2-9-6.8-16.8-13.8-22.4l-2.7-2.1-1.8 2.8c-3 4.6-4.2 12-3.2 17.5.6 3.5 2.3 6.9 4.9 9.5-.9.5-1.8 1-2.8 1.4-4.2 1.8-8.8 2.5-13.4 2.5H1.3l-.3 2.1c-1.3 12 1.3 24.1 7.7 33.9 5.1 7.7 12.7 13 22.4 14.9 18.1 3.7 39.5-.9 54.6-13.9 10.6-9.1 17.3-22.5 19.8-37.3 4.1.4 9.2-.5 12.6-3.5z" />
        </svg>
      )
    },
    {
      name: 'Git',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#F05032" d="M124.7 58.3L69.8 3.4c-4.4-4.4-11.7-4.4-16.2 0L43.1 13.9 54 24.8c4.7-1.6 10.2-.5 13.9 3.2 3.7 3.7 4.8 9.1 3.3 13.8l10.5 10.5c4.7-1.6 10.2-.5 13.9 3.2 5.3 5.3 5.3 13.8 0 19.1s-13.8 5.3-19.1 0c-3.9-3.9-4.9-9.6-3-14.4L64 51.7v28.2c1.3.6 2.5 1.5 3.6 2.6 5.3 5.3 5.3 13.8 0 19.1s-13.8 5.3-19.1 0-5.3-13.8 0-19.1c1.3-1.3 2.8-2.3 4.5-2.9V51.3c-1.7-.6-3.2-1.5-4.5-2.9-3.9-3.9-4.9-9.7-2.9-14.5L35.9 24.2 3.5 56.6c-4.4 4.4-4.4 11.7 0 16.2l54.9 54.9c4.4 4.4 11.7 4.4 16.2 0l54.6-54.6c4.6-4.4 4.6-11.8.2-16.2z" />
        </svg>
      )
    },
    {
      name: 'Python',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#fff" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V28h30v4H23.776c-8.484 0-15.907 5.09-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V99H63v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.04-9.097 2.916-17.798 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z" />
        </svg>
      )
    },
    {
      name: 'GraphQL',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#E10098" d="M115.83 60.1l-48.4-83.8c-2.9-5-10-5.1-13 0L6.03 60.1C3.13 65 6.53 71 12.33 71h96.1c5.8 0 9.2-6.1 6.3-10.9zm-99.69 4l46.2-80 45.9 79.9H16.14z" /><path fill="#E10098" d="M108.64 91.97A9.96 9.96 0 1198.73 102a9.982 9.982 0 019.91-10.03zm-89.28 0A9.96 9.96 0 119.45 102a9.982 9.982 0 019.91-10.03zM64 20.84a9.96 9.96 0 11-9.91 9.97A9.982 9.982 0 0164 20.84zM64 53.06l-25.7 44.4h51.4L64 53.06z" /></svg>
      )
    },
    {
      name: 'AWS',
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#FF9900" d="M38.089 77.466l-11.4 4.313-10.5 3.954-5.198 1.96c-2.473.933-5.171-1.584-5.5-5.127-.326-3.524 1.65-7.532 4.123-8.363l24.378-9.216 13.706-5.172a17.706 17.706 0 019.215-1.9h13.033a17.706 17.706 0 019.217 1.9l13.706 5.172 24.378 9.216c2.472.831 4.45 4.839 4.123 8.363-.327 3.544-3.027 6.06-5.5 5.127l-15.698-5.914-11.4-4.313-8.335-3.142c-2.452-.922-4.978-1.446-7.514-1.557s-5.062.306-7.514 1.557l-8.335 3.142z" /><path fill="#FF9900" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32.7 106.7c-9.6 9.611-21.9 14.9-34.7 14.9s-25.1-5.3-34.7-14.9C17.7 97.1 12.4 84.8 12.4 72s5.3-25.1 14.9-34.7C37 27.7 49.3 22.4 62 22.4s25.1 5.3 34.7 14.9c9.611 9.6 14.9 21.9 14.9 34.7s-5.289 25.1-14.9 34.7z" /></svg>
      )
    },
  ]

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'We write maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating stunning user interfaces that provide exceptional user experiences.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized solutions that deliver lightning-fast performance and responsiveness.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technologies to build innovative digital solutions.',
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements through in-depth consultation.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Strategic roadmap creation with clear milestones, timelines, and deliverables for your project.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Crafting beautiful, user-centric designs with iterative feedback and refinement.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building robust, scalable solutions using modern technologies and best practices.',
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Seamless deployment, testing, and optimization for a successful product launch.',
    }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with seamless user experience and secure payments.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with beautiful data visualizations.',
      tags: ['React', 'D3.js', 'Node.js'],
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application with native performance.',
      tags: ['React Native', 'Firebase', 'TypeScript'],
    },
  ]

  const reasons = [
    {
      title: '99% Client Satisfaction',
      description: 'Our clients love working with us, and we have the testimonials to prove it.'
    },
    {
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects on time, every time.'
    },
    {
      title: 'Expert Team',
      description: 'Work with experienced professionals who are passionate about technology.'
    },
    {
      title: 'Ongoing Support',
      description: 'We provide continuous support and maintenance after project completion.'
    }
  ]

  const testimonials = [
    {
      quote: "metafuse transformed our digital presence. Their attention to detail and technical expertise is unmatched.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      rating: 5
    },
    {
      quote: "The team delivered beyond our expectations. Professional, responsive, and incredibly talented.",
      author: "Michael Chen",
      role: "CTO, DataFlow",
      rating: 5
    },
    {
      quote: "Working with metafuse was a game-changer for our business. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Founder, Creative Labs",
      rating: 5
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <AnimatedBackground />

      <main className="relative scroll-smooth snap-y snap-proximity h-screen overflow-y-scroll">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen snap-start flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="relative max-w-5xl mx-auto text-center z-10">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-8"
            >
              <img src="/metafuse.svg" alt="Metafuse" className="w-24 h-24 md:w-32 md:h-32" />
            </motion.div>

            <TextType
              as="h1"
              text={["metafuse"]}
              typingSpeed={100}
              deletingSpeed={100}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[#2f70c5] via-[#4a8de8] to-[#5ba3ff] bg-clip-text text-transparent inline-block"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-8 font-light"
            >
              crafting innovative digital solutions
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto"
            >
              We transform ideas into reality through cutting-edge technology, beautiful design, and exceptional user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/projects"
                className="group px-8 py-4 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-full hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] rounded-full hover:shadow-lg hover:shadow-[#2f70c5]/50 transition-all duration-300 font-medium"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* About Company Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -300px 0px" }}
          variants={containerVariants}
          className="min-h-screen snap-start py-20 px-4 sm:px-6 lg:px-8 relative flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                About metafuse
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                We are a team of passionate developers and designers dedicated to creating exceptional digital experiences.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="card-glare group relative p-6 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2f70c5]/30 via-[#4a8de8]/20 to-[#5ba3ff]/30 blur-xl" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#2f70c5] to-[#4a8de8] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2f70c5] to-[#4a8de8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#4a8de8] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#2f70c5]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -300px 0px" }}
          variants={containerVariants}
          className="min-h-screen snap-start py-20 px-4 sm:px-6 lg:px-8 relative flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to your needs
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card-glare group p-8 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2f70c5] to-[#4a8de8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-[#2f70c5]/20 border border-[#2f70c5]/30 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -300px 0px" }}
          variants={containerVariants}
          className="min-h-screen snap-start py-20 px-4 sm:px-6 lg:px-8 relative flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                Our Process
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                A proven methodology for successful project delivery
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2f70c5] to-[#4a8de8] flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  <div className="card-glare flex-1 p-6 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl group-hover:bg-gray-200/90 dark:group-hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -300px 0px" }}
          variants={containerVariants}
          className="min-h-screen snap-start py-20 px-4 sm:px-6 lg:px-8 relative flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                We deliver results that exceed expectations
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="card-glare p-8 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/70">{reason.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -300px 0px" }}
          variants={containerVariants}
          className="min-h-screen snap-start py-20 px-4 sm:px-6 lg:px-8 relative flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                Trusted by businesses worldwide
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card-glare p-8 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#4a8de8] text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-foreground/90 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -300px 0px" }}
          variants={containerVariants}
          className="min-h-screen snap-start py-20 px-4 sm:px-6 lg:px-8 relative flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-lg md:text-xl text-foreground/70">
                Some of our recent work that we're proud of
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="card-glare group p-6 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-[#2f70c5]/20 to-[#4a8de8]/20 rounded-xl mb-4 flex items-center justify-center">
                    <Code className="w-16 h-16 text-foreground/30" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -300px 0px" }}
          variants={containerVariants}
          className="min-h-screen snap-start py-20 px-4 sm:px-6 lg:px-8 relative flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                Technologies We Use
              </h2>
              <p className="text-lg md:text-xl text-foreground/70">
                Building with modern, cutting-edge technologies
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="card-glare group p-8 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-4"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {tech.logo}
                  </div>
                  <p className="text-sm font-semibold text-center">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="min-h-screen snap-start py-20 px-4 sm:px-6 lg:px-8 relative flex items-center"
        >
          <div className="max-w-4xl mx-auto w-full text-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto"
            >
              Let's bring your ideas to life with cutting-edge technology and beautiful design.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] rounded-full text-white font-semibold hover:shadow-lg hover:shadow-[#2f70c5]/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full font-semibold hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer Section */}
        <section className="snap-start">
          <Footer />
        </section>
      </main>
    </div>
  )
}
