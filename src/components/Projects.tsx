import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers } from 'lucide-react';

const projects = [
    {
        title: "Autonomous Engine v1",
        category: "AI / Automation",
        description: "Multi-agent system for complex task orchestration with self-healing capabilities.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Python", "GPT-4"],
        link: "#",
        github: "#"
    },
    {
        title: "Industrial SaaS Shell",
        category: "Full Stack",
        description: "Production-ready scaffolding for high-growth fintech startups with strict a11y.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tags: ["TypeScript", "Next.js", "SQL"],
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-surface/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <h2 className="mb-4 text-secondary/50">Selected <span className="text-primary">Builds.</span></h2>
                        <p className="text-secondary max-w-xl text-lg">
                            Proof of concept and production deployments showcasing the
                            "Zero-Recode" philosophy.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-mono text-xs text-accent-blue bg-accent-blue/5 px-4 py-2 rounded-full border border-accent-blue/20"
                    >
                        ACTIVE_BUILDS: 12
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-video rounded-3xl overflow-hidden bg-surface border border-border group-hover:border-accent-lime/50 transition-colors duration-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />

                                {/* Overlay Tags */}
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <span className="bg-background/80 backdrop-blur-sm text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-border">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-8 px-2">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl group-hover:text-accent-lime transition-colors">{project.title}</h3>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-secondary hover:text-primary transition-colors"><Code className="w-5 h-5" /></a>
                                        <a href={project.link} className="text-secondary hover:text-accent-lime transition-colors"><ExternalLink className="w-5 h-5" /></a>
                                    </div>
                                </div>

                                <p className="text-secondary mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex gap-3">
                                    {project.tags.map(tag => (
                                        <div key={tag} className="flex items-center gap-1.5 text-xs font-mono text-secondary">
                                            <Layers className="w-3.5 h-3.5" />
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
