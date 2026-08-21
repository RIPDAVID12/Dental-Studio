import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logoPath = `${import.meta.env.BASE_URL}IMG/PNG dorado_Mesa de trabajo 1.png`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", target: "inicio", path: "/" },
    { label: "Quiénes Somos", target: "nosotros", path: "/about" },
    { label: "Tratamientos", target: "tratamientos", path: "/servicios" },
    { label: "Equipo", target: "equipo", path: "/" },
    { label: "Contacto", target: "contacto", path: "/" },
  ];

  const handleNavClick = (item) => {
    setIsOpen(false);
    
    // Si estamos en una página distinta y el destino está en Home
    if (location.pathname !== "/") {
      if (item.path !== "/" && item.path === location.pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (item.path !== "/" && item.path !== location.pathname) {
        navigate(item.path);
        return;
      }
      // Si quiere ir a una sección de Home
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(item.target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 150);
    } else {
      // Estamos en Home
      const el = document.getElementById(item.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#C69C6D]/30 py-2.5"
          : "bg-white shadow-sm border-b-2 border-[#C69C6D] py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick({ target: "inicio", path: "/" })}
          className="focus:outline-none flex items-center gap-2 text-left"
          aria-label="Dental Studios Inicio"
        >
          <img
            src={logoPath}
            alt="Dental Studios Logo"
            className={`transition-all duration-300 object-contain ${
              scrolled ? "h-[48px] sm:h-[56px]" : "h-[58px] sm:h-[70px]"
            } hover:scale-105`}
          />
        </button>

        {/* Desktop Navigation (Limpia y Minimalista) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="relative text-gray-800 font-semibold text-sm lg:text-base tracking-wide
              transition-colors duration-300 hover:text-[#9E7444]
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
              after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[#C69C6D]
              after:transition-all after:duration-300
              hover:after:w-full cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-800 p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[380px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        } bg-white border-t border-[#C69C6D]/30 shadow-xl`}
      >
        <div className="flex flex-col items-center gap-4 px-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-gray-800 font-semibold text-base hover:text-[#9E7444] transition-colors py-1.5"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}