import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import WorkExperience from "@/components/WorkExperience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row max-w-6xl mx-auto h-[calc(100vh-4rem)] overflow-y-auto hide-scrollbar">
        <Sidebar />
        <div className="flex-1">
          <Hero />
          <WorkExperience />
          <TechStack />
          <Projects />
        </div>
      </section>
    </>
  );
}
