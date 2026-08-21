import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  const logoPath = `${import.meta.env.BASE_URL}IMG/PNG dorado_Mesa de trabajo 1.png`;

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-white px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={logoPath}
            alt="Dental Studios Logo"
            className="w-52 sm:w-72 opacity-95 object-contain drop-shadow-sm"
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <span className="text-[#9E7444] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            ¿Quiénes somos en Dental Studios?
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg mt-3">
            Somos un equipo de odontólogos profesionales especializados en estética, salud y armonía dental.
            En <strong>Dental Studios</strong> combinamos tecnología de vanguardia con una atención humana y cálida,
            garantizando calidad, seguridad y resultados excepcionales para tu sonrisa.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-6 bg-[#1f2a44] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#162033] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Conoce más sobre nosotros
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}