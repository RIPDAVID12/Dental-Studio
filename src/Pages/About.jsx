import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WhatsAppButton from "../Components/WhatsAppButton";
import { Sparkles, Award, HeartHandshake, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  const stats = [
    { value: "10+", label: "Años de Experiencia" },
    { value: "5,000+", label: "Pacientes Satisfechos" },
    { value: "99%", label: "Casos de Éxito" },
    { value: "15+", label: "Especialidades Clínicas" },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Excelencia y Precisión",
      desc: "Utilizamos instrumental y tecnología odontológica de última generación para diagnósticos certeros.",
    },
    {
      icon: HeartHandshake,
      title: "Trato Humano y Empático",
      desc: "Diseñamos un ambiente libre de estrés donde tu comodidad y bienestar son nuestra prioridad.",
    },
    {
      icon: ShieldCheck,
      title: "Bioseguridad y Confianza",
      desc: "Cumplimos con los más estrictos estándares internacionales de higiene y esterilización.",
    },
    {
      icon: Award,
      title: "Especialistas Certificadas",
      desc: "Un equipo multidisciplinario en constante actualización clínica para brindarte el mejor resultado.",
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero About */}
        <section className="relative bg-gradient-to-b from-[#f8f6f3] to-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C69C6D]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#1f2a44]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C69C6D]/15 text-[#9E7444] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} className="text-[#9E7444]" />
              Nuestra Filosofía
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Cuidamos tu sonrisa con <br className="hidden sm:inline" />
              <span className="text-[#9E7444]">pasión, arte y excelencia</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              En <strong>Dental Studios</strong> combinamos tecnología de vanguardia con un trato humano y cercano, para que cada visita sea una experiencia confortable y transformadora.
            </p>
          </div>
        </section>

        {/* Historia y Misión */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-[#9E7444] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
                Nuestra Historia
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-snug">
                Nacimos para transformar la odontología moderna
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                <strong>Dental Studios</strong> nace con la visión de ofrecer una odontología integral de calidad superior, donde la salud bucodental y la estética se unen de forma natural.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Creemos firmemente que una sonrisa saludable no solo mejora la apariencia, sino que devuelve la confianza, la seguridad y el bienestar integral de cada paciente que confía en nuestras manos.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-1 w-12 bg-[#C69C6D] rounded-full" />
                <p className="text-[#9E7444] font-bold text-sm">
                  Tu sonrisa, nuestra mayor vocación
                </p>
              </div>
            </div>

            {/* Tarjeta de Misión */}
            <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-[#1f2a44] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-[#C69C6D]/30">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#C69C6D]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="text-[#C69C6D] text-5xl mb-3 font-serif leading-none">
                  “
                </div>

                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-light mb-6">
                  Transformar vidas a través de sonrisas saludables y radiantes, brindando diagnósticos honestos, tecnología avanzada y el calor humano que mereces.
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C69C6D]"></div>
                  <p className="text-[#C69C6D] font-bold text-xs sm:text-sm tracking-widest uppercase">
                    Misión Dental Studios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares / Valores */}
        <section className="py-16 sm:py-20 bg-[#f8f6f3] px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-[#9E7444] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
                ¿Por Qué Elegirnos?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Los Pilares de Dental Studios
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => {
                const IconComp = v.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-7 rounded-2xl shadow-sm border border-[#C69C6D]/20 hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#C69C6D]/15 text-[#9E7444] flex items-center justify-center mb-5">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="bg-white py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-[#9E7444] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
                En Números
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Resultados que nos Respaldan
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#fcfaf7] rounded-2xl p-6 text-center shadow-sm border border-[#C69C6D]/20 hover:shadow-md transition-shadow"
                >
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#9E7444] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-700 text-xs sm:text-sm font-semibold leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 text-center bg-gradient-to-r from-gray-950 via-gray-900 to-[#1f2a44] text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              ¿Listo para transformar tu sonrisa?
            </h2>

            <p className="text-gray-300 mb-8 text-base sm:text-lg">
              Comunícate con nuestras especialistas en Dental Studios y da el primer paso hacia una salud bucal impecable.
            </p>

            <a
              href="https://wa.me/50431448579?text=Hola%20Dental%20Studios%2C%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-9 py-4 rounded-xl transition-all duration-300 shadow-xl hover:scale-105"
            >
              <FaWhatsapp size={20} />
              Hablar con un Especialista por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}