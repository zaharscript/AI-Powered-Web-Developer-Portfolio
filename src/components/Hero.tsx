import { motion } from 'framer-motion';

const stats = [
  { label: 'Latency Optimized', value: '< 200ms' },
  { label: 'Uptime Reliability', value: '99.9%' },
  { label: 'AI Efficiency', value: '10x' },
  { label: 'Builder Grade', value: 'A++' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-0 bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(212,255,51,0.12),transparent_28%),linear-gradient(to_bottom,#050505,#090909,#050505)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.06]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 min-h-screen grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left pb-10 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.28em] text-accent-lime backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-lime opacity-70"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-lime"></span>
            </span>
            Next Gen Builder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
          >
            I'm{' '}
            <span className="bg-gradient-to-r from-accent-blue to-accent-lime bg-clip-text text-transparent">
              Zahar.
            </span>
            <br />
            An AI Powered <span className="text-secondary">Builder.</span>
            <br />
            <span className="text-primary">Built Smarter.</span>{' '}
            <span className="bg-gradient-to-r from-accent-blue to-accent-lime bg-clip-text text-transparent">Convert Better.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-secondary md:text-2xl lg:mx-0"
          >
            I turn ideas into high-converting, high-performance websites using smart AI workflows and expert execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <button className="rounded-full bg-primary px-8 py-4 font-bold text-background transition duration-300 hover:scale-105 shadow-[0_0_30px_rgba(212,255,51,0.18)]">
              Explore My Builds
            </button>
            <button className="rounded-full border border-border bg-surface/60 px-8 py-4 font-bold text-primary backdrop-blur transition duration-300 hover:border-accent-blue/50">
              Current Status: Available
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative flex h-[520px] items-end justify-center md:h-[760px]"
        >
          <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-accent-blue/20 blur-3xl" />
          <div className="absolute top-24 left-10 h-48 w-48 rounded-full bg-accent-lime/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <img
            src="/hero-Zahar-2.png"
            alt="Zahar Hero Portrait"
            className="relative z-10 h-full w-auto max-w-none object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.65)]"
          />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative z-10 container mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-2 gap-4 border-t border-border/30 pt-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border/40 bg-surface/30 p-4 text-left backdrop-blur md:text-center">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary">{stat.label}</div>
              <div className="mt-2 text-xl font-bold text-primary">{stat.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
