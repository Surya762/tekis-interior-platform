import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_NUMBER = "916301780982";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const defaultForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const location = useLocation();

  const [form, setForm] = useState<FormData>(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auto WhatsApp trigger from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("whatsapp") === "true") {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20book%20a%20consultation`,
        "_blank"
      );
    }
  }, [location]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1️⃣ Save to Supabase
    const { error } = await supabase.from("enquiries").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      setLoading(false);
      alert("Something went wrong. Try again.");
      return;
    }

    // 2️⃣ Open WhatsApp
    const whatsappMessage = `Hi, I'm ${form.name}%0A📞 ${form.phone}%0A📧 ${form.email}%0A🛠 Service: ${form.service}%0A📝 ${form.message}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
      "_blank"
    );

    // 3️⃣ Success UI
    setLoading(false);
    setSubmitted(true);
    setForm(defaultForm);
  };

  const isValid =
    form.name && form.email && form.phone && form.message;

  return (
    <div className="min-h-screen bg-white flex flex-col pt-20">
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-14">
        {submitted ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-3">Message Sent!</h2>
            <p className="text-gray-500 mb-6">
              We’ll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-gray-600 underline"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-xl font-semibold mb-4">
              Send an Enquiry
            </h2>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border p-3 rounded"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="w-full border p-3 rounded"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            >
              <option value="">Select Service</option>
              <option value="Full Home">Full Home Interior</option>
              <option value="Kitchen">Modular Kitchen</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Living Room">Living Room</option>
              <option value="Office">Office</option>
              <option value="Consultation">Design Consultation</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              className="w-full border p-3 rounded"
              rows={4}
            />

            <button
              type="submit"
              disabled={!isValid || loading}
              className="w-full bg-black text-white py-3 rounded"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}