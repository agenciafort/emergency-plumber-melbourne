# Emergency Plumber Melbourne — site

Site estático (HTML/CSS/JS puro, sem dependências de build). Deploy direto em
Railway, Render, Netlify, Cloudflare Pages ou qualquer host estático.

## Estrutura

```
site/
├── index.html                  # HOME — "emergency plumber melbourne" (pronta)
├── services/
│   └── index.html              # hub de serviços (stub — a construir)
├── locations/                  # silo de bairros (vitórias rápidas de SEO)
│   ├── index.html              # hub de áreas (stub)
│   ├── south-melbourne.html    # KD 5  (stub)
│   ├── port-melbourne.html     # KD 6  (stub)
│   ├── melbourne-cbd.html      # KD 7  (stub)
│   ├── east-melbourne.html     # (stub)
│   ├── north-melbourne.html    # (stub)
│   └── inner-city-melbourne.html (stub)
├── blog/
│   ├── index.html              # listagem com paginação automática
│   ├── posts.js                # >>> dados dos posts (mais novo no topo) <<<
│   └── posts/
│       └── _template.html      # modelo de post individual
├── assets/
│   ├── css/styles.css          # design system
│   ├── js/main.js              # nav + ano do rodapé
│   └── img/                    # imagens (hero, og-image, posts)
├── sitemap.xml
├── robots.txt
└── README.md
```

## Antes de publicar — trocar os placeholders no Cursor

Use Find & Replace (Cmd/Ctrl+Shift+H) no projeto inteiro:

| Placeholder            | Trocar por                                  |
|------------------------|---------------------------------------------|
| `your-domain.com.au`   | seu domínio real (ex.: `meusite.com.au`)    |
| `[NOME_EMPRESA]`       | nome do negócio                             |
| `[TELEFONE]`           | telefone exibido (ex.: `(03) 9000 0000`)    |
| `tel:+61300000000`     | link do telefone real (formato E.164)       |
| `[LICENCA]`            | número da licença VBA                       |
| `[ABN]`                | número do ABN                               |
| `[ENDERECO]` `[CEP]`   | endereço / postcode (schema)                |
| `[NUM_AVALIACOES]`     | nº de avaliações                            |
| `[CLIENTE]`            | nomes reais nos depoimentos                 |

> O nome do domínio aparece em: `canonical`, Open Graph, `sitemap.xml` e
> `robots.txt`. Trocar `your-domain.com.au` resolve todos de uma vez.

## Blog — como funciona a paginação (9 cards / 3 colunas)

Tudo é controlado por `blog/posts.js`. **O post mais novo fica no TOPO da lista.**
A paginação é automática — você nunca cria arquivo de listagem novo:

- Posts 1–9  → página 1 (`/blog/`)
- Posts 10–18 → página 2 (`/blog/?page=2`) — abre sozinha no 10º post
- Posts 19–27 → página 3 (`/blog/?page=3`) — abre sozinha no 19º post
- … e assim por diante (sempre 9 por página)

### Adicionar um post novo
1. Crie a página: copie `blog/posts/_template.html` → `blog/posts/<slug>.html` e preencha.
2. Adicione o objeto **no topo** do array em `blog/posts.js`:
   ```js
   {
     slug: "meu-novo-post",
     title: "Título do post",
     excerpt: "Resumo curto de 1–2 linhas.",
     category: "Guide",
     date: "2026-06-10",
     dateLabel: "10 Jun 2026",
     image: "img/meu-post.jpg"   // ou null para placeholder
   },
   ```
3. Pronto. O card aparece automaticamente na home (3 mais novos) e na listagem.

## Próximas fases sugeridas
1. Conteúdo das páginas de bairro (vitórias rápidas — KD 5–7).
2. Conteúdo do hub de serviços + páginas dedicadas por serviço.
3. Escrever os 11 posts long-tail já planejados em `posts.js`.
4. Imagens reais (hero, og-image 1200×630, capas de post 16:10).
5. Google Business Profile + NAP consistente (essencial p/ o Local Pack).
