import { motion } from 'framer-motion';
import { Globe, Database, Zap, Code2, Bot } from 'lucide-react';

// Tech logo map using Simple Icons CDN (SVG via img tag)
const techLogos: Record<string, string> = {
    // Frontend
    "React / Next.js": "https://cdn.simpleicons.org/react/61DAFB",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Framer Motion": "https://cdn.simpleicons.org/framer/FFFFFF",
    "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
    // AI & Automation
    "LLM Orchestration": "https://cdn.simpleicons.org/openai/FFFFFF",
    "LangChain": "https://cdn.simpleicons.org/langchain/1C3C3C",
    "OpenAI / Anthropic": "https://cdn.simpleicons.org/anthropic/FFFFFF",
    "Vector DBs": "https://cdn.simpleicons.org/pinecone/000000",
    // Backend
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
    "Python": "https://cdn.simpleicons.org/python/3776AB",
    "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
    "Redis": "https://cdn.simpleicons.org/redis/FF4438",
    "Flask": "https://cdn.simpleicons.org/flask/FFFFFF",
    "Django": "https://cdn.simpleicons.org/django/092E20",
    "Neon": "https://cdn.simpleicons.org/neon/00E599",
    // Build System
    "CI/CD Pipelines": "https://cdn.simpleicons.org/githubactions/2088FF",
    "Docker": "https://cdn.simpleicons.org/docker/2496ED",
    "Cloud Native": "https://cdn.simpleicons.org/googlecloud/4285F4",
    "Vercel": "https://cdn.simpleicons.org/vercel/FFFFFF",
    "Netlify": "https://cdn.simpleicons.org/netlify/00C7B7",
};

const BentoGrid = () => {
    const categories = [
        {
            title: "Frontend Architecture",
            icon: <Globe className="w-5 h-5 text-accent-blue" />,
            items: ["React / Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
            description: "High-performance, accessible UIs with precision motion engineering.",
            span: "md:col-span-2",
            bg: "bg-accent-blue/5"
        },
        {
            title: "AI & Automation",
            icon: <Bot className="w-5 h-5 text-accent-lime" />,
            items: ["LLM Orchestration", "LangChain", "OpenAI / Anthropic", "Vector DBs"],
            description: "Building autonomous systems that act as force multipliers.",
            span: "md:col-span-1 md:row-span-2",
            bg: "bg-accent-lime/5"
        },
        {
            title: "Backend Systems",
            icon: <Database className="w-5 h-5 text-accent-blue" />,
            items: ["Node.js", "Python", "PostgreSQL", "Redis", "Flask", "Django", "Neon"],
            description: "Scalable, resilient data layers and API services.",
            span: "md:col-span-2",
            bg: "bg-surface"
        },
        {
            title: "The Build System",
            icon: <Zap className="w-5 h-5 text-accent-lime" />,
            items: ["CI/CD Pipelines", "Docker", "Cloud Native", "Vercel", "Netlify"],
            description: "Zero-recode workflows and automated deployment gates.",
            span: "md:col-span-2",
            bg: "bg-surface"
        }
    ];

    return (
        <section id="stack" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-left"
                >
                    <h2 className="mb-4">Engineer's <span className="text-accent-lime">Toolbox.</span></h2>
                    <p className="text-secondary max-w-xl text-lg">
                        A modular tech stack refined through high-growth SaaS environments and
                        industrial-grade automation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass rounded-3xl p-8 flex flex-col justify-between group hover:border-accent-lime/30 transition-all duration-500 ${cat.span} ${cat.bg}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-background/50 rounded-2xl border border-border group-hover:scale-110 transition-transform duration-500">
                                    {cat.icon}
                                </div>
                                <div className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest bg-border/30 px-2 py-1 rounded">
                                    {cat.title.split(' ')[0]}
                                </div>
                            </div>

                            <div>
                            <h3 className="text-lg md:text-xl leading-tight break-words mb-2 group-hover:text-accent-lime transition-colors">{cat.title}</h3>
                                <p className="text-sm text-secondary mb-4 leading-relaxed">
                                    {cat.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map(item => (
                                        <span
                                            key={item}
                                            className="flex items-center gap-1.5 text-sm font-mono font-bold px-3 py-2 rounded-md bg-background/50 border border-border/50 text-secondary hover:border-accent-lime/40 hover:text-primary transition-colors duration-300"
                                        >
                                            {techLogos[item] && (
                                                <img
                                                    src={techLogos[item]}
                                                    alt={item}
                                                    className="w-3 h-3 object-contain flex-shrink-0"
                                                    style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.4))' }}
                                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                                />
                                            )}
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Special "Force Multiplier" Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-8 bg-gradient-to-br from-accent-blue/10 to-accent-lime/10 border-accent-blue/20 flex flex-col items-center justify-center text-center overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--color-background)_100%)] opacity-20" />
                        <Code2 className="w-12 h-12 text-primary mb-4 group-hover:rotate-12 transition-transform duration-500" />
                        <div className="relative z-10">
                            <div className="text-2xl font-bold mb-1 tracking-tighter">10X Efficiency</div>
                            <div className="text-xs font-mono text-secondary uppercase tracking-widest">AI Strategist Mindset</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
