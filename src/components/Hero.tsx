'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImageIds = ['hero', 'solution-1', 'solution-2'];

export const Hero = () => {
    const images = heroImageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-navy text-beige overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 py-24 sm:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
                            Engineering a Sustainable Future.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 font-light">
                           Pioneering cleantech innovations for a cleaner world.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="grid grid-cols-2 grid-rows-2 gap-4 h-[300px] md:h-[500px]"
                    >
                        {images.map((image, index) => {
                            if (!image || !image.imageUrl) return null;

                            let className = "relative rounded-xl overflow-hidden shadow-lg shadow-navy/40";
                            if (index === 0) className += " row-span-2";
                            if (index === 1) className += " col-start-2";
                            if (index === 2) className += " col-start-2 row-start-2";
                            
                            return (
                                <motion.div
                                    key={image.id}
                                    className={className}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                >
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image.imageHint}
                                        priority={index === 0}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
             {/* Decorative Element */}
             <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-teal/10 blur-[150px] rounded-full pointer-events-none"></div>
        </section>
    );
};
