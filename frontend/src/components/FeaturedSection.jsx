/* ============================================
   BLACK SYNDICATE - FEATURED SECTION
   Highlighted products/items with carousel
   ============================================ */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Zap, TrendingUp } from 'lucide-react';

const FeaturedCard = ({ item, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.5, 
        scale: isActive ? 1 : 0.9,
      }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl overflow-hidden ${isActive ? 'z-10' : 'z-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`featured-card-${item.id}`}
    >
      <div className="relative aspect-[16/10] md:aspect-[21/9]">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        
        <motion.div 
          className="absolute inset-0 border-2 rounded-2xl pointer-events-none"
          animate={{
            borderColor: isHovered ? '#a855f7' : 'transparent',
            boxShadow: isHovered 
              ? '0 0 20px rgba(168, 85, 247, 0.5), inset 0 0 20px rgba(168, 85, 247, 0.1)'
              : 'none',
          }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/50 w-fit mb-4"
          >
            <TrendingUp className="w-3 h-3 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 tracking-wider">
              {item.badge}
            </span>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-3"
          >
            {item.title}
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-sm md:text-base max-w-md mb-6 line-clamp-2"
          >
            {item.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i <= Math.floor(item.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              {item.rating} ({item.reviews} avaliações)
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-heading font-bold text-2xl md:text-3xl text-white">
                {item.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {item.originalPrice}
              </span>
            </div>
            
            <motion.button
              className="btn-neon px-6 py-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid={`featured-cta-${item.id}`}
            >
              <Zap className="w-4 h-4 inline mr-2" />
              OBTER AGORA
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredItems = [
    {
      id: 1,
      title: 'PACK PREMIUM COMPLETO',
      description: 'Acesso ilimitado a todos os recursos e ferramentas exclusivas da plataforma.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      badge: 'MAIS VENDIDO',
      price: 'R$ 49,90',
      originalPrice: 'R$ 99,90',
      rating: 4.9,
      reviews: 324,
    },
    {
      id: 2,
      title: 'FERRAMENTAS PRO',
      description: 'Suite completa de ferramentas profissionais para produtividade máxima.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      badge: 'NOVO',
      price: 'R$ 29,90',
      originalPrice: 'R$ 59,90',
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 3,
      title: 'ASSINATURA VIP',
      description: 'Benefícios exclusivos, suporte prioritário e atualizações antecipadas.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
      badge: 'EXCLUSIVO',
      price: 'R$ 79,90/mês',
      originalPrice: 'R$ 149,90/mês',
      rating: 5.0,
      reviews: 89,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  return (
    <section 
      className="py-16 md:py-24 px-4 relative overflow-hidden"
      data-testid="featured-section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <Star className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-400">DESTAQUES</span>
            </div>
            <h2 
              className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white"
              data-testid="featured-title"
            >
              Ofertas{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Especiais
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={prevSlide}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-testid="featured-prev"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-testid="featured-next"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <FeaturedCard 
              key={currentIndex}
              item={featuredItems[currentIndex]} 
              isActive={true}
            />
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-purple-500' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              data-testid={`featured-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
