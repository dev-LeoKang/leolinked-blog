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

      <Section id="contact" title="Contact" subtitle="">
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            href="https://github.com/dev-LeoKang"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            href="https://www.linkedin.com/in/leoKang-85511122b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            href="https://www.instagram.com/h9._.k/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </Section>
    </main>
  );
}
