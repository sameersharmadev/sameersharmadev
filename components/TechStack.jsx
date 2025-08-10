import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiFigma,
    SiGit,
} from "react-icons/si";

const techStack = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Figma", icon: SiFigma },
    { name: "Git", icon: SiGit },
];

export default function TechStack() {
    return (
        <section className="max-w-6xl mx-auto p-6 mt-4">
            <h3 className="text-3xl font-bold mb-6">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {techStack.map((tech) => {
                    const Icon = tech.icon;
                    return (
                        <div
                            key={tech.name}
                            className="flex items-center space-x-2 p-3 rounded-lg transition-colors bg-gray-100 dark:bg-white/5"

                        >
                            <Icon className="w-5 h-5 text-primary-foreground" />
                            <span className="text-sm text-primary-foreground">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
