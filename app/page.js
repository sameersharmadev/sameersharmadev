import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import WorkExperience from "@/components/WorkExperience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
      <section className=" h-[calc(100vh)] overflow-y-auto hide-scrollbar">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        <Sidebar />
        <div className="flex-1">
          <Hero />
          <WorkExperience />
          <TechStack />
          <Projects />
          <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
            © Sameer Sharma 2025. All rights reserved.
          </footer>
        </div>
        </div>
      </section>


    </>
  );
}
