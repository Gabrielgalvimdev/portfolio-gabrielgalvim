import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: 'Você trabalha apenas como backend?',
        answer: 'Meu foco principal e especialidade é o backend, mas tenho conhecimento em frontend e sou capaz de atuar em projetos full-stack, especialmente com frameworks modernos. Minha paixão, no entanto, está na arquitetura de servidores e APIs.'
    },
    {
        question: 'Quais tecnologias você mais utiliza no dia a dia?',
        answer: 'No meu dia a dia, trabalho principalmente com Node.js (NestJS) e Python (Django) para construir APIs. Para bancos de dados, tenho vasta experiência com PostgreSQL e MySQL. Também utilizo Docker extensivamente para criar ambientes de desenvolvimento consistentes.'
    },
    {
        question: 'Você participa do desenho de arquitetura ou só implementa?',
        answer: 'Eu adoro participar ativamente do processo de desenho da arquitetura. Acredito que uma boa base arquitetural é a chave para um projeto de sucesso. Gosto de discutir soluções, escolher as tecnologias certas e planejar a escalabilidade desde o início.'
    },
    {
        question: 'Como funciona o processo para iniciar um projeto?',
        answer: 'O primeiro passo é uma conversa para entendermos seus objetivos e requisitos. A partir daí, elaboramos um plano de projeto, definimos a arquitetura e as entregas. Prezo pela comunicação constante durante todo o processo.'
    },
    {
        question: 'Você emite nota fiscal (NF)?',
        answer: 'Sim, como pessoa jurídica (PJ), emito nota fiscal para todos os serviços prestados, seja para projetos freelance, consultoria ou contratos de longo prazo.'
    },
    {
        question: 'Você trabalha com times internacionais / remoto?',
        answer: 'Sim, tenho total disponibilidade e experiência para trabalhar remotamente, inclusive com equipes internacionais. Minha comunicação é clara e sou proficiente em ferramentas de colaboração online.'
    }
];

export default function FaqSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-2 mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Perguntas Frequentes</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                                  {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-foreground/80">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
