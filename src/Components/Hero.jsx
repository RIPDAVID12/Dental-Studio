import { Calendar } from "lucide-react";

export default function Hero({ onOpenModal }) {
  const videoPath = `${import.meta.env.BASE_URL}IMG/142528-780232204.mp4`;
  const posterPath = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80";

  const handleScrollToTreatments = (e) => {
    e.preventDefault();
    const el = document.getElementById("tratamientos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:h-screen overflow-hidden mt-[58px] sm:mt-[70px]" id="inicio">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterPath}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoPath} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 backdrop-brightness-90"></div>

      <div className="relative z-10 h-full min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 py-12">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C69C6D]/40 text-[#f5d9b8] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
          Clínica Odontológica Especializada
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-[#C69C6D] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] tracking-wider">
          DENTAL STUDIOS
        </h1>

        <p className="text-base sm:text-xl md:text-2xl font-light mt-4 sm:mt-6 mb-8 sm:mb-10 max-w-[720px] leading-relaxed text-gray-100 drop-shadow-md">
          Excelencia y Arte en Cada Sonrisa. Transformamos tu salud dental con tecnología de vanguardia y especialistas de primer nivel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none justify-center">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#C69C6D] text-white rounded-xl tracking-wide font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#b88c5f] shadow-xl shadow-[#C69C6D]/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar size={18} />
            Agendar consulta
          </button>
          
          <a
            href="#tratamientos"
            onClick={handleScrollToTreatments}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/80 text-white rounded-xl tracking-wide font-semibold transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm text-center"
          >
            Conocer tratamientos
          </a>
        </div>
      </div>
    </section>
  );
}