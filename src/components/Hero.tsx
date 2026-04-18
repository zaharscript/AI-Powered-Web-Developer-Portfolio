import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono font-bold text-accent-lime mb-8 uppercase tracking-widest"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime"></span>
                    </span>
                    Next Gen Builder
                </motion.div>

                <motion.h1
                    className="mb-8 leading-[1.05]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    AI Powered <span className="text-secondary">Builder.</span><br />
                    Built Smarter. <span className="bg-gradient-to-r from-accent-blue to-accent-lime bg-clip-text text-transparent">Convert Better.</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    I turn ideas into high-converting, high-performance websites using smart AI workflows and expert execution.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <button className="w-full sm:w-auto bg-primary text-background px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-lime transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,255,51,0.2)]">
                        Explore My Builds
                    </button>
                    <button className="w-full sm:w-auto bg-surface/50 text-primary border border-border px-10 py-4 rounded-full font-bold text-lg hover:bg-surface hover:border-accent-blue/50 transition-all duration-300">
                        Current Status: Available
                    </button>
                </motion.div>

                {/* Stats / Proof Line */}
                <motion.div
                    className="mt-20 pt-10 border-t border-border/30 grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {[
                        { label: 'Latency Optimized', value: '< 200ms' },
                        { label: 'Uptime Reliability', value: '99.9%' },
                        { label: 'AI Efficiency', value: '10x' },
                        { label: 'Builder Grade', value: 'A++' },
                    ].map((stat, i) => (
                        <div key={i} className="text-left md:text-center space-y-1">
                            <div className="text-xs font-mono text-secondary uppercase tracking-tight">{stat.label}</div>
                            <div className="text-xl font-bold font-mono tracking-tighter text-primary">{stat.value}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
