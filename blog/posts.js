/* ============================================================
   [NOME_EMPRESA] — Blog posts data
   ------------------------------------------------------------
   REGRA: o post MAIS NOVO fica no TOPO da lista.
   A paginação é automática: 9 cards por página (3 colunas).
     • Posts 1–9   -> página 1   (blog/)
     • Posts 10–18 -> página 2   (blog/?page=2)   <- abre sozinha no 10º post
     • Posts 19–27 -> página 3   (blog/?page=3)   <- abre sozinha no 19º post
   Você NÃO precisa criar arquivos novos de listagem — basta adicionar
   o objeto aqui e criar a página individual em blog/posts/<slug>.html

   Campos:
     slug      -> nome do arquivo em blog/posts/<slug>.html
     title     -> título do card
     excerpt   -> resumo curto (1–2 linhas)
     category  -> etiqueta (ex.: "Guide", "Emergency", "Hot water")
     date      -> ISO (YYYY-MM-DD) — usado para ordenar/SEO
     dateLabel -> texto exibido no card
     image     -> caminho relativo a /blog/ (ex.: "img/post-x.jpg") ou null
   ============================================================ */

var BLOG_POSTS = [
  {
    slug: "burst-pipe-water-damage-insurance-melbourne",
    title: "Burst pipe water damage: what your insurance needs to know",
    excerpt: "Documenting the damage the right way can make or break your claim. Here's the checklist.",
    category: "Guide",
    date: "2026-06-02",
    dateLabel: "2 Jun 2026",
    image: null
  },
  {
    slug: "choosing-emergency-plumber-melbourne-questions",
    title: "Choosing an emergency plumber in Melbourne: 7 questions to ask",
    excerpt: "Not all 'emergency' plumbers turn up fast or quote fairly. Ask these before you book.",
    category: "Guide",
    date: "2026-05-26",
    dateLabel: "26 May 2026",
    image: "img/choosing-emergency-plumber-melbourne-questions.jpg"
  },
  {
    slug: "how-to-turn-off-water-mains-emergency",
    title: "How to turn off your water mains in an emergency",
    excerpt: "Stopping the water fast limits the damage. Find your main stop tap before you ever need it.",
    category: "Emergency",
    date: "2026-05-19",
    dateLabel: "19 May 2026",
    image: "img/how-to-turn-off-water-mains-emergency.jpg"
  },
  {
    slug: "stormwater-roof-leaks-melbourne-homes",
    title: "Stormwater & roof leaks: protecting your Melbourne home",
    excerpt: "Melbourne's sudden downpours expose weak points fast. Here's what to check before storm season.",
    category: "Roof",
    date: "2026-05-12",
    dateLabel: "12 May 2026",
    image: null
  },
  {
    slug: "why-is-my-toilet-overflowing-causes-fixes",
    title: "Why is my toilet overflowing? Causes & quick fixes",
    excerpt: "What to do in the first 60 seconds, and which causes mean it's time to call a plumber.",
    category: "Toilets",
    date: "2026-05-05",
    dateLabel: "5 May 2026",
    image: "img/why-is-my-toilet-overflowing-causes-fixes.jpg"
  },
  {
    slug: "what-counts-as-a-real-plumbing-emergency",
    title: "24/7 plumbing: what actually counts as an emergency?",
    excerpt: "Some problems can wait until morning — others can't. How to tell the difference.",
    category: "Emergency",
    date: "2026-04-28",
    dateLabel: "28 Apr 2026",
    image: "img/what-counts-as-a-real-plumbing-emergency.jpg"
  },
  {
    slug: "gas-leak-warning-signs-melbourne",
    title: "Do you have a gas leak? Warning signs to act on now",
    excerpt: "The smell, the sounds and the symptoms — plus exactly what to do before help arrives.",
    category: "Gas",
    date: "2026-04-21",
    dateLabel: "21 Apr 2026",
    image: null
  },
  {
    slug: "how-to-clear-a-blocked-drain-melbourne",
    title: "How to clear a blocked drain (and when to call a pro)",
    excerpt: "Safe DIY steps that won't damage your pipes — and the warning signs of a bigger blockage.",
    category: "Drains",
    date: "2026-04-14",
    dateLabel: "14 Apr 2026",
    image: null
  },
  {
    slug: "signs-hot-water-system-failing",
    title: "Signs your hot water system is about to fail",
    excerpt: "Rusty water, banging noises, lukewarm showers — catch it before it leaves you cold.",
    category: "Hot water",
    date: "2026-04-07",
    dateLabel: "7 Apr 2026",
    image: null
  },
  {
    slug: "what-to-do-when-a-pipe-bursts",
    title: "What to do when a pipe bursts (before the plumber arrives)",
    excerpt: "Five quick steps to limit the water damage while help is on the way.",
    category: "Emergency",
    date: "2026-03-31",
    dateLabel: "31 Mar 2026",
    image: "img/what-to-do-when-a-pipe-bursts.jpg"
  },
  {
    slug: "how-much-does-emergency-plumber-cost-melbourne",
    title: "How much does an emergency plumber cost in Melbourne?",
    excerpt: "What drives the price, what 'call-out fee' really means, and how to avoid nasty surprises.",
    category: "Pricing",
    date: "2026-03-24",
    dateLabel: "24 Mar 2026",
    image: "img/how-much-does-emergency-plumber-cost-melbourne.jpg"
  }
];

/* expose for non-module usage */
if (typeof window !== "undefined") { window.BLOG_POSTS = BLOG_POSTS; }
