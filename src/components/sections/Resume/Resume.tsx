"use client";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Heading from "@/components/shared/Heading";
import GlassCard from "@/components/shared/GlassCard";

export default function Resume() {
  return (
    <Section id="resume" className="py-20">
      <Container>
        <Heading as="h2" className="mb-10 text-center">Resume</Heading>
        <GlassCard className="p-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-400 mb-6">Preview of my professional background.</p>
          <div className="aspect-[8.5/11] bg-gray-800 rounded-lg flex items-center justify-center mb-6 text-gray-500">
            Resume Preview
          </div>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition">Download PDF</button>
            <button className="px-6 py-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition">Print</button>
          </div>
        </GlassCard>
      </Container>
    </Section>
  );
}
