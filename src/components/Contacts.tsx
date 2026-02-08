import { Icon } from './Icons';

const contactPoints = [
    { city: "Helsinki", country: "Finland", email: "helsinki@nordiska.com", person: "Mika Virtanen", is_hq: true },
    { city: "Singapore", country: "Singapore", email: "sg@nordiska.com", person: "Chua Li Ting" },
    { city: "Ho Chi Minh", country: "Vietnam", email: "hcmc@nordiska.com", person: "Nguyen Anh Tuan" },
    { city: "Jakarta", country: "Indonesia", email: "jakarta@nordiska.com", person: "Budi Hartono" }
];

const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "X (Twitter)", url: "#" },
    { name: "YouTube", url: "#" }
];

export const Contacts = () => (
    <section id="contacts" className="bg-navy text-beige py-32">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left: Intro & Socials */}
                <div className="max-w-xl">
                    <span className="text-teal font-bold uppercase tracking-widest text-xs mb-4 block">Connect</span>
                    <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
                        Get In Touch. <br />
                        Let's Build the Future.
                    </h2>
                    <p className="text-lg text-gray-300 mb-12 font-light leading-relaxed">
                        We operate globally to serve you locally. Reach out to our regional offices, or connect with us on our social platforms.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.url} className="flex items-center gap-3 text-lg hover:text-teal transition-colors group">
                                {link.name} <Icon name="arrow" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Office Locations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                    {contactPoints.map(point => (
                        <div key={point.city} className="border-t-2 border-teal pt-6">
                            <h3 className="font-display text-2xl font-bold flex items-center gap-3">
                                {point.city}
                                {point.is_hq && <span className="bg-teal text-navy text-xs font-bold uppercase px-2 py-1 rounded">HQ</span>}
                            </h3>
                            <p className="text-gray-400 mb-4">{point.country}</p>
                            <p className="font-semibold">{point.person}</p>
                            <a href={`mailto:${point.email}`} className="text-teal hover:underline break-all">{point.email}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
