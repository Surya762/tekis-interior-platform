import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_NUMBER = "916301780982";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Tekis Interiors! I'm interested in your interior design services. Could you please share more details?"
);
const EMAIL = "tekisinteriorscontracts@gmail.com";
const EMAIL_SUBJECT = encodeURIComponent("Interior Design Enquiry – Tekis Interiors");
const EMAIL_BODY = encodeURIComponent(
  "Hello Rajiv,\n\nI'm interested in your interior design services.\n\nPlease share more details.\n\nThank you."
);

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
  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const shouldOpenWhatsApp = params.get("whatsapp");

  if (shouldOpenWhatsApp === "true") {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20book%20a%20consultation`;
    window.open(url, "_blank");
  }
}, [location]);

  const [form, setForm] = useState<FormData>(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  // 🔹 Save to Supabase
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
    alert("Failed to send enquiry");
    return;
  }

  // 🔹 WhatsApp message with user details
  const whatsappMessage = `Hi, I'm ${form.name}%0A📞 ${form.phone}%0A📧 ${form.email}%0A🛠 Service: ${form.service}%0A📝 ${form.message}`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
    "_blank"
  );

  // 🔹 Success UI (same as your design)
  setLoading(false);
  setSubmitted(true);
  setForm(defaultForm);
};
    // Replace this with your actual API/email submission logic
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(defaultForm);
    }, 1200);
  

  const isValid = form.name && form.email && form.phone && form.message;

  return (
    <div className="min-h-screen bg-white flex flex-col pt-20">

      {/* ── Hero ── */}
      <section className="bg-gray-50 border-b border-gray-100 py-14 px-4 text-center">
        <p className="text-xs tracking-widest uppercase text-amber-600 font-medium mb-2">
          Get in touch
        </p>
        <h1 className="text-4xl font-semibold text-gray-900 mb-3">Contact Us</h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Reach out directly via WhatsApp or Email — or fill the form below and
          we'll get back to you within 24 hours.
        </p>

        {/* ── Quick Contact Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] active:scale-[0.98] transition-all text-white font-medium text-sm w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
            className="flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gray-900 hover:bg-gray-800 active:scale-[0.98] transition-all text-white font-medium text-sm w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Send an Email
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mt-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or fill the form below</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: Info + Map */}
          <div className="space-y-8">
            <div className="space-y-5">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+916301780982" className="text-gray-800 font-medium hover:text-amber-600 transition-colors">+91 63017 80982</a>
                  <br />
                  <a href="tel:+919505045084" className="text-gray-500 text-sm hover:text-amber-600 transition-colors">+91 95050 45084</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-gray-800 font-medium hover:text-amber-600 transition-colors break-all">
                    tekisinteriorscontracts@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Office Address</p>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    Sri Sai Apartment, 4th Floor 402,<br />
                    Bhagyanagar Phase 3, Sreenivasanagar,<br />
                    HMT Hills, KPHB, Hyderabad – 500085
                  </p>
                  <p className="text-gray-400 text-xs mt-1">Mon–Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>

              {/* Person */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Contact Person</p>
                  <p className="text-gray-800 font-medium">Rajiv Teki</p>
                  <p className="text-gray-500 text-sm">Managing Director</p>
                </div>
              </div>

            </div>

            {/* Google Map — KPHB Hyderabad */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 lg:h-72">
              <iframe
                title="Tekis Interiors – KPHB Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0661046371397!2d78.39126197493755!3d17.504357583402903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9149aa08dde9%3A0xce110751a93a906f!2sTeki&#39;s%20Interior%20and%20Contracts!5e0!3m2!1sen!2sin!4v1775732614397!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-6 max-w-xs">
                  Thank you for reaching out. Rajiv will get back to you within 24 hours.
                </p>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-medium hover:bg-[#1ebe5d] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Also ping on WhatsApp
                  </a>
                  <button onClick={() => setSubmitted(false)} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-5">Send an enquiry</p>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 text-gray-800 placeholder-gray-300 transition-colors" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 text-gray-800 placeholder-gray-300 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 text-gray-800 placeholder-gray-300 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Service Interested In</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 text-gray-700 transition-colors bg-white">
                    <option value="">Select a service</option>
                    <option value="full-home">Full Home Interior</option>
                    <option value="modular-kitchen">Modular Kitchen</option>
                    <option value="bedroom">Bedroom Design</option>
                    <option value="living-room">Living Room Design</option>
                    <option value="office">Office Interior</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project — home type, rooms, budget range, timeline..." required rows={5}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 text-gray-800 placeholder-gray-300 transition-colors resize-none" />
                </div>

                <button type="submit" disabled={!isValid || loading}
                  className="w-full py-3.5 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 active:scale-[0.99] transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : "Send Enquiry"}
                </button>

                <p className="text-xs text-gray-400 text-center">We typically respond within 24 hours on business days.</p>
              </form>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}