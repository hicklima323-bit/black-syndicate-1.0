/* ============================================
   BLACK SYNDICATE - ABOUT SECTION
   Brand story and manifesto
   ============================================ */

import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users } from 'lucide-react';

/* ============================================
   EDITABLE CONFIGURATION
   Change text and features here
   ============================================ */
const CONFIG = {
  title: 'Sobre a BLACK SYNDICATE',
  subtitle: 'Uma nova era de acesso exclusivo',
  description: `
    A BLACK SYNDICATE nasceu da necessidade de reunir em um único lugar 
    os melhores recursos digitais, ferramentas e conteúdos premium. 
    Somos uma comunidade de pessoas que buscam excelência e acesso 
    ao que há de melhor no mundo digital.
  `,
  manifesto: `
    "Não somos apenas uma plataforma. Somos um movimento. 
    Uma rede de indivíduos que entendem o valor do conhecimento 
    e das ferramentas certas para alcançar seus objetivos."
  `,
  features: [
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Seus dados protegidos com criptografia de ponta.',
    },
    {
      icon: Zap,
      title: 'Acesso Instantâneo',
      description: 'Downloads e ativações imediatas após a compra.',
    },
    {
      icon: Target,
      title: 'Conteúdo Exclusivo',
      description: 'Materiais que você não encontra em outro lugar.',
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      description: 'Suporte e networking com milhares de membros.',
    },
  ],
  stats: [
    { value: '50K+', label: 'Membros Ativos' },
    { value: '1000+', label: 'Produtos' },
    { value: '99.9%', label: 'Satisfação' },
    { value: '24/7', label: 'Suporte' },
  ],
};

/* ============================================
   FEATURE CARD COMPONENT
   ============================================ */
const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 electric-hover"
      data-testid={`feature-${index}`}
    >
      <div className="mb-4 inline-flex p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h4 className="font-heading font-bold text-lg text-white mb-2">
        {feature.title}
      </h4>
      <p className="text-gray-400 text-sm">
        {feature.description}
      </p>
    </motion.div>
  );
};

/* ============================================
   STAT CARD COMPONENT
   ============================================ */
const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="text-center"
    data-testid={`stat-${index}`}
  >
    <div className="font-heading font-black text-3xl md:text-4xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
      {stat.value}
    </div>
    <div className="text-gray-500 text-sm">
      {stat.label}
    </div>
  </motion.div>
);

/* ============================================
   MAIN ABOUT SECTION COMPONENT
   ============================================ */
export const AboutSection = () => {
  return (
    <section 
      id="sobre" 
      className="py-20 md:py-32 px-4 relative overflow-hidden"
      data-testid="about-section"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Shield className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-400">SOBRE NÓS</span>
            </div>

            <h2 
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6"
              data-testid="about-title"
            >
              {CONFIG.title}
            </h2>

            <p className="text-lg text-purple-400 mb-6">
              {CONFIG.subtitle}
            </p>

            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              {CONFIG.description}
            </p>

            {/* Manifesto quote */}
            <div className="relative pl-6 border-l-2 border-purple-500">
              <p className="text-gray-300 italic text-lg">
                {CONFIG.manifesto}
              </p>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-purple-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-cyan-500/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-purple-500/30"
              />

              {/* Center logo */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-purple-500 mx-auto mb-2" />
                  <span className="font-heading font-bold text-xl text-white">BS</span>
                </div>
              </div>

              {/* Floating dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-500 rounded-full"
                  style={{
                    top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-8 rounded-2xl bg-white/5 border border-white/10 mb-20"
          data-testid="stats-container"
        >
          {CONFIG.stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIG.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
