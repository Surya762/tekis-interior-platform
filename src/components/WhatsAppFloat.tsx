import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/916301780982" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl flex items-center justify-center transition-all duration-300"
    >
      <FaWhatsapp size={22} />
    </a>
  );
};

export default WhatsAppFloat;