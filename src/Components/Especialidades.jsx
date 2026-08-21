import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Specialties() {
  const services = [
    {
      title: "Ortodoncia",
      desc: "Alineación y diseño de sonrisa con técnicas modernas como brackets estéticos y alineadores invisibles para una sonrisa perfecta.",
      img: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Cirugía Oral",
      desc: "Procedimientos quirúrgicos avanzados con mínima invasión y sedación confortable, garantizando tu bienestar y pronta recuperación.",
      img: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Implantes Dentales",
      desc: "Soluciones definitivas para el reemplazo de piezas dentales con materiales de titanio y zirconio de máxima durabilidad y estética natural.",
      img: "https://images.pexels.com/photos/4269490/pexels-photo-4269490.jpeg?auto=compress&cs=tinysrgb&w=802",
    },
  ];

  return (
    <section id="tratamientos" className="py-16 sm:py-24 px-4 sm:px-6 text-center bg-[#f8f6f3]">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <span className="text-[#9E7444] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
          Servicios Destacados
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Nuestras Especialidades
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          En Dental Studios cuidamos cada detalle de tu salud bucodental con tecnología de punta y especialistas dedicadas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((s, index) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C69C6D]/30 flex flex-col h-full group"
          >
            <div className="h-48 sm:h-52 overflow-hidden relative">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2.5">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/servicios"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-[#C69C6D] text-[#9E7444] font-bold rounded-xl hover:bg-[#C69C6D] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Ver todos los tratamientos y servicios
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}