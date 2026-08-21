import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contacto() {
  const mapLink = "https://maps.app.goo.gl/bpEeXcaQYkUD1M1W6";
  const whatsappUrl = "https://wa.me/50431448579?text=Hola%20Dental%20Studios%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20ubicaci%C3%B3n.";

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-[#f8f6f3] px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="text-[#9E7444] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
            Visítanos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Ubicación y Contacto
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Encuéntranos fácilmente en nuestras instalaciones y recibe atención odontológica de primer nivel en Dental Studios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tarjeta de Información */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-2xl shadow-sm border border-[#C69C6D]/30 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Dental Studios
              </h3>

              <div className="space-y-6">
                {/* Horario */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C69C6D]/15 rounded-xl text-[#9E7444] shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Horario de Atención</h4>
                    <p className="text-gray-700 text-sm font-medium mt-0.5">
                      Lunes a Domingo
                    </p>
                    <p className="text-[#9E7444] text-sm font-semibold">
                      8:30 a.m. – 5:30 p.m.
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C69C6D]/15 rounded-xl text-[#9E7444] shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Teléfono / WhatsApp</h4>
                    <a
                      href="https://wa.me/50431448579"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#9E7444] text-sm font-medium mt-0.5 block transition-colors"
                    >
                      +504 3144-8579
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C69C6D]/15 rounded-xl text-[#9E7444] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Ubicación</h4>
                    <p className="text-gray-600 text-sm mt-0.5">
                      Tegucigalpa, Honduras
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="mt-8 space-y-3 pt-6 border-t border-gray-100">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1f2a44] hover:bg-[#162033] text-white py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                <MapPin size={18} />
                Ver en Google Maps
                <ExternalLink size={14} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#1da851] hover:bg-[#25D366] hover:text-white py-3 rounded-xl font-bold tracking-wide transition-all duration-300 text-sm"
              >
                <FaWhatsapp size={20} />
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Mapa Embebido con Ubicación Exacta */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-2xl overflow-hidden shadow-md border border-[#C69C6D]/30 min-h-[380px] lg:min-h-[460px] flex flex-col"
          >
            <div className="p-4 bg-gray-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="text-[#C69C6D]" size={18} />
                <span className="text-sm font-semibold">Ubicación Exacta — Dental Studios</span>
              </div>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C69C6D] hover:underline font-medium flex items-center gap-1"
              >
                Abrir aplicación <ExternalLink size={12} />
              </a>
            </div>
            
            <div className="w-full flex-grow relative min-h-[340px]">
              <iframe
                title="Ubicación Exacta Dental Studios en Google Maps"
                src="https://maps.google.com/maps?q=13.3005308,-87.1934007+(Dental+Studios)&hl=es&z=17&output=embed"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
