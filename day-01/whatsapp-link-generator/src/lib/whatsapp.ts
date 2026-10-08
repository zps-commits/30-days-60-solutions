export interface LinkInput { countryCode: string; phone: string; message: string }

export function digitsOnly(value: string) { return value.replace(/\D/g, "") }

export function validateLinkInput({ countryCode, phone, message }: LinkInput) {
  const fullPhone = `${digitsOnly(countryCode)}${digitsOnly(phone)}`
  if (fullPhone.length < 10 || fullPhone.length > 15) return "Informe um número válido com DDD."
  if (!message.trim()) return "Escreva uma mensagem para gerar o link."
  if (message.length > 500) return "A mensagem deve ter no máximo 500 caracteres."
  return null
}

export function createLink(input: LinkInput) {
  const error = validateLinkInput(input)
  if (error) throw new Error(error)
  const phone = `${digitsOnly(input.countryCode)}${digitsOnly(input.phone)}`
  return `https://wa.me/${phone}?text=${encodeURIComponent(input.message.trim())}`
}
