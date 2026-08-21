import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const logoPath = `${import.meta.env.BASE_URL}IMG/PNG dorado_Mesa de trabajo 1.png`;
  const mapLink = "https://maps.app.goo.gl/bpEeXcaQYkUD1M1W6";

  return (
    <footer className="bg-gray-950 text-white py-14 px-6 text-center border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <Link to="/" className="inline-block mb-6 focus:outline-none">
          <img
            src={logoPath}
            alt="Dental Studios Logo"
            className="mx-auto h-16 sm:h-20 object-contain hover:scale-105 transition-transform"
          />
        </Link>

        {/* Información Clínica Real */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full text-gray-300 text-sm mb-8">
          <div className="flex flex-col items-center p-4 rounded-xl bg-gray-900/60 border border-gray-800">
            <Phone className="text-[#C69C6D] mb-2" size={20} />
            <span className="font-bold text-white text-base">Teléfono / WhatsApp</span>
            <a
              href="https://wa.me/50431448579"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C69C6D] hover:underline font-semibold mt-1"
            >
              +504 3144-8579
            </a>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-gray-900/60 border border-gray-800">
            <Clock className="text-[#C69C6D] mb-2" size={20} />
            <span className="font-bold text-white text-base">Horario de Atención</span>
            <p className="text-gray-300 mt-1 font-medium">Lunes a Domingo</p>
            <p className="text-[#C69C6D] font-semibold">8:30 a.m. – 5:30 p.m.</p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-gray-900/60 border border-gray-800">
            <MapPin className="text-[#C69C6D] mb-2" size={20} />
            <span className="font-bold text-white text-base">Ubicación</span>
            <p className="text-gray-300 mt-1">Tegucigalpa, Honduras</p>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C69C6D] hover:underline font-semibold mt-0.5"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>

        {/* Enlaces a Redes */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <a
            href="https://wa.me/50431448579"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Dental Studios"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#25D366] transition-all duration-300 hover:scale-110"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="https://www.instagram.com/dentalstudioscenter?igsh=MXg3ZjkydzY2cTY5Zw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Dental Studios"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-600 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/share/1KehbdmTeq/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Dental Studios"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.tiktok.com/@dentalstudioscenter?_r=1&_t=ZS-98lxhkYXYjF"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok Dental Studios"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          >
            <FaTiktok size={18} />
          </a>
        </div>

        <div className="w-full max-w-lg border-t border-gray-800/80 pt-6">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} <strong className="text-white">Dental Studios</strong>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}