"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Heading from "@/components/shared/Heading";
import { data } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./components/SkillCard";
import Capabilities from "./components/Capabilities";

export default function Skills() {
  const { skills } = data;
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <Section id="skills" className="py-20">
      <Container>
        <Heading as="h2" className="mb-16 text-center">Professional Skills Dashboard</Heading>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50 scale-105"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-full"
            >
              {skills[activeCategory].map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {activeCategory === "AI & Automation" && <Capabilities />}
      </Container>
    </Section>
  );
}
