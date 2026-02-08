import { motion } from 'framer-motion';

const stories = [
    {
        client: "EcoWater Dynamics, Vietnam",
        quote: "The efficiency gains were immediate and exceeded all projections. Nordiska's team provided unparalleled on-site support, making the transition seamless.",
        person: "Tran Minh Hieu",
        title: "COO, EcoWater Dynamics",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2487&auto=format&fit=crop",
        stats: [
            { value: "+45%", label: "Water Treatment Efficiency" },
            { value: "-20%", label: "Operational Costs" },
        ]
    },
    {
        client: "BioGen Europe, Finland",
        quote: "Their market entry strategy for Southeast Asia was flawless. We established a strong foothold in a fraction of the time we had allocated.",
        person: "Anja Korpela",
        title: "CEO, BioGen Europe",
        img: "https://images.unsplash.com/photo-1580852300654-034f0356534c?q=80&w=2487&auto=format&fit=crop",
        stats: [
            { value: "6", label: "Months to Market Entry" },
            { value: "3", label: "New Regional Partnerships" },
        ]
    }
];

const StoryCard = ({ story }: { story: any }) => (
    <div className="bg-white text-navy p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center shadow-lg">
        {/* Left: Quote and Person */}
        <div className="lg:col-span-2 space-y-8">
            <p className="text-2xl font-light italic text-steel leading-relaxed relative">
                <span className="absolute -left-6 -top-2 text-6xl text-teal opacity-20">“</span>
                {story.quote}
            </p>
            <div className="flex items-center gap-4">
                <img src={story.img} alt={story.person} className="w-16 h-16 rounded-full object-cover border-2 border-teal" />
                <div>
                    <h4 className="font-bold text-lg">{story.person}</h4>
                    <p className="text-sm text-steel">{story.title}</p>
                </div>
            </div>
        </div>

        {/* Right: Stats */}
        <div className="lg:border-l border-navy/10 lg:pl-8 space-y-6">
            <h3 className="text-md font-bold text-teal uppercase tracking-widest mb-4">Key Metrics</h3>
            {story.stats.map((stat: any, i: number) => (
                <div key={i}>
                    <span className="block text-4xl font-display font-bold text-navy">{stat.value}</span>
                    <span className="text-xs text-steel uppercase tracking-wider">{stat.label}</span>
                </div>
            ))}
        </div>
    </div>
);

export const Success = () => (
    <section id="success-stories" className="py-32 bg-beige">
        <div className="container mx-auto px-6 space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
            >
                <span className="text-teal font-bold uppercase tracking-widest text-xs mb-4 block">Proven Results</span>
                <h2 className="font-display text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                    Real Impact, Real Partnerships.
                </h2>
                <p className="text-xl text-steel font-light leading-relaxed">
                    We don't just promise sustainability and efficiency; we deliver measurable financial and environmental ROI for our clients through optimized engineering and smart execution.
                </p>
            </motion.div>

            <div className="space-y-10">
                {stories.map((story, i) => <StoryCard key={i} story={story} />)}
            </div>
        </div>
    </section>
);