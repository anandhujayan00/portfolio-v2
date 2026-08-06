"use client";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Heading from "@/components/shared/Heading";
import GlassCard from "@/components/shared/GlassCard";
import { data } from "@/lib/data";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export default function Stack() {
  const { stack } = data;

  return (
    <Section id="stack" className="py-20">
      <Container>
        <Heading as="h2" className="mb-4 text-center">{stack.title}</Heading>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">{stack.subtitle}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.categories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <GlassCard 
                className={`p-6 h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] ${
                  category.activeLearning ? "border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  {category.activeLearning && (
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/50 rounded-full border border-blue-900">
                      Learning
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item) => {
                    const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[item.icon] || LucideIcons.Code;
                    return (
                      <div key={item.name} className="flex items-center gap-3 p-3 rounded-lg bg-gray-900 border border-gray-800">
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span className="text-xs text-gray-300">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
