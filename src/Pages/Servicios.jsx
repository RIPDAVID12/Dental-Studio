import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WhatsAppButton from "../Components/WhatsAppButton";
import { Sparkles, CheckCircle2, Shield, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const treatments = [
    {
      title: "Ortodoncia y Alineadores",
      category: "Estética & Función",
      desc: "Corrección de maloclusiones y apiñamiento con brackets metálicos, estéticos de zafiro y alineadores invisibles de última generación.",
      benefits: ["Alineación perfecta", "Mejora en la mordida", "Opciones discretas e invisibles"],
      img: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Implantes Dentales",
      category: "Rehabilitación Oral",
      desc: "Reemplazo fijo de piezas perdidas con tornillos de titanio biocompatibles y coronas de zirconio de apariencia idéntica a tus dientes naturales.",
      benefits: ["Recuperación del 100% de masticación", "Durabilidad de por vida", "Estética natural inmediata"],
      img: "https://images.pexels.com/photos/4269490/pexels-photo-4269490.jpeg?auto=compress&cs=tinysrgb&w=802",
    },
    {
      title: "Diseño de Sonrisa & Carillas",
      category: "Alta Estética",
      desc: "Transformación integral de forma, tamaño y color dental mediante carillas de resina de alta estética o porcelana ultrafina.",
      benefits: ["Sonrisa armónica y luminosa", "Mínimo desgaste dental", "Resultados personalizados"],
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cirugía Oral y Terceros Molares",
      category: "Cirugía Especializada",
      desc: "Extracciones complejas de muelas del juicio y cirugías periodontales con técnicas no traumáticas y rápida cicatrización.",
      benefits: ["Procedimiento indoloro con anestesia eficaz", "Recuperación acelerada", "Prevención de infecciones"],
      img: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Blanqueamiento Dental LED",
      category: "Estética Dental",
      desc: "Aclaramiento seguro del esmalte dental en una sola sesión clínica mediante geles activados con luz LED de alta potencia.",
      benefits: ["Dientes hasta 4 tonos más blancos", "Sin dañar el esmalte", "Resultados visibles el mismo día"],
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Periodoncia y Limpieza Profunda",
      category: "Salud de Encías",
      desc: "Tratamiento de gingivitis y periodontitis mediante profilaxis ultrasónica para eliminar sarro subgingival y proteger el soporte óseo.",
      benefits: ["Detención del sangrado gingival", "Aliento fresco y saludable", "Prevención de pérdida dental"],
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Servicios */}
        <section className="relative bg-gradient-to-b from-[#f8f6f3] to-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C69C6D]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#1f2a44]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C69C6D]/15 text-[#9E7444] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} className="text-[#9E7444]" />
              Catálogo Clínico
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Tratamientos Odontológicos en <br className="hidden sm:inline" />
              <span className="text-[#9E7444]">Dental Studios</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Descubre nuestra gama completa de especialidades dentales diseñadas para devolverte la función, salud y estética que tu sonrisa merece.
            </p>
          </div>
        </section>

        {/* Listado Limpio de Tratamientos */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, idx) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C69C6D]/25 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={t.img}
                      alt={t.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-md text-[#C69C6D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      {t.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2.5">
                      {t.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {t.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      {t.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 size={14} className="text-[#9E7444] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Garantía y Compromiso */}
        <section className="py-16 sm:py-20 bg-[#f8f6f3] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-14 h-14 bg-[#C69C6D]/15 text-[#9E7444] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield size={28} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Compromiso de Calidad en Dental Studios
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Todos nuestros procedimientos son realizados bajo estrictos protocolos de bioseguridad, materiales certificados por la FDA y seguimiento personalizado.
            </p>
            <a
              href="https://wa.me/50431448579?text=Hola%20Dental%20Studios%2C%20quisiera%20consultar%20sobre%20sus%20tratamientos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <FaWhatsapp size={20} />
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}