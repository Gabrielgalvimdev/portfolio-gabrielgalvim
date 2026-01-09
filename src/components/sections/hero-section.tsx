import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import TypingAnimation from '@/components/typing-animation';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2070&auto=format&fit=crop"
          alt="Fundo de código de programação backend"
          fill
          className="object-cover"
          priority
          data-ai-hint="backend code"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="transform transition-all duration-700 ease-out opacity-0 translate-y-4 animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
              Gabriel Galvim
            </h1>
          </div>
          <div className="transform transition-all duration-700 ease-out opacity-0 translate-y-4 animate-fade-in-up animation-delay-200">
            <TypingAnimation text="Backend Developer" />
          </div>
          <div className="transform transition-all duration-700 ease-out opacity-0 translate-y-4 animate-fade-in-up animation-delay-400">
            <p className="max-w-[700px] text-foreground/80 md:text-xl mx-auto !mt-6">
              Transformando ideias em APIs escaláveis, seguras e prontas para produção.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 transform transition-all duration-700 ease-out opacity-0 translate-y-4 animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105">
              <Link href="#projetos">
                Ver meus trabalhos
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 transition-transform duration-300 hover:scale-105">
               <Link href="#contato">
                Entrar em contato
               </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
