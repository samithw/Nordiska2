import { motion } from 'framer-motion';
import { Icon } from './Icons';

const industries = [
    { name: "Water & Wastewater", img: "https://images.unsplash.com/photo-1574482620262-6063132d2631?q=80&w=1000&auto=format&fit=crop" },
    { name: "Solid Waste Mgmt", img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop" },
    { name: "Bio Energy", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop" },
    { name: "Green Hydrogen", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop" },
    { name: "Solar Energy", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop" }
];

const IndustryCard = ({ ind, index }: { ind: any, index: any }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative h-[400px] group overflow-hidden cursor-pointer"
    >
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${ind.img})` }}
        ></div>
        <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-90"></div>

        <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="border-l-2 border-teal pl-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-teal font-bold text-xs uppercase tracking-widest mb-2 block">Sector 0{index + 1}</span>
                <h3 className="text-3xl font-display font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">
                    Advanced solutions for sustainable infrastructure and optimization.
                </p>
            </div>
        </div>
    </motion.div>
);

export const Industries = () => (
    <section id="industries" className="py-32 bg-navy text-beige">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
                <div>
                    <span className="text-teal font-bold uppercase tracking-widest text-xs block mb-4">Sectors</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold">Industries We Serve.</h2>
                </div>
                <button className="hidden md:flex items-center gap-3 border border-white/20 px-6 py-3 hover:bg-teal hover:border-teal hover:text-white transition-all text-sm font-bold uppercase tracking-wider">
                    View All Sectors <Icon name="arrow" className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
                {industries.map((ind, i) => <IndustryCard key={i} ind={ind} index={i} />)}
            </div>
        </div>
    </section>
);