import { motion } from 'framer-motion';
import { Search, PenTool, Terminal, ShieldCheck } from 'lucide-react';

const steps = [
    {
        title: "Discovery & Strategy",
        icon: <Search className="w-5 h-5" />,
        description: "Defining the visual language and project parameters before a single line of code is written.",
        color: "blue" // Simplified color key
    },
    {
        title: "Architecture Map",
        icon: <PenTool className="w-5 h-5" />,
        description: "Mapping the layout using an 8pt grid system for pixel-perfect precision and scalability.",
        color: "white"
    },
    {
        title: "Incremental Execution",
        icon: <Terminal className="w-5 h-5" />,
        description: "Building component-by-component, prioritizing modularity and DRY principles.",
        color: "lime"
    },
    {
        title: "The QA Gate",
        icon: <ShieldCheck className="w-5 h-5" />,
        description: "Auditing for responsiveness, accessibility, and high-performance metrics.",
        color: "white"
    }
];

const BuildSystem = () => {
    // Map our keys to full Tailwind classes
    const colorMap: { [key: string]: string } = {
        blue: "text-accent-blue bg-accent-blue/10 border-accent-blue shadow-[0_0_15px_rgba(14,165,233,0.2)]",
        lime: "text-accent-lime bg-accent-lime/10 border-accent-lime shadow-[0_0_15px_rgba(212,255,51,0.2)]",
        white: "text-primary bg-primary/5 border-primary shadow-[0_0_15px_rgba(250,250,250,0.1)]"
    };

    const pingMap: { [key: string]: string } = {
        blue: "bg-accent-blue",
        lime: "bg-accent-lime",
        white: "bg-primary"
    };

    const borderMap: { [key: string]: string } = {
        blue: "border-l-accent-blue",
        lime: "border-l-accent-lime",
        white: "border-l-primary"
    };

    return (
        <section id="systems" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="mb-4">The <span className="text-accent-blue">Build System.</span></h2>
                    <p className="text-secondary max-w-2xl mx-auto text-lg">
                        A disciplined "Zero-Recode" workflow that treats development as an engineering
                        discipline, not a creative whim.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[39.5px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-lime to-border opacity-30" />

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative flex items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Connector Node */}
                                <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-20 group">
                                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${pingMap[step.color]}`} />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 ml-16 md:ml-0">
                                    <div className={`glass p-8 rounded-3xl border-l-4 ${borderMap[step.color]} hover:translate-y-[-4px] transition-transform duration-300`}>
                                        <div className={`inline-flex p-3 rounded-2xl ${colorMap[step.color]} mb-4`}>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl mb-3">{step.title}</h3>
                                        <p className="text-secondary text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for MD screens */}
                                <div className="hidden md:flex flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildSystem;
