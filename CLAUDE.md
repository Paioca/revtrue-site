# RevTrue Blog — Development Brief for Claude Code

Este arquivo é o briefing completo do projeto. Leia inteiro antes de executar qualquer comando.
Toda decisão de design, stack e estrutura já está tomada. Não improvise. Execute.

---

## 1. O QUE É ESSE PROJETO

Blog editorial da RevTrue — Revenue Operating System para B2B SaaS.
Público: líderes de vendas e revenue operations em empresas de médio/grande porte.
Tom: direto, provocador, baseado em dados reais com fontes citadas.
Objetivo do blog: publicação editorial de referência em revenue operations para SaaS B2B.

---

## 2. STACK DECIDIDA

```
Framework:    Astro 4.x (static output)
Styling:      CSS puro com variáveis (sem Tailwind, sem CSS-in-JS)
Content:      Markdown/MDX em src/content/blog/
Deploy:       Vercel (build command: astro build, output: dist/)
Fontes:       Google Fonts CDN (Plus Jakarta Sans + Lora)
Analytics:    Google Analytics 4 (adicionar script no <head>)
```

Não usar: Tailwind, styled-components, SASS, qualquer UI library.
O CSS está definido neste documento. Copie os tokens exatos.

---

## 3. ESTRUTURA DE ARQUIVOS

```
revtrue-blog/
├── CLAUDE.md
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── ArticleRow.astro
│   │   ├── ArticleCard.astro
│   │   ├── PillarStrip.astro
│   │   ├── NumberBanner.astro
│   │   ├── Sidebar.astro
│   │   └── article/
│   │       ├── PullQuote.astro
│   │       ├── StatBlock.astro
│   │       ├── ConceptBox.astro
│   │       └── Checklist.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   ├── layouts/
│   │   ├── Base.astro
│   │   ├── BlogLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── blog/
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
```

---

## 4. DESIGN TOKENS

```css
:root {
  --orange:  #F0672A;
  --navy:    #1E2D4A;
  --black:   #0D0D0D;
  --white:   #FFFFFF;
  --off:     #F8F7F5;
  --line:    #E8E4DE;
  --muted:   #8C8880;
  --dim:     #C2BDB6;
  --text-body: #2A2520;
  --text-med:  #4A4540;

  --sans:  'Plus Jakarta Sans', sans-serif;
  --serif: 'Lora', Georgia, serif;

  --container: 1100px;
  --pad-h: 40px;
  --pad-h-mobile: 20px;
}
```

---

## 5. COMPONENTES — ESPECIFICAÇÕES

### Nav.astro
- Sticky, blur backdrop, 58px height
- Logo: rev(navy) + true(orange)
- Links: muted → black no hover
- Sem botão CTA na nav (fase atual: blog editorial puro, sem menção a produto)

### Footer.astro
- border-top: 1px solid var(--line)
- Flex row, space-between, padding 28px
- RevTrue. Real results. Strategies that transform.
- Links: Sobre / Contato

### Sidebar.astro
- position: sticky; top: 80px
- Dois blocos apenas: ToC + Série
- Não criar: bloco de CTA, formulário de email, menção a produto ou early access

### Listagem (index.astro)
- Masthead → Lead section → Pillar strip → Article list → Number Banner → Footer
- Não criar: Newsletter, CTA de produto, botão de Early Access

### CtaInline.astro
- Não usado na fase atual. Blog editorial puro sem menção a produto.

---

## 6. ANIMAÇÕES

CSS puro, fadeUp com delays .fu1/.fu2/.fu3/.fu4

---

## 7. O QUE NÃO FAZER

- Não instalar Tailwind, Bootstrap, ou qualquer CSS framework
- Não criar rotas além de / e /blog/[slug]
- Não adicionar CMS headless
- Não adicionar JavaScript além do necessário (progress bar + pillar tabs)
- Não inventar componentes além dos listados
- Não adicionar Newsletter, CTA, Early Access, menção a produto

*RevTrue Blog — CLAUDE.md v1.0 — Fevereiro 2026*
