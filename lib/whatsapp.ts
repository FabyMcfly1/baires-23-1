export function openWhatsApp(message: string) {
  const phone = "34641328378";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
