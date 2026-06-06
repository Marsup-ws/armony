import ContactForm from "@/components/ContactForm";

export default function NousContacterPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="font-display text-5xl text-[#FFB400] tracking-widest red-glow text-center mb-3">
          Nous Contacter
        </h1>
        <p className="text-[#ffd8b6] text-center mb-10 font-body text-sm">
          Envoyez-nous un message, nous vous répondrons dès que possible.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}