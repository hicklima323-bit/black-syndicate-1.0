# BLACK SYNDICATE - PRD (Product Requirements Document)

## Project Overview
Site institucional/brand BLACK SYNDICATE com visual dark futurista, efeitos neon e animações elétricas.

## User Persona
- Público brasileiro interessado em serviços digitais, produtos exclusivos e comunidades premium
- Busca conteúdos premium, ferramentas e recursos digitais

## Core Requirements
- [x] Site responsivo (PC, tablet e celular)
- [x] Tema dark com cores neon (roxo, azul, cyan)
- [x] Animação de choque elétrico nos cards
- [x] Header com logo, busca, navegação, carrinho e login
- [x] Hero Section com partículas animadas
- [x] Seção de Categorias com 8 cards
- [x] Seção de Destaques com carousel
- [x] Seção Sobre com stats
- [x] Seção de Contato (WhatsApp/Telegram)
- [x] Footer com links e redes sociais

## Implementation Status - February 2, 2026

### What's Been Implemented
1. **Header Component** (`/app/frontend/src/components/Header.jsx`)
   - Logo BLACK SYNDICATE com ícone Zap
   - Campo de busca responsivo
   - Navegação desktop com 4 categorias
   - Ícones carrinho e usuário
   - Menu mobile colapsável

2. **Hero Section** (`/app/frontend/src/components/HeroSection.jsx`)
   - Partículas animadas (tsparticles)
   - Título com gradiente e efeito glitch
   - Subtítulo "Power • Strategy • Domination"
   - Botão CTA animado
   - Decorações nos cantos

3. **Featured Section** (`/app/frontend/src/components/FeaturedSection.jsx`)
   - Carousel de 3 produtos
   - Controles prev/next
   - Dots indicadores
   - Preços e avaliações
   - Botão "Obter Agora"

4. **Category Grid** (`/app/frontend/src/components/CategoryGrid.jsx`)
   - 8 categorias com ícones coloridos
   - Efeito elétrico Canvas no hover
   - Animações de entrada
   - Contagem de itens

5. **About Section** (`/app/frontend/src/components/AboutSection.jsx`)
   - Texto manifesto
   - Logo animado com rings
   - Stats: 50K+, 1000+, 99.9%, 24/7
   - 4 feature cards

6. **Contact Section** (`/app/frontend/src/components/ContactSection.jsx`)
   - Botão WhatsApp (verde)
   - Botão Telegram (azul)
   - Link de suporte

7. **Footer** (`/app/frontend/src/components/Footer.jsx`)
   - Logo e tagline
   - Links de navegação, suporte e legal
   - Ícones redes sociais
   - Copyright dinâmico

### Tech Stack
- React 19
- Framer Motion (animações)
- tsparticles (partículas)
- Tailwind CSS
- Lucide React (ícones)

## Prioritized Backlog

### P0 - Completed
- [x] Layout responsivo
- [x] Tema dark com neon
- [x] Efeitos hover elétricos
- [x] Todas as seções

### P1 - Nice to Have
- [ ] Integração real com backend de produtos
- [ ] Sistema de autenticação
- [ ] Carrinho funcional
- [ ] Busca com filtros

### P2 - Future Enhancements
- [ ] Página de produto individual
- [ ] Checkout/pagamento
- [ ] Dashboard do usuário
- [ ] Sistema de notificações

## Next Tasks
1. Adicionar páginas de categorias individuais
2. Implementar sistema de busca funcional
3. Integrar sistema de autenticação
4. Conectar com backend para produtos reais

## Configuration Files

### Cores editáveis em `/app/frontend/src/index.css`:
```css
--bs-neon-purple: #a855f7;
--bs-neon-blue: #06b6d4;
--bs-neon-pink: #ec4899;
--bs-electric-intensity: 1;
```

### Categorias editáveis em `/app/frontend/src/components/CategoryGrid.jsx`
### Produtos em destaque em `/app/frontend/src/components/FeaturedSection.jsx`
### Links de contato em `/app/frontend/src/components/ContactSection.jsx`
