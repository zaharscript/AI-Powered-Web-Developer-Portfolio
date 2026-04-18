import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Stack', href: '#stack' },
        { name: 'Systems', href: '#systems' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
        >
            <div className="container mx-auto px-6">
                <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-lg border-border' : 'border-transparent'}`}>
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-8 h-8 bg-accent-lime rounded flex items-center justify-center">
                            <Terminal className="w-5 h-5 text-background" />
                        </div>
                        <span className="font-mono font-bold text-lg tracking-tighter">BUILDER.AI</span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-sm font-medium text-secondary hover:text-accent-lime transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-accent-blue/10 text-accent-blue border border-accent-blue/20 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-accent-blue hover:text-white transition-all"
                        >
                            Resume
                        </motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-primary p-1"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-border mt-2 mx-6 rounded-2xl overflow-hidden glass"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-secondary hover:text-accent-lime"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
