import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <p className="text-sm">
          © {currentYear} Gabriel Galvim. Todos os direitos reservados.
        </p>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="https://github.com/Gabrielgalvimde" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="https://www.linkedin.com/in/gabrielgalvim" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
               <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
