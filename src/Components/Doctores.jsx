import { motion } from "framer-motion";

export default function Doctors() {
  const doctors = [
    {
      name: "Dra. Joseliyn Quintero",
      specialty: "Periodoncista e Implantóloga",
      img: `${import.meta.env.BASE_URL}IMG/Joseliyn.JPG`,
      desc: "Especialista en salud periodontal, regeneración ósea e implantes dentales de alta precisión.",
    },
    {
      name: "Dra. Limairy Franceli Ruiz",
      specialty: "Ortodoncista",
      img: `${import.meta.env.BASE_URL}IMG/Limairy.JPG`,
      desc: "Experta en armonización oclusal, ortodoncia invisible y brackets estéticos para niños y adultos.",
    },
    {
      name: "Dra. Laura Osorto",
      specialty: "Odontóloga General",
      img: `${import.meta.env.BASE_URL}IMG/Laura.JPG`,
      desc: "Especializada en odontología integral, estética dental preventiva y rehabilitación oral.",
    },
  ];

  return (
    <section id="equipo" className="py-16 sm:py-24 px-4 sm:px-6 text-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <span className="text-[#9E7444] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
          Especialistas Certificadas
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Nuestro Equipo Médico
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          En Dental Studios contamos con profesionales apasionadas y altamente capacitadas para brindarte la mejor experiencia clínica.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#fcfaf7] p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C69C6D]/30 flex flex-col items-center justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 sm:w-40 sm:h-40 mb-5 rounded-full overflow-hidden border-4 border-[#C69C6D] shadow-lg relative">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center">
                {doctor.name}
              </h3>
              <p className="text-sm text-[#9E7444] font-semibold mt-1 text-center">
                {doctor.specialty}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed text-center">
                {doctor.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}