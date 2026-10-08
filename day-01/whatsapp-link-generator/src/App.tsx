import { useMemo, useState } from "react"
import "./App.css"
import { createLink, validateLinkInput, type LinkInput } from "./lib/whatsapp"

const presets = [
  { label: "Orçamento", text: "Olá! Gostaria de solicitar um orçamento. Pode me passar mais informações?" },
  { label: "Agendamento", text: "Olá! Gostaria de verificar os horários disponíveis para um atendimento." },
  { label: "Pedido", text: "Olá! Quero fazer um pedido. Pode me enviar as opções disponíveis?" },
] as const

interface SavedLink { url: string; phone: string; createdAt: string }

function loadHistory(): SavedLink[] {
  try { return JSON.parse(localStorage.getItem("zaplink-history") ?? "[]") as SavedLink[] } catch { return [] }
}

export default function App() {
  const [input, setInput] = useState<LinkInput>({ countryCode: "+55", phone: "", message: presets[0].text })
  const [generated, setGenerated] = useState("")
  const [copied, setCopied] = useState(false)
  const [history, setHistory] = useState<SavedLink[]>(loadHistory)
  const error = useMemo(() => validateLinkInput(input), [input])

  function update<K extends keyof LinkInput>(key: K, value: LinkInput[K]) { setInput((current) => ({ ...current, [key]: value })); setGenerated("") }
  function generate() {
    if (error) return
    const url = createLink(input)
    const item = { url, phone: `${input.countryCode} ${input.phone}`, createdAt: new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date()) }
    const next = [item, ...history.filter((saved) => saved.url !== url)].slice(0, 3)
    setGenerated(url); setHistory(next); localStorage.setItem("zaplink-history", JSON.stringify(next))
  }
  async function copyLink() { await navigator.clipboard.writeText(generated); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }

  return (
    <div className="app-shell">
      <header><a href="#inicio" className="logo"><span>↗</span> ZapLink</a><p>Ferramenta gratuita · sem cadastro</p></header>
      <main id="inicio">
        <section className="intro"><p className="kicker">LINKS DO WHATSAPP, SEM ATRITO</p><h1>Uma conversa a <em>um clique</em> de distância.</h1><p>Monte um link com mensagem pronta para sua bio, catálogo ou atendimento. Tudo acontece no seu navegador.</p><div className="privacy"><b>✓</b><span><strong>Seus dados ficam aqui</strong>Nenhuma informação é enviada para um servidor.</span></div></section>
        <section className="workspace" aria-labelledby="form-title">
          <div className="workspace-head"><div><span>01</span><h2 id="form-title">Monte seu link</h2></div><small>{input.message.length}/500</small></div>
          <div className="field"><label htmlFor="phone">Número com DDD</label><div className="phone-row"><select aria-label="Código do país" value={input.countryCode} onChange={(e) => update("countryCode", e.target.value)}><option>+55</option><option>+351</option><option>+1</option><option>+34</option></select><input id="phone" inputMode="tel" value={input.phone} maxLength={20} onChange={(e) => update("phone", e.target.value)} placeholder="(81) 99999-9999" /></div></div>
          <fieldset><legend>Mensagem pronta</legend><div className="presets">{presets.map((preset) => <button type="button" className={input.message === preset.text ? "active" : ""} onClick={() => update("message", preset.text)} key={preset.label}>{preset.label}</button>)}</div></fieldset>
          <div className="field"><label htmlFor="message">Mensagem</label><textarea id="message" value={input.message} maxLength={500} onChange={(e) => update("message", e.target.value)} rows={5} /></div>
          {error && <p className="error" role="status">{error}</p>}
          <button className="generate" type="button" onClick={generate} disabled={Boolean(error)}>Gerar meu link <span>↗</span></button>
          {generated && <div className="result" role="status"><div><span>SEU LINK ESTÁ PRONTO</span><input aria-label="Link gerado" readOnly value={generated} /></div><div className="result-actions"><button type="button" onClick={copyLink}>{copied ? "Copiado!" : "Copiar link"}</button><a href={generated} target="_blank" rel="noreferrer">Testar ↗</a></div></div>}
        </section>
      </main>
      <aside><div><span>02</span><h2>Links recentes</h2></div>{history.length === 0 ? <p className="empty">Seus três últimos links aparecerão aqui.</p> : <ul>{history.map((item) => <li key={item.url}><a href={item.url} target="_blank" rel="noreferrer">{item.phone}</a><span>{item.createdAt}</span></li>)}</ul>}<button className="clear" onClick={() => { setHistory([]); localStorage.removeItem("zaplink-history") }} disabled={!history.length}>Limpar histórico</button></aside>
      <footer><p>Projeto demonstrativo de Zion Silva · Dia 01/30</p><p>Não afiliado ao WhatsApp ou à Meta.</p></footer>
    </div>
  )
}
