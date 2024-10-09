import EducationAndExperience from "@/components/education-and-experience";
import HardSkills from "@/components/hard-skills";
import Header from "@/components/header";
import Info from "@/components/info";
import Projects from "@/components/projects";
import Summary from "@/components/summary";

export default function Home() {
  return (
    <main className="md:py-10 xl:px-52 lg:px-40  p-5">
      <Header />
      <Info />
      <Summary />
      <EducationAndExperience />
      <Projects />
      <HardSkills />
    </main>
  );
}
