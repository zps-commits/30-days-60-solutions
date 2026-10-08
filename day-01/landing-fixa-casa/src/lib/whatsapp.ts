export function createServiceMessage(service: string, neighborhood: string) {
  const place = neighborhood.trim() || "meu bairro"
  return `Olá! Vi o projeto demonstrativo da Fixa Casa e gostaria de conversar sobre ${service.toLowerCase()} em ${place}.`
}

export function createWhatsAppUrl(service: string, neighborhood: string) {
  const demoPhone = "5581999999999"
  return `https://wa.me/${demoPhone}?text=${encodeURIComponent(createServiceMessage(service, neighborhood))}`
}
