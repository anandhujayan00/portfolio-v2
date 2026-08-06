import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Heading from "@/components/shared/Heading";
import GlassCard from "@/components/shared/GlassCard";
import data from "@/data/content.json";

export default function Achievements() {
  const { achievements } = data;

  return (
    <Section id="achievements" className="py-20">
      <Container>
        <Heading as="h2" className="mb-10 text-center">Achievements</Heading>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement: string, index: number) => (
            <GlassCard key={index} className="p-6 border-l-4 border-blue-500">
              <p className="text-gray-200">{achievement}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
