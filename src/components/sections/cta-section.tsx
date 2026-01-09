import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">
            Pronto para dar vida às suas ideias?
          </h2>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Estou atualmente disponível para trabalhos, projetos freelance e oportunidades em tempo integral focadas em backend e arquitetura de servidores.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Button asChild type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contato">
              Entre em contato
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
