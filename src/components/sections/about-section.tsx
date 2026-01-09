import { Code, Database, GitMerge, Terminal, TestTube, Network, ShieldCheck, Layers, Server, DraftingCompass, GitBranch, Cloud, Package, Briefcase, Bot, CodeXml, GitCommit } from 'lucide-react';

const skills = [
  { name: 'Node.js', icon: <Package className="h-8 w-8 text-foreground" /> },
  { name: 'NestJS', icon: <Briefcase className="h-8 w-8 text-foreground" /> },
  { name: 'Python', icon: <Bot className="h-8 w-8 text-foreground" /> },
  { name: 'Django', icon: <Server className="h-8 w-8 text-foreground" /> },
  { name: 'Go', icon: <DraftingCompass className="h-8 w-8 text-foreground" /> },
  { name: 'Java', icon: <Code className="h-8 w-8 text-foreground" /> },
  { name: 'PostgreSQL', icon: <Database className="h-8 w-8 text-foreground" /> },
  { name: 'Docker', icon: <Package className="h-8 w-8 text-foreground" /> },
  { name: 'Kubernetes', icon: <Layers className="h-8 w-8 text-foreground" /> },
  { name: 'REST & gRPC', icon: <Network className="h-8 w-8 text-foreground" /> },
  { name: 'GraphQL', icon: <GitBranch className="h-8 w-8 text-foreground" /> },
  { name: 'TDD', icon: <TestTube className="h-8 w-8 text-foreground" /> },
  { name: 'Git', icon: <GitCommit className="h-8 w-8 text-foreground" /> },
  { name: 'CI/CD', icon: <Cloud className="h-8 w-8 text-foreground" /> },
  { name: 'Clean Arch', icon: <ShieldCheck className="h-8 w-8 text-foreground" /> },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              Desenvolvedor apaixonado e solucionador de problemas
            </h2>
            <div className="space-y-4 text-foreground/80 md:text-lg/relaxed">
              <p>
                Olá, eu sou o Gabriel Galvim, desenvolvedor backend de Manaus/AM, apaixonado por construir APIs robustas, escaláveis e bem documentadas.
              </p>
              <p>
                Minha jornada na tecnologia começou com uma curiosidade insaciável sobre como a internet funcionava, o que me levou a um curso técnico em Redes de Computadores. Essa base me deu uma compreensão sólida da infraestrutura por trás das aplicações. Logo, minha paixão migrou da infraestrutura para o código que a utiliza, e encontrei no desenvolvimento backend o lugar perfeito para unir lógica, performance e resolução de problemas.
              </p>
              <p>
                Desde então, tenho me dedicado a aprofundar meus conhecimentos. Foco em criar não apenas código que funciona, mas soluções que sejam eficientes, seguras e fáceis de manter. Adoto práticas como TDD e Clean Architecture, e estou sempre explorando novas tecnologias para otimizar o desempenho e a escalabilidade dos sistemas que construo.
              </p>
               <p>
                Meu objetivo profissional é colaborar com equipes e empresas que valorizam a qualidade técnica e a inovação. Busco oportunidades desafiadoras que me permitam crescer, aprender continuamente e aplicar minha paixão por tecnologia para construir produtos digitais incríveis que impactam positivamente a vida das pessoas.
              </p>
            </div>
          </div>
          <div className="space-y-8 lg:col-span-2">
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-2xl font-bold font-headline mb-4">Habilidades Técnicas</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-center">
                {skills.map(skill => (
                  <div key={skill.name} className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg transition-colors hover:bg-secondary">
                    {skill.icon}
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-2xl font-bold font-headline mb-4">Educação e Cursos</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Educação</h4>
                  <p className="text-sm text-foreground/80">Técnico em Redes de Computadores – CETAM</p>
                </div>
                <div>
                  <h4 className="font-semibold">Cursos e Formações</h4>
                  <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
                    <li>Backend Development Masterclass (Node.js, SQL)</li>
                    <li>Advanced API Design with NestJS</li>
                    <li>Microservices com Go & gRPC</li>
                    <li>Cloud-Native Development on AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
