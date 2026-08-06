import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Heading from "@/components/shared/Heading";
import GlassCard from "@/components/shared/GlassCard";
import { data } from "@/lib/data";

export default function About() {
  const { personal } = data;

  return (
    <Section id="about" className="py-20">
      <Container>
        <Heading as="h2" className="mb-10 text-center">About Me</Heading>
        
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Introduction</h3>
            <p className="text-muted-foreground leading-relaxed">
              {personal.longAboutMe}
            </p>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Bio</h3>
              <p className="text-muted-foreground leading-relaxed">
                {personal.shortBio}
              </p>
            </GlassCard>
          </div>
        </div>
      </Container>
    </Section>
  );
}
