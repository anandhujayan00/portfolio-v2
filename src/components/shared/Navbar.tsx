"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { data } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import Container from "./Container";

export default function Navbar() {
  const { settings } = data;
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 50], [80, 64]);
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <motion.header
      style={{ height }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center"
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 glass border-b border-white/10"
      />
      
      <Container className="flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center">
            <Image 
                src={settings.branding.logo} 
                alt={settings.branding.siteName} 
                width={40} 
                height={40} 
                className="h-10 w-auto"
            />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="#education" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Education</Link>
            <Link href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Hire Me
          </motion.button>
        </div>
      </Container>
    </motion.header>
  );
}
