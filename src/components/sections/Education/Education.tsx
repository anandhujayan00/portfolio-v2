"use client";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Heading from "@/components/shared/Heading";
import GlassCard from "@/components/shared/GlassCard";
import { data } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, BookOpen, School, LucideIcon } from "lucide-react";
import { useRef } from "react";

const icons: { [key: string]: LucideIcon } = {
  GraduationCap,
  Award,
  BookOpen,
  School,
};

export default function Education() {
  const { education } = data;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="education" className="py-20" ref={containerRef}>
      <Container>
        <Heading as="h2" className="mb-16 text-center">Education</Heading>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800">
            <motion.div 
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            />
          </div>

          <div className="space-y-12">
            {education.map((item, index) => {
              const Icon = icons[item.icon] || School;
              return (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center md:justify-between gap-8 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gray-900 border-4 border-blue-900 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? "order-1" : "order-3"}`} />
                  
                  <GlassCard className={`w-[calc(100%-4rem)] md:w-5/12 order-2 p-6 hover:border-blue-500/30 transition-all duration-300`}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white leading-tight">{item.degree}</h3>
                      <span className="text-sm font-mono text-blue-400 bg-blue-950/30 px-2 py-1 rounded">{item.startYear}-{item.endYear}</span>
                    </div>
                    <p className="text-gray-300 font-medium mb-0.5">{item.institution}</p>
                    {item.affiliation && (
                      <p className="text-xs text-gray-500 mb-2">{item.affiliation}</p>
                    )}
                    <p className="text-sm text-gray-500 italic mb-3">{item.status}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
