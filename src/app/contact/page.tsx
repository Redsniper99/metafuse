import { Footer } from '@/components/Footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'hello@metafuse.com',
            link: 'mailto:hello@metafuse.com',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'San Francisco, CA',
            link: '#',
        },
    ]

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
                        Get In Touch
                    </h1>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                        Have a project in mind? Let's work together to bring your ideas to life
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="p-8 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                                Send us a message
                            </h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] rounded-full hover:shadow-lg hover:shadow-[#2f70c5]/50 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="p-8 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] bg-clip-text text-transparent">
                                    Contact Information
                                </h2>
                                <p className="text-foreground/70 mb-8">
                                    Feel free to reach out to us through any of the following channels. We're here to help!
                                </p>

                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.link}
                                            className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2f70c5] to-[#4a8de8] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <info.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-foreground/60 mb-1">{info.title}</div>
                                                <div className="font-medium">{info.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="p-8 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                                <div className="space-y-2 text-foreground/70">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
