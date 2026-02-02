/* ============================================
   BLACK SYNDICATE - FOOTER COMPONENT
   Copyright, links, and social media
   ============================================ */

import { motion } from 'framer-motion';
import { Zap, Instagram, Twitter, Youtube, Github, Heart } from 'lucide-react';

/* ============================================
   EDITABLE CONFIGURATION
   Change links and text here
   ============================================ */
const CONFIG = {
  brandName: 'BLACK SYNDICATE',
  tagline: 'Power • Strategy • Domination',
  description: 'A maior plataforma de recursos digitais exclusivos do Brasil.',
  
  // Footer links - edit as needed
  links: {
    legal: [
      { name: 'Termos de Serviço', href: '#termos' },
      { name: 'Política de Privacidade', href: '#privacidade' },
      { name: 'Política de Reembolso', href: '#reembolso' },
    ],
    navigation: [
      { name: 'Início', href: '#' },
      { name: 'Categorias', href: '#categorias' },
      { name: 'Sobre', href: '#sobre' },
      { name: 'Contato', href: '#contato' },
    ],
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Suporte', href: '#suporte' },
      { name: 'Comunidade', href: '#comunidade' },
    ],
  },

  // Social media links
  social: [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ],
};

/* ============================================
   FOOTER LINK GROUP COMPONENT
   ============================================ */
const FooterLinkGroup = ({ title, links }) => (
  <div>
    <h4 className="font-heading font-bold text-white mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-500 hover:text-purple-400 transition-colors text-sm"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/* ============================================
   MAIN FOOTER COMPONENT
   ============================================ */
export const Footer = () => {
  // Auto-generate current year
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative pt-20 pb-8 px-4 border-t border-white/5"
      data-testid="footer"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] gradient-border" />

      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 mb-4 group"
              whileHover={{ scale: 1.02 }}
              data-testid="footer-logo"
            >
              <Zap className="w-8 h-8 text-purple-500 group-hover:text-cyan-400 transition-colors" />
              <span className="font-heading font-bold text-2xl text-white">
                {CONFIG.brandName}
              </span>
            </motion.a>
            
            <p className="text-purple-400 text-sm mb-4 tracking-wider">
              {CONFIG.tagline}
            </p>
            
            <p className="text-gray-500 text-sm max-w-xs mb-6">
              {CONFIG.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {CONFIG.social.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 transition-all electric-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={item.name}
                    data-testid={`social-${item.name.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation links */}
          <FooterLinkGroup title="Navegação" links={CONFIG.links.navigation} />
          
          {/* Support links */}
          <FooterLinkGroup title="Suporte" links={CONFIG.links.support} />
          
          {/* Legal links */}
          <FooterLinkGroup title="Legal" links={CONFIG.links.legal} />
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/5 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm" data-testid="copyright">
            © {currentYear} {CONFIG.brandName}. Todos os direitos reservados.
          </p>

          <p className="flex items-center gap-1 text-gray-600 text-sm">
            Feito com{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />{' '}
            no Brasil
          </p>
        </div>

        {/* Large background text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden">
          <span className="font-heading font-black text-[15vw] text-white/[0.02] whitespace-nowrap">
            {CONFIG.brandName}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
