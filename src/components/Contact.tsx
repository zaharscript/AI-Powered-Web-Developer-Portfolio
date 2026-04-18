import { motion } from 'framer-motion';
import { Mail, Code, User, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-blue/5 blur-[120px] rounded-full z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="glass rounded-[3rem] p-12 md:p-20 text-center border-accent-lime/20 overflow-hidden relative group">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="mb-6 leading-tight">
                            Ready to <span className="text-accent-lime">Scale?</span><br />
                            Let's Build the Future.
                        </h2>
                        <p className="text-secondary max-w-2xl mx-auto text-lg mb-12">
                            Currently accepting high-agency collaborations and strategic engineering
                            advisory roles. Reach out to deploy something exceptional.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a
                                href="mailto:hello@builder.ai"
                                className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary text-background px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-lime transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_30px_rgba(212,255,51,0.1)]"
                            >
                                Launch Inquiry <ArrowUpRight className="w-5 h-5" />
                            </a>

                            <div className="flex items-center gap-4">
                                {[
                                    { icon: <Code />, href: "#", label: "GitHub" },
                                    { icon: <User />, href: "#", label: "LinkedIn" },
                                    { icon: <Mail />, href: "#", label: "Mail" }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-4 rounded-2xl border border-border text-secondary hover:text-primary transition-colors flex items-center justify-center"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Code Snippet */}
                    <div className="absolute bottom-0 right-0 opacity-[0.03] text-left p-8 hidden lg:block font-mono text-xs select-none">
                        <pre>
                            {`const deployment = {
  status: "ACTIVE",
  efficiency: "10X",
  method: "ZERO_RECODE",
  strategist: "BUILDER.AI"
};`}
                        </pre>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-20 pt-10 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-accent-lime rounded flex items-center justify-center">
                            <div className="w-2 h-2 bg-background rounded-full" />
                        </div>
                        <span className="font-mono font-bold text-sm tracking-tighter">BUILDER.AI</span>
                    </div>

                    <div className="text-xs font-mono text-secondary/40 uppercase tracking-[0.2em] text-center">
                        Pitched to Perfection • Engineered for Performance
                    </div>

                    <div className="flex gap-8 text-[10px] font-mono text-secondary/50 uppercase tracking-widest">
                        <a href="#" className="hover:text-accent-blue transition-colors">Privacy</a>
                        <a href="#" className="hover:text-accent-blue transition-colors">Stack</a>
                        <a href="#" className="hover:text-accent-blue transition-colors">Systems</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
