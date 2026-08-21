import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Imágenes de alta resolución de estética dental / diseño de sonrisa
  const beforeImage = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80";
  const afterImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80";

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#fcfaf7] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C69C6D]/15 text-[#9E7444] font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles size={14} className="text-[#9E7444]" />
            Resultados Reales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Transformaciones de Sonrisa
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Descubre el impacto de un diseño de sonrisa y ortodoncia con la tecnología y precisión de Dental Studios.
          </p>
        </motion.div>

        {/* Comparador Interactivo */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[320px] sm:h-[450px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border-2 border-[#C69C6D]/30"
          >
            {/* Imagen DESPUÉS (Fondo completo) */}
            <img
              src={afterImage}
              alt="Sonrisa Después del Tratamiento - Dental Studios"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-gray-950/80 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md pointer-events-none">
              Después
            </div>

            {/* Imagen ANTES (Recortada por clip-path según slider) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <img
                src={beforeImage}
                alt="Sonrisa Antes del Tratamiento - Dental Studios"
                className="absolute inset-0 w-full h-full object-cover filter contrast-90"
              />
              <div className="absolute top-4 left-4 bg-gray-950/80 backdrop-blur-md text-[#C69C6D] text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                Antes
              </div>
            </div>

            {/* Barra Divisoria Deslizante */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] cursor-ew-resize z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Círculo con flechas de arrastre */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white text-gray-800 rounded-full shadow-xl flex items-center justify-center border-2 border-[#C69C6D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M8 9l-4 3 4 3m8-6l4 3-4 3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 flex items-center justify-center gap-1.5">
            <span>↔</span> Desliza la barra hacia la izquierda o derecha para ver la comparativa
          </p>
        </div>
      </div>
    </section>
  );
}
