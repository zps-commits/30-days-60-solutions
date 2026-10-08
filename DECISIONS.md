# Decisões e limitações

## 8 de outubro de 2026 — base do desafio

- **Estrutura:** um repositório e uma pasta por dia; cada solução possui dependências, comandos e documentação próprios.
- **Stack do Dia 01:** React + TypeScript + Vite. O escopo é totalmente executado no navegador, por isso Next.js e backend adicionariam complexidade sem benefício.
- **Design:** as duas soluções compartilham precisão editorial, mas têm identidades distintas. A Fixa Casa usa papel, verde escuro, menta e lima; o ZapLink adota uma interface utilitária e mais compacta.
- **Assets:** as ilustrações do Dia 01 foram feitas em CSS e SVG local. Não há fotos, marcas de clientes ou assets de terceiros.
- **Privacidade:** o ZapLink não envia os dados a servidor. Os três últimos links ficam somente no `localStorage` do navegador e podem ser apagados na interface.
- **Demonstração:** a Fixa Casa é uma marca fictícia e usa o número reservado `+55 81 99999-9999` apenas para demonstrar a montagem da URL. Não há promessa de atendimento.
- **Fontes:** as interfaces carregam fontes do Google Fonts; em ambiente sem rede, os fallbacks locais mantêm o conteúdo legível.
- **Publicação:** repositório público criado na conta confirmada `zps-commits`: https://github.com/zps-commits/30-days-60-solutions.
- **Deploy:** cada aplicação foi conectada ao mesmo repositório como um projeto Vercel independente, com sua própria pasta raiz e URL pública. Essa separação mantém comandos, builds e demonstrações independentes.
