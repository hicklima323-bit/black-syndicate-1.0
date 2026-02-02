/* ============================================
   BLACK SYNDICATE - CATEGORY GRID
   Cards with electric hover effects
   ============================================ */

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Wrench, 
  Download, 
  Smartphone, 
  Scissors, 
  FileText, 
  Sparkles,
  Zap,
  Star,
  Shield
} from 'lucide-react';

/* ============================================
   EDITABLE CONFIGURATION
   Change categories, icons, and colors here
   ============================================ */
const CATEGORIES = [
  {
    id: 'assinaturas',
    title: 'ASSINATURAS',
    description: 'Streaming, música e mais',
    icon: Crown,
    color: '#a855f7', // Purple
    items: 12,
  },
  {
    id: 'ferramentas',
    title: 'FERRAMENTAS',
    description: 'Softwares e utilitários',
    icon: Wrench,
    color: '#06b6d4', // Cyan
    items: 8,
  },
  {
    id: 'downloads',
    title: 'DOWNLOADS',
    description: 'Arquivos e recursos',
    icon: Download,
    color: '#ec4899', // Pink
    items: 24,
  },
  {
    id: 'apps',
    title: 'APK PREMIUM',
    description: 'Apps exclusivos Android',
    icon: Smartphone,
    color: '#22c55e', // Green
    items: 15,
  },
  {
    id: 'cortes',
    title: 'CORTES VIRAIS',
    description: 'Conteúdo para redes',
    icon: Scissors,
    color: '#f97316', // Orange
    items: 30,
  },
  {
    id: 'metodos',
    title: 'MÉTODOS',
    description: 'Guias e tutoriais',
    icon: FileText,
    color: '#eab308', // Yellow
    items: 18,
  },
  {
    id: 'premium',
    title: 'PREMIUM',
    description: 'Conteúdo VIP exclusivo',
    icon: Star,
    color: '#f59e0b', // Amber
    items: 6,
  },
  {
    id: 'outros',
    title: 'OUTROS',
    description: 'Diversos e especiais',
    icon: Shield,
    color: '#8b5cf6', // Violet
    items: 20,
  },
];

/* ============================================
   ELECTRIC SPARK EFFECT COMPONENT
   Canvas-based electric effect on hover
   ============================================ */
const ElectricSpark = ({ isActive, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    let animationId;
    const sparks = [];

    // Create sparks
    const createSpark = () => {
      const edge = Math.floor(Math.random() * 4);
      let x, y;
      
      switch (edge) {
        case 0: x = Math.random() * canvas.width; y = 0; break;
        case 1: x = canvas.width; y = Math.random() * canvas.height; break;
        case 2: x = Math.random() * canvas.width; y = canvas.height; break;
        default: x = 0; y = Math.random() * canvas.height;
      }

      sparks.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 1,
        size: Math.random() * 3 + 1,
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new sparks
      if (Math.random() > 0.7) createSpark();

      // Update and draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.life -= 0.02;

        if (spark.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(spark.life * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Draw glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isActive, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      style={{ opacity: isActive ? 1 : 0, transition: 'opacity 0.3s' }}
    />
  );
};

/* ============================================
   CATEGORY CARD COMPONENT
   ============================================ */
const CategoryCard = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <motion.a
        href={`#${category.id}`}
        className="card-electric block p-6 md:p-8 h-full relative overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        data-testid={`category-card-${category.id}`}
        style={{
          '--card-color': category.color,
        }}
      >
        {/* Electric spark effect */}
        <ElectricSpark isActive={isHovered} color={category.color} />

        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${category.color}20 0%, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div 
          className="relative z-20 mb-4 inline-flex p-3 rounded-xl transition-all duration-300"
          style={{
            backgroundColor: `${category.color}15`,
            border: `1px solid ${category.color}30`,
          }}
        >
          <Icon 
            className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110"
            style={{ color: category.color }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20">
          <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2 group-hover:neon-text transition-all duration-300">
            {category.title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            {category.description}
          </p>
          
          {/* Item count */}
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="w-4 h-4" style={{ color: category.color }} />
            <span className="text-gray-500">
              {category.items} itens disponíveis
            </span>
          </div>
        </div>

        {/* Corner accent */}
        <div 
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${category.color}20 100%)`,
          }}
        />

        {/* Bottom border glow */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
          }}
        />
      </motion.a>
    </motion.div>
  );
};

/* ============================================
   MAIN CATEGORY GRID COMPONENT
   ============================================ */
export const CategoryGrid = () => {
  return (
    <section 
      id="categorias" 
      className="py-20 md:py-32 px-4 relative"
      data-testid="category-section"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-400">CATEGORIAS</span>
          </div>
          
          <h2 
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4"
            data-testid="category-title"
          >
            Explore Nossos{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Recursos
            </span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Acesse conteúdos premium, ferramentas exclusivas e muito mais.
            Tudo em um só lugar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
