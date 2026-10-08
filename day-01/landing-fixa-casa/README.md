# Fixa Casa

Landing page demonstrativa para um prestador fictício de pequenos reparos residenciais em Recife. O público é formado por moradores que precisam entender rapidamente o escopo e iniciar uma conversa organizada.

## Funcionalidade central

O visitante conhece três categorias de serviço, escolhe uma delas, informa opcionalmente o bairro e abre uma mensagem contextual no WhatsApp. O número usado é fictício e está documentado na interface.

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
- CSS responsivo com tokens, estados de foco e redução de movimento;
- Vitest para a lógica de composição do contato.

## Direção visual e assets

A versão 2 adota uma direção fotográfica quente, com tipografia editorial, profundidade, cartões de serviço assimétricos e transições cromáticas entre as seções. A imagem do hero foi gerada especificamente para este projeto com IA e comprimida para JPEG antes da publicação; ela é um asset conceitual da marca fictícia, não uma fotografia de cliente ou serviço real.

## Limitações

- não há backend, agenda ou envio de orçamento;
- o contato abre um número fictício e não representa uma empresa ativa;
- as fontes remotas dependem de conexão, com fallbacks locais.

## Para estudar

Comece por `src/App.tsx` para entender componentes, estado e eventos. Depois veja `src/lib/whatsapp.ts` para observar como a lógica pura foi isolada e testada.

## Próxima melhoria útil

Adicionar um formulário de escopo com anexos e uma prévia completa da mensagem, mantendo tudo local até a confirmação do visitante.
