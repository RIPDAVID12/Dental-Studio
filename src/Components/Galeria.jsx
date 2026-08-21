import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const clinicPhotos = [
    {
      title: "Consultorios de Alta Especialidad",
      desc: "Equipamiento de última generación para procedimientos cómodos y precisos.",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Área de Atención y Diagnóstico",
      desc: "Espacios ergonómicos diseñados para una experiencia tranquila y sin estrés.",
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Recepción y Sala de Espera",
      desc: "Ambiente cálido, moderno y climatizado para recibirte como te mereces.",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Instrumental Quirúrgico y Bioseguridad",
      desc: "Estrictos estándares internacionales de higiene y esterilización médica.",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Unidades Dentales Ergonómicas",
      desc: "Sillones odontológicos confortables con tecnología de iluminación LED.",
      img: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      title: "Gabinete de Ortodoncia y Estética",
      desc: "Tecnología digital avanzada para el diseño y seguimiento de tu sonrisa.",
      img: "https://images.pexels.com/photos/4269490/pexels-photo-4269490.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 text-center bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <span className="text-[#9E7444] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
          Nuestras Instalaciones
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Conoce Dental Studios
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Espacios modernos, pulcros y acondicionados con tecnología de punta para cuidar tu salud bucal.
        </p>
      </motion.div>

      {/* Contenedor del Carrusel con Controles de Navegación */}
      <div className="relative max-w-6xl mx-auto px-2 sm:px-8">
        {/* Botón Anterior */}
        <button
          id="gallery-prev"
          aria-label="Foto anterior"
          className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg items-center justify-center border border-[#C69C6D]/40 transition-all hover:scale-110 cursor-pointer"
        >
          <ChevronLeft size={24} className="text-[#9E7444]" />
        </button>

        {/* Botón Siguiente */}
        <button
          id="gallery-next"
          aria-label="Siguiente foto"
          className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg items-center justify-center border border-[#C69C6D]/40 transition-all hover:scale-110 cursor-pointer"
        >
          <ChevronRight size={24} className="text-[#9E7444]" />
        </button>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: "#gallery-prev",
            nextEl: "#gallery-next",
          }}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-14"
        >
          {clinicPhotos.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[320px] sm:h-[360px] overflow-hidden rounded-2xl shadow-md border border-[#C69C6D]/30 flex flex-col bg-white text-left group">
                <div className="h-[230px] sm:h-[250px] overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 flex-grow flex flex-col justify-center bg-[#fcfaf7]">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}