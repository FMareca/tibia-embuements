# Tibia — Calculadora de Imbuements

Aplicação React + Vite para comparar o custo de comprar ingredientes no Market com o uso de 6 Gold Tokens por imbuement.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço local exibido pelo Vite.

## Gerar versão de produção

```bash
npm run build
npm run preview
```

Os arquivos prontos para publicação serão gerados na pasta `dist/`.

## Publicar no GitHub Pages

1. Envie este projeto para um repositório GitHub e use a branch `main`.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
4. Faça um push para `main`. O workflow `.github/workflows/deploy.yml` vai compilar e publicar o projeto.

## Persistência dos valores

Os preços são salvos automaticamente em `localStorage` no navegador atual. Não há backend, conta ou servidor necessário. Os valores não sincronizam entre navegadores/dispositivos e podem ser apagados se os dados locais do navegador forem removidos.

## Estrutura do projeto

```text
src/
├── components/
│   ├── AppFooter.jsx
│   ├── AppHeader.jsx
│   ├── CostComparison.jsx
│   ├── ImbuementCard.jsx
│   ├── ItemPriceCard.jsx
│   ├── PriceInput.jsx
│   ├── SettingsPanel.jsx
│   └── SummaryCards.jsx
├── data/
│   └── imbuements.js
├── hooks/
│   └── usePersistentState.js
├── utils/
│   ├── calculations.js
│   └── formatters.js
├── App.jsx
├── main.jsx
└── styles.css
```

## Regras do cálculo

- Market: soma dos preços unitários dos itens multiplicados pelas quantidades + taxa do NPC.
- Gold Tokens: preço de 6 tokens + taxa do NPC.
- Taxa inicial: 250.000 gp por imbuement.
- A taxa é aplicada às duas opções e, portanto, não altera qual das duas é mais barata em cada categoria.
