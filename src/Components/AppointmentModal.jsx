import { useState, useEffect } from "react";
import { X, Calendar, User, Phone, FileText, CheckCircle, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    motivo: "Revisión general / Valoración",
    fecha: "",
    hora: "09:00 AM",
    nota: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "50431448579";
    
    // Mensaje limpio y elegante sin caracteres extraños
    const message = 
      `Hola Dental Studios, deseo agendar una consulta:\n\n` +
      `* Nombre: ${formData.nombre.trim()}\n` +
      `* Telefono: ${formData.telefono.trim()}\n` +
      `* Motivo: ${formData.motivo}\n` +
      `* Fecha preferida: ${formData.fecha || "Lo antes posible"}\n` +
      `* Hora preferida: ${formData.hora || "Horario a convenir"}\n` +
      `* Nota o Alergias: ${formData.nota.trim() || "Sin observaciones adicionales"}\n\n` +
      `Quedo a la espera de su confirmacion. ¡Muchas gracias!`;

    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  const timeOptions = [
    "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
    "04:30 PM", "05:00 PM"
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative border border-[#C69C6D]/40 transform transition-all duration-300">
        {/* Header del Modal */}
        <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-[#1f2a44] p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={22} />
          </button>
          
          <span className="text-[#C69C6D] text-xs uppercase tracking-widest font-semibold block mb-1">
            Atención Personalizada
          </span>
          
          <h2 id="modal-title" className="text-2xl font-bold text-white tracking-wide">
            Agenda tu Consulta
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm mt-1">
            Completa tus datos y coordinaremos tu cita directamente en Dental Studios.
          </p>
        </div>

        {/* Contenido del Formulario */}
        <div className="p-6 sm:p-7 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800">¡Redirigiendo a WhatsApp!</h3>
              <p className="text-gray-600 text-sm mt-2">
                Estamos abriendo tu chat con el equipo de Dental Studios para confirmar tu horario.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    required
                    placeholder="Ej. María Elena Pérez"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C69C6D] focus:border-transparent outline-none text-sm text-gray-800 transition-all"
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Teléfono / WhatsApp <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +504 9876-5432"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C69C6D] focus:border-transparent outline-none text-sm text-gray-800 transition-all"
                  />
                </div>
              </div>

              {/* Motivo General y Amigable */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  ¿En qué te podemos ayudar?
                </label>
                <select
                  value={formData.motivo}
                  onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C69C6D] outline-none text-sm text-gray-800 bg-white transition-all"
                >
                  <option value="Revisión general / Valoración">Revisión general / Valoración</option>
                  <option value="Tengo dolor o molestia dental">Tengo dolor o molestia dental</option>
                  <option value="Limpieza dental / Profilaxis">Limpieza dental / Profilaxis</option>
                  <option value="Quiero mejorar mi sonrisa o alinear mis dientes">Quiero mejorar mi sonrisa o alinear mis dientes</option>
                  <option value="Me falta una pieza dental / Implante">Me falta una pieza dental / Implante</option>
                  <option value="Otro motivo / No estoy seguro">Otro motivo / No estoy seguro</option>
                </select>
              </div>

              {/* Fecha y Hora */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Fecha Preferida
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="date"
                      value={formData.fecha}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C69C6D] outline-none text-sm text-gray-800 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Hora Preferida
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                    <select
                      value={formData.hora}
                      onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C69C6D] outline-none text-sm text-gray-800 bg-white transition-all"
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Nota / Alergias */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Alergias o Información Adicional (Opcional)
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                  <textarea
                    rows="2"
                    placeholder="Indícanos si tienes alergias a medicamentos (penicilina, anestesia), alguna enfermedad o molestia específica..."
                    value={formData.nota}
                    onChange={(e) => setFormData({ ...formData, nota: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C69C6D] outline-none text-sm text-gray-800 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Botón de Confirmación */}
              <button
                type="submit"
                className="w-full mt-3 flex items-center justify-center gap-2.5 bg-[#C69C6D] hover:bg-[#b88c5f] text-white py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg shadow-[#C69C6D]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                Confirmar y Enviar por WhatsApp
              </button>

              <p className="text-center text-gray-500 text-xs mt-2">
                Horario de atención: Lunes a Domingo de 8:30 a.m. a 5:30 p.m.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
