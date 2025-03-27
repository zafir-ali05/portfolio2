import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
    </div>
  )
}

