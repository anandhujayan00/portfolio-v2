"use client";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Heading from "@/components/shared/Heading";
import GlassCard from "@/components/shared/GlassCard";
import { data } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const { projects } = data;

  return (
    <Section id="projects" className="py-20 bg-muted/20">
      <Container>
        <Heading as="h2" className="mb-10 text-center">Projects</Heading>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-6 h-full flex flex-col">
                <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-blue-900/30 text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
