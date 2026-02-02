/* ============================================
   BLACK SYNDICATE - CONTACT/CTA SECTION
   WhatsApp button and community links
   ============================================ */

import { motion } from 'framer-motion';
import { MessageCircle, Users, Send, ArrowRight } from 'lucide-react';

/* ============================================
   EDITABLE CONFIGURATION
   Change links and text here
   ============================================ */
const CONFIG = {
  title: 'Junte-se à Comunidade',
  subtitle: 'Faça parte do nosso grupo exclusivo e tenha acesso a conteúdos especiais.',
  whatsappLink: 'https://wa.me/5500000000000',
  whatsappText: 'Entrar no Grupo WhatsApp',
  telegramLink: 'https://t.me/blacksyndicate',
  telegramText: 'Canal do Telegram',
  supportLink: 'https://wa.me/5500000000000?text=Olá, preciso de suporte',
  supportText: 'Falar com Suporte',
};

/* ============================================
   MAIN CONTACT SECTION COMPONENT
   ============================================ */
export const ContactSection = () => {
  return (
    <section 
      id="contato" 
      className="py-20 md:py-32 px-4 relative overflow-hidden"
      data-testid="contact-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full rounded-full border border-purple-500/10"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Users className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-400">COMUNIDADE</span>
          </div>

          {/* Title */}
          <h2 
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4"
            data-testid="contact-title"
          >
            {CONFIG.title}
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12">
            {CONFIG.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp Button */}
            <motion.a
              href={CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all duration-300 overflow-hidden electric-hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="whatsapp-button"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <span className="relative flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5" />
                {CONFIG.whatsappText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* Telegram Button */}
            <motion.a
              href={CONFIG.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold transition-all duration-300 overflow-hidden electric-hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="telegram-button"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <span className="relative flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                {CONFIG.telegramText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </div>

          {/* Support link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <a
              href={CONFIG.supportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              data-testid="support-link"
            >
              <span>Precisa de ajuda?</span>
              <span className="font-medium underline">{CONFIG.supportText}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-green-500/10 rounded-full blur-[80px]" />
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />
      </div>
    </section>
  );
};

export default ContactSection;
