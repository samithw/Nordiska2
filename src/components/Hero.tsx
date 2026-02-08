import { motion } from 'framer-motion';
import { Icon } from './Icons';

export const Hero = () => (
    <section id="hero" className="relative min-h-screen flex items-center bg-navy text-beige overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-teal/50 rounded-full bg-navy/50 backdrop-blur-sm mb-8">
                        <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
                        <span className="text-teal text-xs font-bold uppercase tracking-widest">
                            22 Years of Nordic Precision
                        </span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8">
                        Bridging European Tech <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue-400">
                            with Asian Infrastructure.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mb-12 font-light leading-relaxed border-l-2 border-teal pl-6">
                        We deliver sophisticated, cost-effective environmental solutions.
                        From Green Hydrogen to Water Management, we engineer the future of Cleantech.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="bg-teal text-white px-10 py-5 font-bold uppercase tracking-wider hover:bg-white hover:text-navy transition-all duration-300 text-sm shadow-lg shadow-teal/20">
                            Explore Solutions
                        </button>
                        <button className="group border border-beige/30 px-10 py-5 font-bold uppercase tracking-wider hover:border-teal hover:text-teal transition-all duration-300 text-sm flex items-center gap-3">
                            View Locations
                            <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-teal/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
);