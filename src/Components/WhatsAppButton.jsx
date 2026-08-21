import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "50431448579";
  const defaultMessage = encodeURIComponent(
    "¡Hola Dental Studios! Me gustaría solicitar información y agendar una cita de valoración."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="Contacto WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp con Dental Studios"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl shrink-0 animate-pulse" />
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          ¿Cita o consulta? Escríbenos
        </span>
        <span className="sm:hidden font-semibold text-xs tracking-wide">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
