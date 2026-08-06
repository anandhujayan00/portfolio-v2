import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Education from "@/components/sections/Education/Education";
import Skills from "@/components/sections/Skills/Skills";
import Stack from "@/components/sections/Skills/components/Stack";
import Projects from "@/components/sections/Projects/Projects";
import Achievements from "@/components/sections/Achievements/Achievements";
import Certificates from "@/components/sections/Certificates/Certificates";
import Resume from "@/components/sections/Resume/Resume";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Stack />
      <Projects />
      <Achievements />
      <Certificates />
      <Resume />
      <Contact />
    </div>
  );
}
