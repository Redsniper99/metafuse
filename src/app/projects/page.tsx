import { Footer } from '@/components/Footer'
import { Code, ExternalLink, Github } from 'lucide-react'

export default function ProjectsPage() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern technologies for optimal performance and scalability.',
            tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
            category: 'Web Application',
        },
        {
            title: 'Analytics Dashboard',
            description: 'Real-time analytics platform with beautiful data visualizations, custom reporting, and interactive charts. Helps businesses make data-driven decisions with ease.',
            tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
            category: 'Data Visualization',
        },
        {
            title: 'Mobile App',
            description: 'Cross-platform mobile application with native performance, offline capabilities, and seamless cloud synchronization. Delivers exceptional user experience on both iOS and Android.',
            tags: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
            category: 'Mobile Development',
        },
        {
            title: 'SaaS Platform',
            description: 'Multi-tenant SaaS platform with role-based access control, subscription management, and comprehensive API. Scalable architecture supporting thousands of users.',
            tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
            category: 'Web Application',
        },
        {
            title: 'AI-Powered Chatbot',
            description: 'Intelligent chatbot leveraging natural language processing to provide automated customer support. Integrates seamlessly with existing systems and learns from interactions.',
            tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
            category: 'Artificial Intelligence',
        },
        {
            title: 'Portfolio Website',
            description: 'Modern, responsive portfolio website with stunning animations, optimized performance, and SEO best practices. Showcases work in an engaging and professional manner.',
            tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
            category: 'Web Design',
        },
    ]

    const categories = ['All', 'Web Application', 'Mobile Development', 'Data Visualization', 'Artificial Intelligence', 'Web Design']

    return (
        <main className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />

                <div className="relative max-w-4xl mx-auto text-center z-10">
                    <div className="flex justify-center mb-6">
                        <img src="/metafuse.svg" alt="Metafuse" className="w-20 h-20 md:w-24 md:h-24" />
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                        Our Projects
                    </h1>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                        Explore our portfolio of innovative solutions and successful collaborations
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
                            >
                                {/* Project Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-[#2f70c5]/20 to-[#4a8de8]/20 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                                    <Code className="w-16 h-16 text-foreground/30" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="text-xs text-foreground/50 mb-2">{project.category}</div>
                                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 text-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <button className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm flex items-center justify-center gap-2">
                                            <ExternalLink className="w-4 h-4" />
                                            View
                                        </button>
                                        <button className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                                            <Github className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
