'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Icon } from './Icons';

const services = [
    {
        title: "Sales & Marketing",
        short_title: "Sales & Marketing",
        description: "We provide expert inbound and outbound strategies tailored for the unique dynamics of EU-Asia markets. Our approach builds a powerful brand presence and drives a consistent stream of qualified leads to your business.",
        icon: "target",
        image: "https://picsum.photos/seed/sales-new/800/600",
        imageHint: "marketing strategy"
    },
    {
        title: "Partner & Customer Search",
        short_title: "Partner Search",
        description: "Leveraging our extensive and meticulously vetted network, we connect you with ideal business partners and customers. We focus on strategic alignment and long-term potential for accelerated growth.",
        icon: "users",
        image: "https://picsum.photos/seed/partner-new/800/600",
        imageHint: "business handshake"
    },
    {
        title: "Business Development",
        short_title: "Business Dev",
        description: "Our team specializes in strategic growth planning and market penetration. We identify new opportunities and create actionable pathways for sustainable and profitable expansion into new territories.",
        icon: "trending-up",
        image: "https://picsum.photos/seed/businessdev-new/800/600",
        imageHint: "growth chart"
    },
    {
        title: "GTM Strategy",
        short_title: "GTM Strategy",
        description: "We offer a comprehensive Go-To-Market execution for companies entering new regions. Our service covers every phase, from initial market research and planning to a successful and impactful launch.",
        icon: "map",
        image: "https://picsum.photos/seed/gtm-new/800/600",
        imageHint: "world map"
    },
    {
        title: "Application Consultancy",
        short_title: "App Consultancy",
        description: "Our seasoned experts offer high-level technical advisory for specialized industrial applications. We provide critical insights to help you design, optimize, and future-proof your technology stack.",
        icon: "cpu",
        image: "https://picsum.photos/seed/consultancy-new/800/600",
        imageHint: "industrial machinery"
    },
    {
        title: "On-Site Training",
        short_title: "On-Site Training",
        description: "We empower your team with the knowledge they need to excel. Our on-site training programs and workshops are practical, engaging, and directly applicable to your daily operations.",
        icon: "book-open",
        image: "https://picsum.photos/seed/training-new/800/600",
        imageHint: "team workshop"
    },
    {
        title: "Aftersales Services",
        short_title: "Aftersales",
        description: "Our commitment extends beyond project completion. We provide robust, long-term maintenance and lifecycle support to ensure continuous operational excellence and maximize your return on investment.",
        icon: "tool",
        image: "https://picsum.photos/seed/aftersales-new/800/600",
        imageHint: "support engineer"
    }
];

export const Services = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeService = services[activeTab];

    return (
        <section id="what-we-do" className="py-32 bg-slate-100 text-navy">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-teal font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
                    <h2 className="font-display text-5xl lg:text-6xl font-bold text-navy leading-tight">
                        Comprehensive Services.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 min-h-[500px]">
                    {/* Vertical Tabs */}
                    <div className="lg:col-span-4 flex flex-col">
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => setActiveTab(index)}
                                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-4 border-l-4 ${
                                            activeTab === index
                                                ? 'bg-white text-navy shadow-lg border-teal'
                                                : 'border-transparent hover:bg-white/60 hover:shadow-sm'
                                        }`}
                                    >
                                        <Icon name={service.icon} className={`w-7 h-7 transition-colors shrink-0 ${activeTab === index ? 'text-teal' : 'text-steel'}`} />
                                        <span className="font-display font-bold text-lg">{service.short_title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content Pane */}
                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="w-full h-full flex flex-col"
                            >
                               <div className="relative w-full h-72 md:h-80 mb-8 rounded-xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={activeService.image}
                                        alt={activeService.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={activeService.imageHint}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
                               </div>
                               <div>
                                     <h3 className="font-display text-4xl font-bold text-navy mb-4">{activeService.title}</h3>
                                     <p className="text-steel font-light leading-relaxed text-lg">{activeService.description}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
