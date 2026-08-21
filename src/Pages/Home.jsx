import { useState } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutPreview from "../Components/AboutPreview";
import Specialties from "../Components/Especialidades";
import Doctors from "../Components/Doctores";
import BeforeAfter from "../Components/BeforeAfter";
import Gallery from "../Components/Galeria";
import Contacto from "../Components/Contacto";
import Social from "../Components/Social";
import Footer from "../Components/Footer";
import WhatsAppButton from "../Components/WhatsAppButton";
import AppointmentModal from "../Components/AppointmentModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <main>
        <Hero onOpenModal={openModal} />
        <AboutPreview />
        <Specialties />
        <Doctors />
        <BeforeAfter />
        <Gallery />
        <Contacto />
        <Social />
      </main>
      <Footer />
      <WhatsAppButton />
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}