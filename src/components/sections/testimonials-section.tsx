import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Ana Silva',
        title: 'CTO @ InovaTech',
        quote: 'A qualidade técnica e o comprometimento do Gabriel foram essenciais para o sucesso da nossa nova API. A comunicação foi clara e ele sempre entregou além do esperado.',
        avatar: 'AS'
    },
    {
        name: 'Carlos Mendes',
        title: 'Product Manager @ Soluções Digitais',
        quote: 'Trabalhar com o Gabriel é sinônimo de tranquilidade. Ele entende rapidamente os requisitos de negócio e os traduz em soluções de backend robustas e performáticas. Recomendo fortemente.',
        avatar: 'CM'
    },
];

export default function TestimonialsSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-2 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Depoimentos</h2>
                    <p className="max-w-[900px] mx-auto text-foreground/80 md:text-xl/relaxed">
                        O que clientes e parceiros dizem sobre o meu trabalho.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarFallback className="bg-secondary text-secondary-foreground">{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-foreground/80">{testimonial.title}</p>
                                    </div>
                                    <div className="ml-auto flex gap-0.5">
                                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent stroke-accent" />)}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
