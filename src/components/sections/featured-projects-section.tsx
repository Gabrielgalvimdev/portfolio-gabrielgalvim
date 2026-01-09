import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'proj1',
    name: 'API de E-commerce',
    stack: ['Node.js', 'NestJS', 'PostgreSQL'],
    description: 'Uma API robusta para uma plataforma de e-commerce, com funcionalidades de carrinho, pagamento e gerenciamento de produtos.',
    link: 'https://github.com/Gabrielgalvimde'
  },
  {
    id: 'proj2',
    name: 'Agendador de Mídia Social',
    stack: ['Python', 'Django', 'Celery', 'Redis'],
    description: 'Sistema para agendamento de postagens em redes sociais, utilizando filas e processamento assíncrono para alta performance.',
    link: 'https://github.com/Gabrielgalvimde'
  },
  {
    id: 'proj3',
    name: 'Microsserviço de Autenticação',
    stack: ['Go', 'gRPC', 'JWT', 'Docker'],
    description: 'Serviço de autenticação e autorização de alta performance, projetado para ser integrado em arquiteturas de microsserviços.',
    link: 'https://github.com/Gabrielgalvimde'
  }
];

export default function FeaturedProjectsSection() {
  return (
    <section id="projetos" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Projetos em Destaque</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Alguns dos projetos backend que desenvolvi para resolver problemas reais com desempenho e qualidade.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((project) => {
            const image = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-primary/20">
                <CardHeader className="p-0">
                  <div className="relative w-full aspect-video">
                    {image && (
                      <Image 
                        src={image.imageUrl} 
                        alt={project.name} 
                        fill 
                        className="object-cover rounded-t-lg" 
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <CardTitle className="font-headline mb-2">{project.name}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                  <p className="text-sm text-foreground/80">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full hover:bg-accent/10 hover:text-accent-foreground border-accent text-accent">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver detalhes <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
