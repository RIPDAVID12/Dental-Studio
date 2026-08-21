import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Social() {
  return (
    <section className="py-16 text-center border-t border-gray-100 bg-white px-4">
      <span className="text-[#9E7444] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
        Comunidad Dental Studios
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Síguenos en nuestras redes sociales
      </h2>
      <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
        Conoce casos de éxito, consejos de salud bucal y promociones exclusivas en nuestras cuentas oficiales.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="https://www.instagram.com/dentalstudioscenter?igsh=MXg3ZjkydzY2cTY5Zw=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 font-medium text-sm sm:text-base"
        >
          <FaInstagram className="text-xl" />
          Instagram
        </a>

        <a
          href="https://www.facebook.com/share/1KehbdmTeq/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#1877F2] hover:bg-[#0d65d9] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 font-medium text-sm sm:text-base"
        >
          <FaFacebookF className="text-lg" />
          Facebook
        </a>

        <a
          href="https://www.tiktok.com/@dentalstudioscenter?_r=1&_t=ZS-98lxhkYXYjF"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 font-medium text-sm sm:text-base"
        >
          <FaTiktok className="text-lg" />
          TikTok
        </a>
      </div>
    </section>
  );
}