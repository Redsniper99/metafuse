import { Footer } from '@/components/Footer'
import { Users, Target, Award, Heart } from 'lucide-react'

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: 'Our Mission',
            description: 'To empower businesses with innovative digital solutions that drive growth and success.',
        },
        {
            icon: Users,
            title: 'Our Team',
            description: 'A diverse group of talented professionals passionate about technology and design.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
        },
        {
            icon: Heart,
            title: 'Our Values',
            description: 'Integrity, innovation, and collaboration are at the core of everything we do.',
        },
    ]

    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '5+', label: 'Years Experience' },
        { number: '15+', label: 'Team Members' },
    ]

    return (
        <main className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />

                <div className="relative max-w-4xl mx-auto text-center z-10">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                        About Us
                    </h1>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                        We are metafuse, a team dedicated to transforming ideas into exceptional digital experiences through innovation and creativity.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-foreground/70 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                            What Drives Us
                        </h2>
                        <p className="text-lg text-foreground/70">
                            Our core values and principles that guide our work
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-foreground/70">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 md:p-12 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-foreground/70 leading-relaxed">
                            <p>
                                Founded with a vision to bridge the gap between technology and creativity, metafuse has grown into a trusted partner for businesses seeking digital transformation.
                            </p>
                            <p>
                                Our journey began with a simple belief: that great software should be both powerful and beautiful. This philosophy continues to drive everything we do, from the smallest component to the largest enterprise solution.
                            </p>
                            <p>
                                Today, we work with clients across various industries, helping them leverage technology to achieve their goals and create meaningful impact in their markets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
