import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/contact-form';

const contactDetails = [
  { icon: <Mail className="h-5 w-5 text-primary" />, text: "almeida99122@gmail.com" },
  { icon: <Phone className="h-5 w-5 text-primary" />, text: "(92) 99122-8973" },
  { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Manaus, AM – Brasil" },
  { icon: <Clock className="h-5 w-5 text-primary" />, text: "Seg a Sex, 8h às 18h (GMT-4)" },
];

const offerings = [
  "Resposta rápida",
  "Disponível para vagas em tempo integral",
  "Trabalho por contrato (PJ)",
  "Projetos freelance",
  "Consultoria em backend e arquitetura",
];

export default function ContactSection() {
    return (
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-2 mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Entre em Contato</h2>
                     <p className="max-w-[900px] mx-auto text-foreground/80 md:text-xl/relaxed">
                        Pronto para conversar sobre seu próximo projeto backend?
                     </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            {contactDetails.map((detail, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    {detail.icon}
                                    <span className="text-foreground/90">{detail.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 p-6 rounded-lg bg-background border">
                            <ul className="space-y-3">
                                {offerings.map((offer, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span className="text-foreground/90">{offer}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
