import ProjectScreenshots from './ProjectScreenshots';
const projects = [
    {
        id: "canverse",
        title: "Canverse - Real Time Collaborative Whiteboard",
        live: "https://canverse.sameersharma.me/",
        code: "https://github.com/sameersharmadev/canverse",
        description:
            "A real-time collaborative whiteboard application for drawing, sketching, and brainstorming together. Built with WebRTC for voice communication and a custom canvas library. Users can create rooms, invite others, join voice channels, and work on the canvas simultaneously. Used Redis for session management and Socket.io for real-time updates.",
        tags: ["React", "Socket.io", "WebRTC", "Redis"],
        screens: 4,
    },
    {
        id: "devlog",
        title: "Devlog - Collaborative Blogging Platform",
        live: "https://devlog.sameersharma.me/",
        code: "https://github.com/sameersharmadev/devlog",
        description:
            "A developer-focused collaborative blogging platform inspired by dev.to, supporting technical writing with a Markdown editor and social features. Includes user authentication via JWT and Google OAuth. Features public user profiles, threaded comments, and community building features. Implemented search functionality, trending feeds, image uploads, and SEO-optimized post structures.",
        tags: ["React", "PostgreSQL", "ShadCN", "TailwindCSS"],
        screens: 6,
    },
    {
        id: "chrono",
        title: "Chrono - Task Management Application",
        live: "https://chrono.sameersharma.me/",
        code: "https://github.com/sameersharmadev/chrono",
        description:
            "A productivity app to manage tasks with reminders, subtasks, and a calendar view. Built the backend with Express and PostgreSQL, creating REST APIs for tasks and user data. Added a paginated dashboard with weekly summaries. The responsive UI, built with React and Tailwind CSS, supports dark/light mode and modals for quick task creation and edits.",
        tags: ["React", "PostgreSQL", "TailwindCSS", "Express"],
        screens: 6,
    },
];

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto p-6 mt-12 cursor-default">
            <h3 className="text-2xl font-bold mb-2">Projects</h3>
            <div className="space-y-4">
                {projects.map((project, index) => (
                    <div key={index} className="space-y-3">
                        {/* Title */}
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
                                    className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
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
                                className="px-3 py-1.5 text-sm rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                            >
                                View Code
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-sm rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                            >
                                Live Demo
                            </a>
                        </div>


                        {/* Divider */}
                        {index < projects.length - 1 && (
                            <div className="border-t border-gray-300 mt-6"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
