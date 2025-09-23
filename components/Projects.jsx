import ProjectScreenshots from './ProjectScreenshots';
const projects = [
    {
        id: "canverse",
        title: "Canverse - Real Time Collaborative Whiteboard",
        live: "https://canverse.sameersharma.me/",
        code: "https://github.com/sameersharmadev/canverse",
        description:
            "A real-time collaborative whiteboard application that allows users to draw, sketch, and brainstorm ideas together. Built with WebRTC for real-time voice communication and a custom canvas library for drawing features. Users can create rooms, invite others, join voice channels, and work on the canvas simultaneously.",
        tags: ["React", "Socket.io", "WebRTC", "Redis"],
        screens: 4,
    },
    {
        id: "devlog",
        title: "Devlog - Collaborative Blogging Platform",
        live: "https://devlog.sameersharma.me/",
        code: "https://github.com/sameersharmadev/devlog",
        description:
            "A developer-focused collaborative blogging platform inspired by dev.to, supporting technical writing with a Markdown editor and social features. The platform includes user authentication using JWT and Google OAuth, enabling secure and frictionless sign-ins. I designed features such as public user profiles, threaded comments, and real-time updates powered by Supabase. To enhance discoverability and engagement, I implemented search functionality, trending feeds, image uploads, and SEO-optimized post structures.",
        tags: ["React", "PostgreSQL", "ShadCN", "TailwindCSS"],
        screens: 6,
    },
    {
        id: "chrono",
        title: "Chrono - Task Management Application",
        live: "https://chrono.sameersharma.me/",
        code: "https://github.com/sameersharmadev/chrono",
        description:
            "A productivity app to help users stay on top of their tasks with reminders, subtasks, and a calendar-based view that tracks progress over time. I handled the backend using Express and PostgreSQL, setting up REST APIs to manage tasks and user data. To keep things smooth and informative, I added a paginated dashboard with weekly summaries and insights. The UI is fully responsive and supports dark/light mode, built with React and Tailwind CSS, with modals for quick task creation and edits.",
        tags: ["React", "PostgreSQL", "TailwindCSS", "Express"],
        screens: 6,
    },
];

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto p-6 mt-12 cursor-default">
            <h3 className="text-3xl font-bold mb-8">Projects</h3>
            <div className="space-y-10">
                {projects.map((project, index) => (
                    <div key={index} className="space-y-3">
                        {/* Title (links to live project) */}
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-blue-500 hover:opacity-80 transition"
                        >
                            {project.title}
                        </a>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                        {project.screens && (
                            <ProjectScreenshots
                                projectId={project.id}
                                totalScreens={project.screens}
                            />
                        )}
                        {/* Buttons */}
                        <div className="flex gap-3">
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-sm rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition"
                            >
                                View Code
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-sm rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition"
                            >
                                Live Demo
                            </a>
                        </div>


                        {/* Divider */}
                        {index < projects.length - 1 && (
                            <div className="border-t border-gray-300 dark:border-white/20 mt-6"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
