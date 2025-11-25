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
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'GraphQL', icon: '◈' },
    { name: 'Docker', icon: '🐳' },
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
                  className="group relative p-6 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden cursor-pointer"
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
                  className="group p-8 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300"
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
                  <div className="flex-1 p-6 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl group-hover:bg-gray-200/90 dark:group-hover:bg-white/10 transition-all duration-300">
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
                  className="p-8 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300"
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
                  className="p-8 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300"
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
                  className="group p-6 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300"
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
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="group p-6 bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-200/90 dark:hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center"
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
