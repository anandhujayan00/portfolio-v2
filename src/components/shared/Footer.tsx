import Container from "./Container";
import { data } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { settings, social } = data;

  return (
    <footer className="py-12 border-t border-border bg-background/50 backdrop-blur-sm">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center">
            <Image 
                src={settings.branding.logo} 
                alt={settings.branding.siteName} 
                width={40} 
                height={40} 
                className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {settings.branding.siteName}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center items-center gap-6">
          {Object.entries(social).map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize"
            >
              {label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
