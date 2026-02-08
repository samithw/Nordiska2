'use client';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const services = [
    { title: "Sales & Marketing", desc: "Expert inbound/outbound strategies tailored for EU-Asia markets.", icon: "target" },
    { title: "Partner Search", desc: "Connecting you with vetted business partners and customers.", icon: "users" },
    { title: "Business Development", desc: "Strategic growth planning and market penetration.", icon: "trending-up" },
    { title: "GTM Strategy", desc: "Comprehensive Go-To-Market execution for new regions.", icon: "map" },
    { title: "App Consultancy", desc: "Technical advisory for specialized industrial applications.", icon: "cpu" },
    { title: "On-Site Training", desc: "Knowledge transfer workshops and operational training.", icon: "book-open" },
    { title: "Aftersales Services", desc: "Long-term maintenance and lifecycle support.", icon: "tool" },
];

const ServiceCard = ({ service, index }: { service: any, index: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group p-8 border border-navy/5 bg-white hover:bg-navy transition-all duration-500 cursor-pointer relative overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2"
    >
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon name={service.icon} className="w-32 h-32 text-teal" />
        </div>

        <div className="w-14 h-14 bg-teal/10 group-hover:bg-teal text-teal group-hover:text-white flex items-center justify-center rounded-xl mb-8 transition-colors">
            <Icon name={service.icon} className="w-7 h-7" />
        </div>

        <h3 className="font-display text-2xl font-bold mb-4 text-navy group-hover:text-white transition-colors">{service.title}</h3>
        <p className="text-steel group-hover:text-gray-300 font-light leading-relaxed mb-8 transition-colors">{service.desc}</p>

        <div className="flex items-center gap-2 text-teal text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Details <Icon name="chevronRight" className="w-4 h-4" />
        </div>
    </motion.div>
);

export const Services = () => (
    <section id="what-we-do" className="py-32 px-6 bg-beige">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                <div className="lg:col-span-5">
                    <span className="text-teal font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
                    <h2 className="font-display text-5xl lg:text-6xl font-bold text-navy leading-tight">
                        Comprehensive <br /> Service Modules.
                    </h2>
                </div>
                <div className="lg:col-span-7 flex items-end">
                    <p className="text-xl text-steel font-light max-w-2xl leading-relaxed">
                        We don't just consult; we execute. From the first handshake in Helsinki to the final site commissioning in Hanoi, we handle the entire lifecycle.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
            </div>
        </div>
    </section>
);