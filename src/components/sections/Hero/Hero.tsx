"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import { data } from "@/lib/data";
import MagneticButton from "@/components/shared/MagneticButton";
import Counter from "./Counter";
import AuroraBackground from "./AuroraBackground";
import ParticleSystem from "./ParticleSystem";
import { Download, Send, GraduationCap, Briefcase, Grid3X3, BookOpenText, Sparkles } from "lucide-react";

export default function Hero() {
  const { personal } = data;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <AuroraBackground />
      <ParticleSystem />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-semibold text-primary mb-6 tracking-wide">
            {personal.tagline}
          </span>
          <Heading as="h1" className="mb-4 text-5xl md:text-7xl lg:text-8xl">
            {personal.heroHeading.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-gradient" : ""}>
                {word}{" "}
              </span>
            ))}
          </Heading>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-medium mb-10 leading-relaxed">
            {personal.jobTitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <MagneticButton className="w-full sm:w-auto">
              <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all">
                Download Resume <Download className="w-5 h-5" />
              </a>
            </MagneticButton>
            
            <MagneticButton className="w-full sm:w-auto">
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full glass font-bold text-lg hover:bg-white/10 dark:hover:bg-black/20 transition-all">
                Contact Me <Send className="w-5 h-5" />
              </a>
            </MagneticButton>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 max-w-5xl mx-auto border-t border-border pt-10 mt-10">
            <Counter value={personal.yearsLearning} label={personal.yearsLearningLabel} icon={GraduationCap} />
            <Counter value={personal.experienceYears} label={personal.experienceYearsLabel} icon={Briefcase} />
            <Counter value={personal.domainsCount} label={personal.domainsCountLabel} icon={Grid3X3} />
            <Counter value={personal.mbaStatus} label={personal.mbaStatusLabel} icon={BookOpenText} isStatic />
            <Counter value={personal.aiStatus} label={personal.aiStatusLabel} icon={Sparkles} isStatic />
          </div>
        </motion.div>
      </Container>

      <div className="h-32" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
