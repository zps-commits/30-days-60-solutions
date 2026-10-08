import { describe, expect, it } from "vitest"
import { createServiceMessage, createWhatsAppUrl } from "./whatsapp"

describe("contato da landing", () => {
  it("usa um bairro genérico quando o campo está vazio", () => {
    expect(createServiceMessage("Reparo hidráulico", "")).toContain("em meu bairro")
  })

  it("codifica a mensagem no endereço do WhatsApp", () => {
    const url = createWhatsAppUrl("Instalação elétrica", "Boa Viagem")
    expect(url).toMatch(/^https:\/\/wa\.me\/5581999999999\?text=/)
    expect(decodeURIComponent(url)).toContain("Boa Viagem")
  })
})
