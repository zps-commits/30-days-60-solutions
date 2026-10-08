import { useState } from "react"
import "./App.css"
import { createWhatsAppUrl } from "./lib/whatsapp"

const services = [
  { code: "01", title: "Reparo hidráulico", text: "Torneiras, sifões, descargas e pequenos vazamentos aparentes." },
  { code: "02", title: "Instalação elétrica", text: "Luminárias, tomadas e substituições simples com avaliação prévia." },
  { code: "03", title: "Montagem e fixação", text: "Prateleiras, suportes, cortinas e móveis compactos." },
] as const

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

export default function App() {
  const [service, setService] = useState<string>(services[0].title)
  const [neighborhood, setNeighborhood] = useState("")
  const contactUrl = createWhatsAppUrl(service, neighborhood)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Fixa Casa, início"><span>F</span> FIXA CASA</a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a><a href="#como-funciona">Como funciona</a>
          <a className="nav-cta" href="#orcamento">Pedir orçamento</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">PEQUENOS REPAROS · RECIFE</p>
            <h1>Sua casa em ordem, <em>sem complicação.</em></h1>
            <p className="hero-lede">Uma demonstração de landing page para profissionais que resolvem instalações e reparos do dia a dia com clareza desde o primeiro contato.</p>
            <div className="hero-actions">
              <a className="button primary" href="#orcamento">Descrever o reparo <ArrowIcon /></a>
              <a className="text-link" href="#servicos">Ver o que atendemos</a>
            </div>
            <div className="proof-row" aria-label="Características do atendimento">
              <span>✓ Escopo combinado antes</span><span>✓ Horário agendado</span><span>✓ Contato direto</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Composição ilustrada de ferramentas domésticas">
            <div className="sun" /><div className="tool-card card-one"><span>PARAFUSO</span><b>06 mm</b></div>
            <div className="tool-card card-two"><span>NÍVEL</span><div className="level"><i /></div></div>
            <div className="house-shape"><div className="door" /><div className="window">+</div></div>
            <p>Um serviço de cada vez.<br />Tudo no lugar.</p>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="section-heading"><p className="eyebrow">O QUE RESOLVEMOS</p><h2>O essencial, bem feito.</h2><p>Atendimentos de baixa complexidade, com descrição clara do que está e do que não está incluído.</p></div>
          <div className="service-grid">
            {services.map((item) => <article key={item.code}><span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p><button onClick={() => { setService(item.title); document.querySelector("#orcamento")?.scrollIntoView({ behavior: "smooth" }) }}>Quero este serviço <ArrowIcon /></button></article>)}
          </div>
        </section>

        <section className="process" id="como-funciona">
          <div><p className="eyebrow">SEM SURPRESA</p><h2>Você explica.<br />A gente organiza.</h2></div>
          <ol><li><b>01</b><span><strong>Conte o que precisa</strong>Escolha o tipo de serviço e informe seu bairro.</span></li><li><b>02</b><span><strong>Alinhe o escopo</strong>Envie fotos e combine materiais, prazo e valor.</span></li><li><b>03</b><span><strong>Agende o atendimento</strong>Confirme uma janela de horário adequada.</span></li></ol>
        </section>

        <section className="quote" id="orcamento">
          <div className="quote-copy"><p className="eyebrow">PRIMEIRO CONTATO</p><h2>Qual reparo está esperando?</h2><p>Preencha dois campos e abra uma mensagem pronta. Este projeto usa um número fictício apenas para demonstração.</p></div>
          <form onSubmit={(event) => { event.preventDefault(); window.open(contactUrl, "_blank", "noopener,noreferrer") }}>
            <label>Tipo de serviço<select value={service} onChange={(event) => setService(event.target.value)}>{services.map((item) => <option key={item.code}>{item.title}</option>)}</select></label>
            <label>Seu bairro <span>(opcional)</span><input value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)} maxLength={60} placeholder="Ex.: Boa Viagem" /></label>
            <button className="button dark" type="submit">Montar mensagem <ArrowIcon /></button>
            <small>Ao continuar, o WhatsApp será aberto em uma nova aba.</small>
          </form>
        </section>
      </main>

      <footer><a className="brand" href="#inicio"><span>F</span> FIXA CASA</a><p>Marca e dados fictícios. Projeto autoral de estudo de Zion Silva.</p><a href="#inicio">Voltar ao topo ↑</a></footer>
    </div>
  )
}
