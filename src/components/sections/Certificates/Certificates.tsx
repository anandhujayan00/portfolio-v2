"use client";
import { useState } from "react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Heading from "@/components/shared/Heading";
import { data } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Certificates() {
  const { certificates } = data;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="certificates" className="py-20 bg-muted/20">
      <Container>
        <Heading as="h2" className="mb-10 text-center">Certificates</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              className="cursor-pointer overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(cert.image)}
            >
              <Image src={cert.image} alt={cert.title} width={400} height={300} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div className="bg-white p-2 rounded-lg" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
              <Image src={selectedImage} alt="Certificate Preview" width={800} height={600} className="max-w-full max-h-[80vh]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
