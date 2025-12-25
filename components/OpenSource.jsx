import React from "react";

const communityEntries = [
    {
        id: "owasp",
        title: "OWASP - Open Source Contributor",
        description:
            "OWASP is a global nonprofit dedicated to improving software security, with 250+ local chapters worldwide. I have contributed extensively to the Nest project, OWASP’s central hub for exploring projects and contribution opportunities. My work includes large-scale frontend migrations, bug fixes, new features, and ongoing enhancements, all aimed at making the platform more accessible and impactful for the open source community.",
        tags: [{ label: "open source", color: "green" }],
    },
    {
        id: "gdg-mait",
        title: "Google Developer Groups, MAIT - Tech Mentor & Core Team",
        description:
            "As a Tech Mentor in the Google Developer Groups core team, I organized hackathons and technical events, coordinated community projects, and mentored newcomers. My focus was on fostering a collaborative environment and helping others strengthen their technical skills through hands-on learning and real-world challenges.",
        tags: [{ label: "mentoring", color: "yellow" }],
    },
    {
        id: "other-orgs",
        title: "Godot, PreMiD, FluxCD, Vercel, Supabase - Other Contributions",
        description:
            "I’ve also contributed several other open source organizations, with my work spanning across accessibility improvements, bug fixes, new features, and community support, with a focus on making technology more reliable and inclusive for everyone.",
    },
];

const tagStyles = {
    red: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
    green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
    gray: "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300",
};

export default function CommunityEngagement() {
    return (
        <section className="max-w-6xl mx-auto p-6 mt-12 cursor-default">
            <h3 className="text-2xl font-bold mb-2">Community Engagement & Volunteering</h3>
            <div className="space-y-4">
                {communityEntries.map((entry, idx) => (
                    <div key={entry.id} className="space-y-2">
                        <div className="items-center gap-3">
                            {entry.id === "owasp" ? (
                                <a
                                    href="https://nest.owasp.org/members/sameersharmadev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-semibold text-blue-500 hover:opacity-80 transition"
                                >
                                    {entry.title}
                                </a>
                            ) : entry.id === "gdg-mait" ? (
                                <a
                                    href="https://www.linkedin.com/company/google-developer-students-club-mait/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-semibold text-blue-500 hover:opacity-80 transition"
                                >
                                    {entry.title}
                                </a>
                            ) : entry.id === "other-orgs" ? (
                                <a
                                    href="https://github.com/sameersharmadev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-semibold text-blue-500 hover:opacity-80 transition"
                                >
                                    {entry.title}
                                </a>
                            ) : (
                                <span className="text-xl font-semibold text-blue-500">{entry.title}</span>
                            )}
                            {entry.tags?.map((tag, tagIdx) => (
                                <span
                                    key={tagIdx}
                                    className={`px-2 py-1 text-xs rounded-full ${tagStyles[tag.color]} backdrop-blur-sm ml-2`}
                                >
                                    {tag.label}
                                </span>
                            ))}
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">{entry.description}</p>
                        </div>
                        {idx < communityEntries.length - 1 && (
                            <div className="border-t border-gray-300 dark:border-white/20 mt-6"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}