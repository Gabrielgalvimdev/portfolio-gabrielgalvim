import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight, BrainCircuit, DatabaseZap, Code, TestTube, Rocket } from 'lucide-react';

const projects = [
  { name: "Sistema de Gerenciamento de Tarefas", description: "API para um sistema Kanban pessoal.", technologies: ["Flask", "SQLAlchemy", "JWT"], link: "https://github.com/Gabrielgalvimde" },
  { name: "Real-time Chat Application", description: "Aplicação de chat em tempo real com WebSockets.", technologies: ["Node.js", "Socket.IO", "Express"], link: "https://github.com/Gabrielgalvimde" },
  { name: "API de Análise de Dados", description: "Serviço para processar e expor grandes volumes de dados.", technologies: ["Java", "Spring Boot", "Kafka"], link: "https://github.com/Gabrielgalvimde" },
  { name: "URL Shortener Service", description: "Microsserviço para encurtamento de URLs.", technologies: ["Go", "Redis", "Docker"], link: "https://github.com/Gabrielgalvimde" },
];

const devProcess = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "1. Requisitos e Arquitetura",
    description: "Compreensão profunda do problema, definição de escopo e desenho da arquitetura ideal para a solução.",
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: "2. Modelagem de Dados e API",
    description: "Estruturação do banco de dados e desenho dos contratos da API (REST, GraphQL) focando em clareza e eficiência.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "3. Implementação",
    description: "Desenvolvimento do código seguindo as melhores práticas, como Clean Code e SOLID, para garantir um software manutenível.",
  },
  {
    icon: <TestTube className="h-8 w-8 text-primary" />,
    title: "4. Testes e Qualidade",
    description: "Criação de testes unitários e de integração para assegurar a confiabilidade e a robustez da aplicação.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "5. Deploy e Monitoramento",
    description: "Automatização do deploy (CI/CD) e configuração de ferramentas de monitoramento para garantir a saúde do sistema em produção.",
  },
];


export default function FullProjectsSection() {
    return (
        <section id="projetos-completos" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="space-y-16">
                    <div>
                      <div className="text-center space-y-2 mb-12">
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Mais Projetos</h2>
                          <p className="max-w-[900px] mx-auto text-foreground/80 md:text-xl/relaxed">
                            Uma visão geral de outros projetos em que trabalhei.
                          </p>
                      </div>
                      <div className="border rounded-lg overflow-hidden">
                          <Table>
                              <TableHeader>
                                  <TableRow>
                                      <TableHead>Projeto</TableHead>
                                      <TableHead className="hidden md:table-cell">Descrição</TableHead>
                                      <TableHead className="hidden sm:table-cell">Tecnologias</TableHead>
                                      <TableHead className="text-right">Link</TableHead>
                                  </TableRow>
                              </TableHeader>
                              <TableBody>
                                  {projects.map((project) => (
                                      <TableRow key={project.name}>
                                          <TableCell className="font-medium">{project.name}</TableCell>
                                          <TableCell className="hidden md:table-cell text-foreground/80">{project.description}</TableCell>
                                          <TableCell className="hidden sm:table-cell">
                                              <div className="flex flex-wrap gap-1">
                                                  {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                                              </div>
                                          </TableCell>
                                          <TableCell className="text-right">
                                              <Button asChild variant="ghost" size="sm">
                                                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                                      GitHub <ArrowRight className="ml-2 h-4 w-4" />
                                                  </Link>
                                              </Button>
                                          </TableCell>
                                      </TableRow>
                                  ))}
                              </TableBody>
                          </Table>
                      </div>
                    </div>
                    
                    <div className="space-y-12">
                        <div className="text-center">
                           <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Meu Processo de Desenvolvimento</h3>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                            {devProcess.map((step) => (
                                <div key={step.title} className="flex flex-col items-center text-center gap-2">
                                    {step.icon}
                                    <h4 className="font-bold text-lg">{step.title}</h4>
                                    <p className="text-sm text-foreground/80">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
