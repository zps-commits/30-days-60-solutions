# ZapLink

Ferramenta local para profissionais autônomos e pequenos negócios criarem links `wa.me` com número e mensagem pronta.

## Funcionalidade central

O usuário informa país, telefone e mensagem. A ferramenta valida a entrada, remove a formatação do número, codifica a mensagem e permite copiar ou testar o link. Três modelos ajudam a começar e os três links recentes ficam somente no navegador.

## Executar e verificar

Requer Node.js 20.19 ou superior.

```bash
npm install
npm run dev
```

```bash
npm run lint
npm test
npm run build
```

## Tecnologias

- React 19 e TypeScript;
- Vite;
- `localStorage` para histórico local;
- Clipboard API para cópia;
- Vitest para validação e geração das URLs.

## Privacidade e limitações

- nenhum dado é enviado a um servidor;
- o histórico pertence ao navegador e pode desaparecer quando os dados locais forem limpos;
- a abertura final depende do WhatsApp e de um número real informado pelo usuário;
- a lista de códigos de país é intencionalmente curta nesta primeira versão.

## Para estudar

Leia primeiro `src/lib/whatsapp.ts`: ele concentra normalização, validação e geração. Em seguida, acompanhe em `src/App.tsx` como a interface chama essas funções e persiste o histórico.

## Próxima melhoria útil

Incluir uma lista pesquisável de países e gerar também um QR Code local, sem rastreamento.
