import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phone = "916301780982";

  const message = `Hi Tekis Interiors! 🏠
I'd like an interior design estimate. Please share more details.`;

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition flex items-center justify-center">
        <MessageCircle size={24} />
      </div>
    </a>
  );
}