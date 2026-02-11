'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
    { value: 98, suffix: '%', text: "Client Retention Rate" },
    { value: 1.2, prefix: '$', suffix: 'M', text: "Avg. Project Value" },
    { value: 15, suffix: '+', text: "Asian Markets Entered" },
    { value: 40, suffix: '%', text: "Operational Efficiency Gain" }
];

const StatCard = ({ stat, index }: { stat: any, index: any }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="text-center p-8 bg-steel/20 backdrop-blur-sm rounded-lg border border-steel/30 shadow-lg"
        >
            <h3 className="font-display text-6xl md:text-7xl font-bold text-teal mb-3">
                {inView && <CountUp start={0} end={stat.value} duration={3} separator="," prefix={stat.prefix} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />}
            </h3>
            <p className="text-beige/70 font-light leading-snug">{stat.text}</p>
        </motion.div>
    );
};

export const Stats = () => (
    <section id="stats" className="py-20 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558228148-70133246a06b?q=80&w=2670&auto=format=fit=crop')" }}>
        <div className="absolute inset-0 bg-navy/80"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => <StatCard key={i} stat={stat} index={i} />)}
            </div>
        </div>
    </section>
);
