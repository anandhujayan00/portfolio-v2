"use client";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Heading from "@/components/shared/Heading";
import GlassCard from "@/components/shared/GlassCard";
import { data } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, Link as LinkIcon } from "lucide-react";

export default function Contact() {
  const { contact } = data;

  return (
    <Section id="contact" className="py-20 bg-muted/20">
      <Container>
        <Heading as="h2" className="mb-10 text-center">Contact</Heading>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full bg-gray-900 p-3 rounded-lg border border-gray-800" />
              <input type="email" placeholder="Email" className="w-full bg-gray-900 p-3 rounded-lg border border-gray-800" />
              <textarea placeholder="Message" className="w-full bg-gray-900 p-3 rounded-lg border border-gray-800 h-32" />
              <button className="w-full py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition">Send Message</button>
            </form>
          </GlassCard>
          
          <GlassCard className="p-8 flex flex-col items-center text-center justify-between">
            <h3 className="text-xl font-bold text-white mb-8">Let&apos;s Connect</h3>
            
            <div className="flex flex-col gap-4 w-full">
              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 transition-all hover:shadow-blue-500/30"
              >
                <Mail className="w-5 h-5" /> Email Me
              </motion.a>
              
              <motion.a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gray-800 rounded-full text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-all hover:bg-gray-700"
              >
                <LinkIcon className="w-5 h-5" /> LinkedIn
              </motion.a>
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-8 space-y-2">
              <p className="text-gray-300 font-semibold">📍 {contact.location}</p>
              <p className="text-xs text-gray-500">{contact.subtitle}</p>
            </motion.div>

            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-6 px-4 py-1.5 bg-green-900/30 text-green-400 rounded-full text-xs font-bold border border-green-900/50 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-500"></span> {contact.status}
            </motion.span>
          </GlassCard>
        </div>
      </Container>
    </Section>
  );
}
