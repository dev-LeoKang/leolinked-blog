import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section id="about" title="About" subtitle="짧게, 명확하게. 내가 어떤 문제를 해결해왔는지.">
        <About />
      </Section>

      <Section
        id="projects"
        title="Projects"
        subtitle="설명 가능하고, 재현 가능한 프로젝트 중심으로 정리합니다."
      >
        <Projects />
      </Section>

      <Section
        id="tech"
        title="Technical Stack"
        subtitle="업무에서 실제로 사용했고, 설명/개선 경험이 있는 항목 위주."
      >
        <TechStack />
      </Section>
    </main>
  );
}
