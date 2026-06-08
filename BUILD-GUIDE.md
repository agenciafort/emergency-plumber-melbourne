# BUILD GUIDE — Emergency Plumber Melbourne

> Documento mestre. Coloque na **raiz** do projeto. O agente (Cursor) deve ler este
> arquivo antes de construir ou editar qualquer página e seguir TODOS os padrões aqui.
> Renomeie para `AGENTS.md` ou referencie no `.cursorrules` se preferir.

---

## 0. Como usar este guia (para o agente)

1. Leia este arquivo inteiro antes de gerar qualquer página.
2. **Não** introduza frameworks, bundlers ou dependências. O site é HTML/CSS/JS puro.
3. Reutilize **sempre** o design system existente (`assets/css/styles.css`) e os
   componentes já definidos na home (`index.html`). Não reinvente estilos.
4. Toda página precisa passar no **Checklist de QA da Seção 12** antes de ser considerada pronta.
5. Construa na ordem da **Seção 11 (Fases)**.
6. Os textos da interface são em **inglês (en-AU)**. As instruções deste guia são em PT-BR.
7. **FLUXO DE 2 PASSOS (OBRIGATÓRIO).** Cada página ou post é entregue em dois
   passos (ver Seção 14): (1) construir o HTML; (2) gerar as imagens, convertê-las
   para WebP/JPG com FFmpeg e instalá-las em `assets/img/` (ou `blog/img/`) para a
   página renderizar perfeitamente. Nunca deixe PNG na página nem `<img>` apontando
   para arquivo inexistente. Só então faça commit/push e siga para a próxima página.

---

## 1. Objetivo

Posicionar o site em **1º lugar no Google (on-page)** para o cluster
`emergency plumber melbourne` e capturar todo o long-tail comercial e informacional do nicho.
É um site de serviço local 24/7 em Melbourne, VIC, Austrália. Cada decisão deve servir a:
**(a)** ranquear, **(b)** ser citado por mecanismos de resposta/IA, **(c)** converter ligação telefônica.

---

## 2. Stack & regras invioláveis

- **Stack:** HTML5 estático + CSS (um arquivo, `assets/css/styles.css`) + JS vanilla (`assets/js/main.js`, `blog/posts.js`). Sem build step.
- **Deploy:** qualquer host estático (Railway, Render, Netlify, Cloudflare Pages).
- **Sem dependências de runtime.** Ícones via Tabler Icons (webfont CDN, já incluído). Fontes via Google Fonts com `preconnect` + `display=swap`.
- **URL EXATA do Tabler (não inventar versão/caminho):** `https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/3.35.0/tabler-icons.min.css`. Caminhos antigos como `.../3.7.0/iconfont/...` retornam 404 e quebram TODOS os ícones. Use sempre o mesmo `<link>` que está na `index.html`.
- **Ícones removidos:** confira se o ícone existe nesta versão antes de usar. Ex.: `ti-pipe` foi removido — use `ti-droplet-cog` para "blocked drains". Se um ícone aparecer como quadrado vazio, o nome não existe na versão atual.
- **Acessibilidade:** HTML semântico, `alt` em toda imagem, contraste AA, navegação por teclado, um único `<h1>` por página.
- **Idioma:** `<html lang="en-AU">`.
- **Performance budget por página:** LCP < 2.5s, CLS < 0.1, INP < 200ms, peso inicial < 500KB.

---

## 3. Sistema de design (já implementado — reutilizar)

Definido em `assets/css/styles.css`. Direção estética: **industrial / hi-vis de ofício**
(charcoal escuro + amarelo de segurança). Nada de "azul corporativo genérico".

- **Cores (CSS vars):** `--ink` (#0D1B2A), `--hivis` (#FFC107), `--hivis-deep` (#FF8A00), `--mist`, `--muted`. Use as variáveis, nunca hex solto.
- **Fontes:** display `Archivo` (700/800) para títulos; corpo `Public Sans` (400/500/600).
- **Componentes prontos (classes):** `.btn .btn--call .btn--ghost .btn--dark`, `.topbar`, `.site-header/.nav`, `.hero`, `.trust-strip`, `.card`/`.grid-3`/`.grid-2`, `.pill`/`.pills`, `.steps/.step`, `.split/.checklist`, `.review/.reviews`, `.post-card`/`.blog-grid`, `.pagination`, `.faq` (`<details>`), `.cta-band`, `.site-footer`, `.mobile-call`.
- **Padrões de UI obrigatórios:** topbar 24/7 + telefone no topo; CTA de ligação fixo no mobile (`.mobile-call`); `.cta-band` antes do footer em toda página.
- Respeite `prefers-reduced-motion` (já tratado no CSS).

---

## 4. Placeholders (trocar no Cursor com Find & Replace global)

| Placeholder           | Trocar por                               |
|-----------------------|------------------------------------------|
| `your-domain.com.au`  | domínio real                             |
| `[NOME_EMPRESA]`      | nome do negócio                          |
| `[TELEFONE]`          | telefone exibido `(03) 9000 0000`        |
| `tel:+61300000000`    | link do telefone (E.164)                 |
| `[LICENCA]`           | licença VBA                              |
| `[ABN]`               | ABN                                      |
| `[ENDERECO]` `[CEP]`  | endereço / postcode                      |
| `[NUM_AVALIACOES]`    | nº de avaliações                         |
| `[CLIENTE]`           | nomes dos depoimentos                    |

Ao gerar páginas novas, **continue usando os mesmos placeholders** — nunca invente dados (telefone, licença, avaliações).

---

## 5. PADRÕES OBRIGATÓRIOS EM TODA PÁGINA PRINCIPAL

Toda página "money" (home, serviços, bairros) deve ser de **altíssima qualidade** e cumprir os 7 pilares abaixo.

### 5.1 SEO on-page (técnico + conteúdo)
- `<title>` único, 50–60 caracteres, com a keyword primária no início + marca no fim.
- `meta description` 150–160 caracteres, com keyword + CTA ("Call now").
- `<link rel="canonical">` absoluto com o domínio.
- Open Graph completo (`og:title`, `og:description`, `og:url`, `og:image`, `og:locale=en_AU`).
- **Um único `<h1>`** com a keyword primária. Hierarquia correta `h1>h2>h3` (sem pular níveis).
- Slug curto, em inglês, com hífens (`/locations/south-melbourne.html`).
- HTML semântico (`header/nav/main/section/article/footer`).
- `alt` descritivo com keyword natural em todas as imagens.
- Links internos contextuais (ver Seção 10). Texto âncora descritivo, nunca "clique aqui".
- Adicionar a URL ao `sitemap.xml`.

### 5.2 AEO — Answer Engine Optimization (featured snippets / People Also Ask)
> A planilha mostra **"People Also Ask" e "Local pack" em quase todos os SERPs** → AEO e GEO não são opcionais.
- Toda página principal tem um bloco **FAQ** (`.faq` com `<details>`) + `FAQPage` JSON-LD.
- Responda perguntas reais do nicho: *"How fast…", "How much does it cost…", "Are you 24/7…", "Is it an emergency…"*.
- Use o padrão **answer-first**: a primeira frase de cada seção responde direto, depois detalha.
- Inclua ao menos uma **tabela** ou **lista objetiva** por página (ótimo para snippet).
- Definições curtas e diretas (40–55 palavras) para perguntas "what is".

### 5.3 GEO — Generative Engine Optimization + sinais locais
> GEO cobre **dois sentidos**, ambos obrigatórios:
> **(a) Geográfico/local** e **(b) Generative Engine (IA / AI Overviews).**
- **Local:** `LocalBusiness`/`Plumber` JSON-LD; NAP (Name/Address/Phone) **idêntico** em todas as páginas e no rodapé; `areaServed` listando os bairros; incorporar mapa nas páginas de bairro; criar/otimizar o Google Business Profile (fora do código, mas essencial — anotar no README).
- **Generative:** conteúdo "citável" — estatísticas, números, definições claras, entidades nomeadas (bairros, tipos de cano, normas VIC); resumo de 2–3 frases no topo que uma IA possa citar; marcação estruturada consistente. Mantenha fatos verificáveis e específicos de Melbourne.

### 5.4 UX design
- Mensagem clara acima da dobra: o que, onde, em quanto tempo, e o botão de ligar.
- Escaneável: blocos curtos, subtítulos, ícones, espaçamento generoso.
- Mobile-first (a maioria das buscas de emergência é no celular).
- Estados de hover/focus visíveis; foco de teclado nunca removido sem substituto.

### 5.5 Alta conversão
- Telefone clicável no topbar, no header (`.btn--call`), em cada `.cta-band` e fixo no mobile.
- Sinais de confiança visíveis cedo: 24/7 real, licença VBA, tempo de resposta, nota/avaliações.
- "Upfront fixed pricing" como objeção-quebrada recorrente.
- Pelo menos **um CTA a cada 2–3 seções**. CTA final em `.cta-band` antes do footer.

### 5.6 Core Web Vitals
- **LCP:** o herói NÃO deve depender de imagem pesada. Se usar imagem no herói, ela é a única com `fetchpriority="high"` e `loading="eager"`; todo o resto `loading="lazy"`.
- **CLS:** toda `<img>` com `width` e `height` (ou `aspect-ratio` no CSS). Reservar espaço para infográficos.
- **INP/JS:** JS no fim do `<body>`, `defer` quando aplicável; nada de libs pesadas.
- Fontes: `preconnect` + `display=swap` (já no padrão). Considerar self-host das fontes numa fase posterior.
- Imagens em **WebP/AVIF**, dimensionadas, `srcset` para responsividade.

### 5.7 Imagens & infográficos (OBRIGATÓRIO em toda página principal)
Cada página money precisa de:
- **1 imagem hero** real (encanador/van/serviço) — `webp`, ~1600px largura, com `alt` rico.
- **≥ 1 infográfico** que ajude a entender o contexto/informação da página. Pode ser SVG inline (melhor para CWV, escala sem perda e é indexável). Exemplos por página na Seção 8.
- **og-image** 1200×630 por página.
- Padrão de nomes: `assets/img/<pagina>-hero.webp`, `assets/img/<pagina>-infographic.svg`.
- Todo infográfico SVG deve ter `<title>`/`<desc>` (acessibilidade) e usar as cores do design system.

### 5.8 Schema (JSON-LD) por tipo de página
- **Home:** `Plumber` + `FAQPage`.
- **Serviço:** `Service` (+ `FAQPage`; `HowTo` quando houver passo a passo).
- **Bairro:** `LocalBusiness`/`Plumber` com `areaServed` específico + `FAQPage` + `BreadcrumbList`.
- **Post de blog:** `Article`/`BlogPosting` + `FAQPage` e/ou `HowTo` + `BreadcrumbList`.

---

## 6. Arquitetura & siloing

```
/                         Home  (cluster cabeça)
/services/                Hub de serviços
/services/blocked-drains-melbourne.html
/services/burst-pipes-melbourne.html
/services/hot-water-melbourne.html
/services/gas-fitting-melbourne.html
/services/blocked-toilet-melbourne.html
/services/roof-plumbing-melbourne.html
/locations/               Hub de áreas
/locations/<suburb>.html  Página por bairro
/blog/                    Listagem (paginação automática 9/página)
/blog/posts/<slug>.html   Post individual
```

Regra de silo: **Home → hubs → páginas filhas**, e as filhas linkam de volta ao hub e à home.
Bairros linkam para serviços relevantes e vice-versa. Posts do blog linkam para a página money correspondente.

---

## 7. Mapa de palavras-chave → páginas (da planilha)

> Distribua cada termo na página correta. Não canibalize: variações da mesma intenção ficam na MESMA página como H2/H3/sinônimos no corpo, **não** em páginas separadas.

### Home `/` — cluster cabeça (vol. somado ~2.300+)
Primária: `emergency plumber melbourne` (1300).
Secundárias (mesmo H1/corpo): `emergency plumbers melbourne` (720) · `melbourne emergency plumber` (140) · `emergency plumber in melbourne` (140) · `24 hour emergency plumber melbourne` (170) · `24-hour emergency plumber melbourne` (30) · `melbourne emergency plumbers` (70) · `best emergency plumber melbourne` (20) · `emergency plumber near me melbourne` (20) · `emergency plumber melbourne vic` (20) · `local emergency plumber melbourne`.

### Páginas de bairro `/locations/<suburb>.html` (KD baixo = vitórias rápidas)
| Página | Keyword primária | Vol | KD | Variações p/ o corpo |
|---|---|---|---|---|
| south-melbourne | emergency plumber south melbourne | 90 | **5** | south melbourne emergency plumber; emergency plumber south melbourne vic |
| port-melbourne | emergency plumber port melbourne | 140 | **6** | — |
| melbourne-cbd | emergency plumber melbourne cbd | 110 | **7** | emergency plumber melbourne cbd vic; emergency plumbers melbourne cbd |
| east-melbourne | emergency plumber east melbourne | 70 | — | eastern suburbs melbourne; emergency plumbers in eastern melbourne |
| north-melbourne | emergency plumber north melbourne | 70 | — | northern suburbs melbourne |
| inner-city-melbourne | emergency plumber inner city melbourne | 70 | **6** | inner melbourne |
| western-suburbs-melbourne | emergency plumber western suburbs melbourne | 30 | — | emergency plumber melbourne western suburbs |
| south-east-melbourne | emergency plumber south east melbourne | 10 | — | emergency plumber melbourne south east |

Criar também (vol. baixo mas KD fácil, autoridade local): `west-melbourne`, `richmond`.
**Ordem de prioridade:** South Melbourne → Port Melbourne → CBD → Inner City → East → North → Western → South East.

### Serviços `/services/...`
Volume comercial por serviço é baixo NESTA planilha (export focado em "emergency plumber"). As páginas de serviço capturam o long-tail informacional + dão autoridade tópica. Termos-âncora:
- blocked-drains: `blocked drain emergency` (família "blocked drain & emergency")
- gas-fitting: `emergency gas plumber melbourne`
- roof-plumbing: `emergency roof plumber melbourne` · `emergency roof plumbers melbourne`
- burst-pipes / hot-water / blocked-toilet: cobertos pelo long-tail do blog (Seção 9).

---

## 8. Especificação página a página (páginas principais)

> Para cada página, siga os 7 pilares da Seção 5. Abaixo, o esqueleto de headings (use **muitos H2/H3** para cercar variações), conteúdo e infográfico exigidos.

### 8.1 Home `/` (já construída — manter como referência de qualidade)
Esqueleto: H1 `Emergency Plumber Melbourne` → seções: serviços, áreas, como funciona, por que nós, avaliações, blog teaser, FAQ, CTA. Schema `Plumber`+`FAQPage`. **Adicionar na fase de conteúdo:** hero image real + 1 infográfico "What counts as a plumbing emergency?" (matriz urgente x pode esperar).

### 8.2 Hub de serviços `/services/`
- **Title:** `Emergency Plumbing Services Melbourne | 24/7 — [NOME_EMPRESA]`
- **H1:** `Emergency Plumbing Services in Melbourne`
- **H2 (um card/link por serviço):** Blocked drains · Burst & leaking pipes · Hot water systems · Gas leaks & fitting · Blocked toilets · Roof & storm plumbing
- **H2:** Why choose our Melbourne plumbers · How it works · FAQ
- **Infográfico:** "Our 24/7 service coverage" (ícones de serviço + tempo de resposta).
- **Schema:** `Service` (lista) + `FAQPage`. Linka para cada página de serviço e para a home.

### 8.3 Páginas de serviço (template — repetir para os 6)
Exemplo: `/services/blocked-drains-melbourne.html`
- **Title:** `Blocked Drain Plumber Melbourne | 24/7 Drain Clearing — [NOME_EMPRESA]`
- **H1:** `Blocked Drains in Melbourne — Cleared Fast, 24/7`
- **H2/H3 (cercar variações):**
  - `Signs you have a blocked drain`
  - `Common causes of blocked drains in Melbourne homes`
  - `How we clear blocked drains` (H3: CCTV inspection · High-pressure jet blasting · Electric eel)
  - `Blocked drain costs in Melbourne` (tabela de faixas)
  - `Emergency blocked drain? What to do right now`
  - `Suburbs we cover for blocked drains` (links p/ bairros)
  - `FAQ`
- **Infográfico:** "Anatomy of a blocked drain" (corte mostrando causas: raízes, gordura, objetos).
- **Schema:** `Service` + `FAQPage` (+ `HowTo` em "what to do now").
- Repetir o padrão para burst-pipes, hot-water, gas-fitting, blocked-toilet, roof-plumbing — ajustando headings ao serviço.

### 8.4 Hub de áreas `/locations/`
- **Title:** `Areas We Cover | Emergency Plumber Melbourne — [NOME_EMPRESA]`
- **H1:** `Melbourne Suburbs We Cover`
- **H2:** lista de bairros (pílulas/cards) + mapa de cobertura + FAQ.
- **Infográfico:** mapa estilizado de Melbourne com os bairros atendidos destacados.
- **Schema:** `LocalBusiness` + `BreadcrumbList`.

### 8.5 Páginas de bairro (template — alta prioridade de SEO)
Exemplo: `/locations/south-melbourne.html`
- **Title:** `Emergency Plumber South Melbourne | 24/7 — [NOME_EMPRESA]`
- **H1:** `Emergency Plumber in South Melbourne`
- **H2/H3 (conteúdo ÚNICO por bairro — nunca duplicar):**
  - `24/7 emergency plumbing in South Melbourne` (parágrafo answer-first com tempo de resposta local)
  - `Services we offer in South Melbourne` (links p/ páginas de serviço)
  - `Areas & streets we cover` (entidades locais: ruas, marcos, código postal)
  - `Why South Melbourne locals call us`
  - `Local reviews` (1–2 depoimentos do bairro)
  - `FAQ` (versão local: "How fast can you reach South Melbourne?")
- **Imagem:** foto local/representativa do bairro. **Infográfico:** "Average response time by area" ou mini-mapa do bairro.
- **Schema:** `Plumber` com `areaServed` = bairro + `FAQPage` + `BreadcrumbList`.
- **CRÍTICO:** conteúdo genuinamente diferente entre bairros (Google penaliza páginas de localidade duplicadas com só o nome trocado).

---

## 9. PLANO COMPLETO DO BLOG (long-tail + autoridade tópica)

### 9.1 Mecânica (já implementada)
- Dados em `blog/posts.js`, **mais novo no topo**. Paginação automática: 9 cards/3 colunas; página nova abre sozinha no 10º, 19º, 28º post…
- Cada post = um arquivo `blog/posts/<slug>.html` (duplicar `_template.html`) + um objeto em `posts.js`.
- Todo post: `Article`/`BlogPosting` + `FAQPage`/`HowTo` + `BreadcrumbList`, imagem de capa (16:10) e **≥ 1 infográfico**.

### 9.2 Modelo pillar → cluster (autoridade tópica)
Cada **pilar** é uma página money (serviço/bairro). Os **clusters** são posts que respondem dúvidas e linkam para o pilar. Isso "cerca" o tema e empurra a money page para o topo.

### 9.3 Plano editorial — escreva MUITOS H2/H3 por post para cobrir todas as variações

> Para cada post: keyword primária, slug, intenção, e **outline de headings** (use todos; cada H2/H3 mira uma variação/pergunta). Alvo: 1.200–1.800 palavras, answer-first, com tabela + FAQ + infográfico. Linke para a money page indicada.

**Cluster: Custos & contratação (pilar = Home)**
1. **How much does an emergency plumber cost in Melbourne?** · slug `how-much-does-emergency-plumber-cost-melbourne` · informacional/comercial
   - H2: What you'll actually pay · What is a call-out fee? · After-hours & weekend rates · Cost by job type (TABELA: blocked drain, burst pipe, hot water, gas) · How to avoid being overcharged · Do you offer upfront fixed pricing? · FAQ
   - Infográfico: faixa de preços por tipo de serviço. Linka → Home, Services.
2. **Choosing an emergency plumber in Melbourne: 7 questions to ask** · `choosing-emergency-plumber-melbourne-questions`
   - H2: Are you licensed (VBA)? · Are you available 24/7? · How fast can you arrive? · Do you charge a call-out fee? · Is pricing fixed upfront? · Do you guarantee the work? · Are you local to my suburb? · FAQ → Home, Locations.

**Cluster: Emergências & "o que fazer agora" (pilar = serviços)**
3. **What to do when a pipe bursts (before the plumber arrives)** · `what-to-do-when-a-pipe-bursts` · HowTo
   - H2: Turn off the water main · Switch off electricity if needed · Drain the taps · Contain & document the damage · When to call an emergency plumber · FAQ → burst-pipes.
4. **How to turn off your water mains in an emergency** · `how-to-turn-off-water-mains-emergency` · HowTo
   - H2: Where is my water main in Melbourne? · House vs street stop tap · Step-by-step shut-off · Apartments & shared meters · FAQ → burst-pipes.
5. **24/7 plumbing: what actually counts as an emergency?** · `what-counts-as-a-real-plumbing-emergency`
   - H2: True emergencies (burst pipe, gas leak, sewage, no water) · Can it wait until morning? · Risk of waiting · Emergency vs urgent (TABELA) · FAQ → Home.
6. **Why is my toilet overflowing? Causes & quick fixes** · `why-is-my-toilet-overflowing-causes-fixes` · HowTo
   - H2: First 60 seconds · Common causes · Safe DIY fixes · When it's a sewer problem · FAQ → blocked-toilet.

**Cluster: Drenagem (pilar = blocked-drains)**
7. **How to clear a blocked drain (and when to call a pro)** · `how-to-clear-a-blocked-drain-melbourne` · HowTo
   - H2: Signs of a blocked drain · Plunger method · Why avoid chemical drain cleaners · Causes (roots, fat, wipes) · When to call a plumber · Drain clearing cost · FAQ → blocked-drains.
8. **Tree roots in your pipes: signs, risks & solutions** · `tree-roots-in-pipes-melbourne`
   - H2: How roots get in · Warning signs · CCTV diagnosis · Removal & relining · Prevention · FAQ → blocked-drains.

**Cluster: Água quente (pilar = hot-water)**
9. **Signs your hot water system is about to fail** · `signs-hot-water-system-failing`
   - H2: No hot water · Rusty/discoloured water · Strange noises · Leaks at the base · Age of the unit · Repair vs replace (TABELA) · FAQ → hot-water.
10. **Gas vs electric vs heat pump hot water: which is best in Melbourne?** · `hot-water-system-types-melbourne`
   - H2: How each works · Running costs in VIC · Rebates · Best for your home (TABELA) · FAQ → hot-water.

**Cluster: Gás (pilar = gas-fitting)**
11. **Do you have a gas leak? Warning signs to act on now** · `gas-leak-warning-signs-melbourne` · HowTo
   - H2: How to detect a gas leak · The smell, the sounds, the symptoms · What to do immediately · What NOT to do · Who to call in Melbourne · FAQ → gas-fitting.

**Cluster: Telhado/tempestade (pilar = roof-plumbing)**
12. **Stormwater & roof leaks: protecting your Melbourne home** · `stormwater-roof-leaks-melbourne-homes`
   - H2: Why Melbourne storms expose leaks · Blocked gutters & downpipes · Roof leak warning signs · Emergency steps · Prevention checklist · FAQ → roof-plumbing.

**Cluster: Seguro/dano (pilar = Home/burst-pipes)**
13. **Burst pipe water damage: what your insurance needs to know** · `burst-pipe-water-damage-insurance-melbourne`
   - H2: Is water damage covered? · Document everything (checklist) · Gradual vs sudden damage · Mitigation duty · Working with your plumber's report · FAQ → burst-pipes.

> **Expandir continuamente** com posts por bairro + sintoma (ex.: "Blocked drain in South Melbourne") para reforçar o silo local. Cada novo post: 1 keyword primária, headings cobrindo as variações, FAQ, infográfico, e link para a money page.

### 9.4 Regras de headings para "cercar" as keywords
- O `<h1>` carrega a keyword primária exata.
- Cada **variação/sinônimo/pergunta** vira um `<h2>` ou `<h3>` — quanto mais perguntas reais cobertas, mais snippets/PAA capturados.
- Use perguntas literais ("How much…", "Why is…", "What to do…") como headings → casam com voz/IA e PAA.
- Inclua o nome do bairro/serviço nos headings onde fizer sentido (sem keyword stuffing).

---

## 10. Linking interno & autoridade tópica

- **Home** linka para: hub de serviços, hub de áreas, top bairros, blog, e os 3 posts mais novos (automático).
- **Hub de serviços** ↔ cada **página de serviço** ↔ **bairros relevantes**.
- **Página de bairro** linka para serviços + home + 2–3 posts relacionados.
- **Cada post** linka para a money page do seu cluster (Seção 9) + 2 posts irmãos.
- Âncoras descritivas com keyword natural. Sem "clique aqui". Sem links órfãos.
- Atualizar `sitemap.xml` a cada página nova.

---

## 11. Ordem de construção (fases)

1. **Trocar placeholders** (domínio, telefone, marca, licença, ABN).
2. **Páginas de bairro** (vitórias rápidas KD 5–7): South Melbourne → Port → CBD → Inner City → East → North → Western → South East. Conteúdo único por bairro + schema + infográfico.
3. **Hub de serviços + 6 páginas de serviço** (template da Seção 8.3).
4. **Imagens reais + infográficos** em todas as money pages (hero, og-image, infográfico).
5. **Blog:** escrever os 13 posts da Seção 9 (duplicar `_template.html`, preencher, adicionar objeto no topo de `posts.js`).
6. **Posts bairro×sintoma** para reforçar o silo local.
7. **GBP + NAP** (fora do código — documentar dados reais no README).

---

## 12. Checklist de QA por página (passar 100% antes de "pronto")

**SEO**
- [ ] 1 só `<h1>` com keyword primária; hierarquia de headings correta
- [ ] title 50–60c e meta description 150–160c com keyword + CTA
- [ ] canonical absoluto + Open Graph completo
- [ ] slug limpo; URL adicionada ao `sitemap.xml`
- [ ] links internos contextuais (entram e saem); âncoras descritivas
- [ ] `alt` em todas as imagens

**AEO**
- [ ] bloco FAQ + `FAQPage` JSON-LD
- [ ] parágrafos answer-first; ≥1 tabela ou lista objetiva
- [ ] perguntas reais como headings (How/Why/What/Cost)

**GEO**
- [ ] schema correto do tipo da página (Seção 5.8)
- [ ] NAP idêntico ao resto do site; `areaServed` quando aplicável
- [ ] fatos/estatísticas citáveis e específicos de Melbourne; resumo no topo

**UX / Conversão**
- [ ] proposta clara acima da dobra + botão de ligar
- [ ] telefone clicável no topbar, header, `.cta-band` e `.mobile-call`
- [ ] sinais de confiança (24/7, VBA, tempo, avaliações) visíveis cedo
- [ ] CTA a cada 2–3 seções

**Core Web Vitals**
- [ ] hero sem dependência de imagem pesada (ou imagem com `fetchpriority="high"`)
- [ ] toda `<img>` com width/height; sem CLS
- [ ] imagens WebP/AVIF + `srcset`; tudo abaixo da dobra com `loading="lazy"`
- [ ] JS no fim do body; sem libs pesadas; fontes com `display=swap`

**Imagens & infográficos**
- [ ] 1 hero real + og-image 1200×630
- [ ] ≥1 infográfico (SVG inline preferível) com `<title>`/`<desc>` e cores do design system

---

## 13. Notas de deploy

- Servir como site estático. Garantir que `/blog/?page=2` resolva (é a mesma `index.html` com query string — funciona em qualquer host estático; não precisa de rewrite).
- Configurar HTTPS e o domínio; conferir que `canonical`/`og:url`/`sitemap`/`robots` apontam para o domínio final (Find & Replace de `your-domain.com.au`).
- Enviar `sitemap.xml` ao Google Search Console; criar/verificar o Google Business Profile.

---

## 14. FLUXO DE 2 PASSOS POR PÁGINA / POST (OBRIGATÓRIO)

Toda página money e todo post de blog é entregue em DOIS passos distintos.
Nunca junte os dois. Nunca pule o Passo 2.

### Passo 1 — Construir a página (texto/HTML)
- Gere o arquivo HTML completo (head + body + schema + conteúdo), seguindo os
  7 pilares da Seção 5 e o checklist da Seção 12.
- Em todo lugar que precisa de imagem, insira a tag `<img>`/SVG normalmente,
  apontando para o caminho final esperado, usando o padrão de nomes da Seção 5.7:
  - Hero:       `assets/img/<pagina>-hero.webp`
  - OG:         `assets/img/<pagina>-og.jpg`
  - Capa post:  `blog/img/<slug>.jpg`
  - Infográfico SVG inline: NÃO precisa de arquivo (vai escrito no HTML).
- Toda `<img>` leva `width`, `height` e `alt` descritivo (evita CLS) desde já,
  mesmo que o arquivo ainda não exista.
- Salvar/commitar a página normalmente. (A imagem aparecerá quebrada até o Passo 2 —
  isso é esperado.)

### Passo 2 — Gerar, converter e instalar as imagens (tarefa do agente)
Depois de construir a página, o agente gera as imagens e as deixa funcionando —
o usuário NÃO precisa gerar nem mover nada. Fluxo obrigatório:

1. **Gerar** cada imagem necessária (hero, og, capa de post) com a ferramenta de
   geração de imagem, seguindo os prompts no estilo fixo da Seção 7
   (fotorrealista, contexto australiano, acentos charcoal + hi-vis amber, sem texto).
2. **Converter para o formato web e instalar na pasta certa** usando FFmpeg
   (confirmado disponível na máquina). A geração produz PNG; nunca deixe PNG na
   página. Converta e grave em `assets/img/` (ou `blog/img/`):
   - Hero → `.webp` (~1280–1600px de largura, qualidade ~82):
     `ffmpeg -y -i <src>.png -vf "scale=1280:-1" -quality 82 assets/img/<pagina>-hero.webp`
   - OG → `.jpg` 1200×630 (melhor compatibilidade social que webp):
     `ffmpeg -y -i <src>.png -vf "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630" -q:v 3 assets/img/<pagina>-og.jpg`
   - Capa de post → `.jpg` 16:10 em `blog/img/<slug>.jpg`.
3. **Conferir** que os arquivos existem no caminho exato que o HTML referencia.
4. **Commitar e dar push** da página + imagens juntas. A página já deve renderizar
   a hero corretamente neste ponto.

- Padrão de formatos: hero/capa em **WebP**, og:image em **JPG**.
- Regras de CWV da Seção 5.6 valem: hero com `fetchpriority="high"`,
  resto `loading="lazy"`.
- Só então o agente avança para a próxima página/post, na ordem da Seção 11
  (idealmente confirmando com o usuário a cada página).

### Resumo do ciclo
Construir página → gerar imagens → converter (WebP/JPG) e instalar em `assets/img/`
→ conferir render → commit/push → próxima página. Repetir na ordem da Seção 11.
