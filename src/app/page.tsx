'use client'

import { Footer } from '@/components/Footer'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import ElectricBorder from '@/components/ElectricBorder'
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

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
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

      <main className="relative">
        {/* Hero Section */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="relative max-w-5xl mx-auto text-center z-10">
            <TextType
              as="h1"
              text={["metafuse"]}
              typingSpeed={100}
              deletingSpeed={100}
              loop={false}
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
                className="group px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
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
          className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background/90 backdrop-blur-md"
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative h-full"
                >
                  <ElectricBorder
                    color="#2f70c5"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16, height: '100%' }}
                  >
                    <div className="p-6 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-foreground/70 text-sm">{feature.description}</p>
                    </div>
                  </ElectricBorder>
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
          className="py-20 px-4 sm:px-6 lg:px-8 relative"
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
                  className="group p-6 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
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
          className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background/90 backdrop-blur-md"
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
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="group p-6 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium text-center">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
