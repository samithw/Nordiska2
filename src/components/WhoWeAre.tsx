'use client';
import { motion } from 'framer-motion';

export const WhoWeAre = () => {
    return (
        <section id="who-we-are" className="py-24 bg-white text-navy">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Left Column - Title & Stats */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter">
                        FINNISH INNOVATION.
                        <br />
                        <span className="text-teal">GLOBAL IMPACT.</span>
                    </h2>
                    <p className="mt-6 text-lg text-navy/80 max-w-lg">
                        Nordiska Solutions facilitates the transfer of world-class environmental engineering to the high-growth markets of Southeast Asia.
                    </p>
                    <div className="mt-10 flex gap-12">
                        <div>
                            <p className="font-display text-6xl font-bold text-teal">22+</p>
                            <p className="text-sm font-bold uppercase tracking-widest text-navy/80">Years Experience</p>
                        </div>
                    </div>
                     <p className="mt-10 text-xs font-bold uppercase tracking-[0.4em] text-navy opacity-60">
                        Helsinki • Kuala Lumpur • Dubai
                    </p>
                </motion.div>

                {/* Right Column - Detailed Text */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-display text-2xl font-bold text-teal mb-3">Cluster Business Concept</h3>
                            <p className="text-navy/80 leading-relaxed">
                                We've developed a unique cluster business concept, uniting leading environmental companies from Europe and Asia. This platform specializes in water, wastewater, and solid waste management, providing sophisticated and cost-effective solutions.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-display text-2xl font-bold text-teal mb-3">Domain Expertise</h3>
                            <p className="text-navy/80 leading-relaxed">
                                With over two decades of international business experience, our founder's deep domain expertise gives us a competitive edge, ensuring solutions that serve our clients, their customers, and the environment.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-display text-2xl font-bold text-teal mb-3">People-First Approach</h3>
                            <p className="text-navy/80 leading-relaxed">
                                We passionately believe that people and teams build projects. This philosophy results in efficient, high-quality, and responsive service, enabling our customers to enjoy risk-free project execution.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
