/* ============================================
   BLACK SYNDICATE - HERO SECTION
   Main banner with electric effects and particles
   ============================================ */

import { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Zap, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: false,
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ['#a855f7', '#06b6d4', '#ec4899'],
      },
      links: {
        color: '#a855f7',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce',
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <Particles
        id="hero-particles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex p-4 rounded-full bg-purple-500/10 border border-purple-500/30">
            <Zap className="w-12 h-12 md:w-16 md:h-16 text-purple-500" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 relative"
          data-testid="hero-title"
        >
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              BLACK SYNDICATE
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading text-lg sm:text-xl md:text-2xl text-purple-400 tracking-[0.3em] mb-6"
          data-testid="hero-subtitle"
        >
          Power • Strategy • Domination
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10"
          data-testid="hero-description"
        >
          Acesse conteúdos exclusivos, ferramentas premium e recursos ilimitados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="#categorias"
            className="btn-neon inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-testid="hero-cta"
          >
            <Zap className="w-5 h-5" />
            EXPLORAR AGORA
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8 text-purple-500/50" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-20 left-4 w-32 h-32 border-l-2 border-t-2 border-purple-500/20 rounded-tl-3xl" />
      <div className="absolute top-20 right-4 w-32 h-32 border-r-2 border-t-2 border-cyan-500/20 rounded-tr-3xl" />
      <div className="absolute bottom-20 left-4 w-32 h-32 border-l-2 border-b-2 border-cyan-500/20 rounded-bl-3xl" />
      <div className="absolute bottom-20 right-4 w-32 h-32 border-r-2 border-b-2 border-purple-500/20 rounded-br-3xl" />
    </section>
  );
};

export default HeroSection;
