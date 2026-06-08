import { contactInfo } from "@/data/services";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
        target="_blank" rel="noreferrer"
        aria-label="WhatsApp us"
        className="group flex items-center gap-2 rounded-full bg-c-mint text-c-ink shadow-xl pl-4 pr-5 py-3 hover:scale-105 transition"
      >
        <MessageCircle size={20} />
        <span className="text-sm font-medium">WhatsApp</span>
      </a>
      <a
        href={`tel:${contactInfo.phone}`}
        aria-label="Call us"
        className="group flex items-center gap-2 rounded-full bg-c-coral text-c-ink shadow-xl pl-4 pr-5 py-3 hover:scale-105 transition"
      >
        <Phone size={20} />
        <span className="text-sm font-medium">Call Now</span>
      </a>
    </div>
  );
}
