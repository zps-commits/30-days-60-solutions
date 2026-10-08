# 30 dias, 60 soluções

Desafio autoral de **Zion Silva**, de 8 de outubro a 6 de novembro de 2026. A meta é construir duas soluções pequenas, completas e úteis por dia: uma aplicação principal e uma ferramenta relacionada.

Os projetos são demonstrações e exercícios de desenvolvimento. Marcas, pessoas, números, depoimentos e dados comerciais fictícios são identificados como tal; nada aqui deve ser interpretado como trabalho contratado.

## Dia 01 — pequenos serviços locais

| Solução | Problema que resolve | Tecnologia | Estado |
| --- | --- | --- | --- |
| [Landing Fixa Casa](day-01/landing-fixa-casa/) | Ajuda um prestador fictício de pequenos reparos a explicar serviços e iniciar um contato organizado | React, TypeScript, Vite, CSS | Concluído |
| [ZapLink](day-01/whatsapp-link-generator/) | Cria links de WhatsApp com número e mensagem validados | React, TypeScript, Vite, localStorage | Concluído |

## Cronograma

O plano completo e o andamento diário estão em [STATUS.md](STATUS.md). Decisões técnicas e limitações ficam em [DECISIONS.md](DECISIONS.md), e as evidências de cada entrega em [SESSION.md](SESSION.md).

## Como executar

Cada solução é independente. Entre na pasta desejada, instale as dependências e execute:

```bash
npm install
npm run dev
```

Para validar uma solução:

```bash
npm run lint
npm test
npm run build
```

## Princípios

- uma funcionalidade central completa antes de extras;
- conteúdo demonstrativo explicitamente identificado;
- acessibilidade, responsividade e estados de erro;
- nenhuma chave ou dado sensível no cliente;
- documentação suficiente para reproduzir e explicar as decisões.
