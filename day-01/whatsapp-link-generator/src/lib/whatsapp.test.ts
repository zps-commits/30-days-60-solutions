import { describe, expect, it } from "vitest"
import { createLink, digitsOnly, validateLinkInput } from "./whatsapp"

describe("gerador de link", () => {
  it("remove a formatação do telefone", () => expect(digitsOnly("(81) 9 9999-9999")).toBe("81999999999"))
  it("rejeita telefone incompleto", () => expect(validateLinkInput({ countryCode: "55", phone: "123", message: "Olá" })).toContain("válido"))
  it("rejeita mensagem vazia", () => expect(validateLinkInput({ countryCode: "55", phone: "81999999999", message: " " })).toContain("mensagem"))
  it("gera uma URL codificada", () => expect(createLink({ countryCode: "+55", phone: "(81) 99999-9999", message: "Olá, tudo bem?" })).toBe("https://wa.me/5581999999999?text=Ol%C3%A1%2C%20tudo%20bem%3F"))
})
