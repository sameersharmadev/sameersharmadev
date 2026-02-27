import React from "react";

const achievements = [
    {
        id: "reddit-gamemaker-hackathon",
        title: "Winner - Reddit x GameMaker Hackathon",
        titleLink: "https://devpost.com/software/just-meme-it",
        description:
            "Built a Devvit-powered daily meme competition game for Reddit as part of the Reddit x GameMaker Hackathon ($40,000+ prize pool, 3000+ participants). Users get a new caption each day, submit memes, and the community votes through a swipeable card interface. Implemented an anti-bury fairness system with forced pre-submission voting and randomized distribution, streak and points leaderboards, and a daily caption scheduler. Used Redis for real-time storage. The game is live on Reddit with active daily players and was received well by the community. Awarded a $1,000 cash prize.",
        skills: ["Devvit", "Redis", "TypeScript", "React"],
        links: [
            { label: "Project Link", url: "https://devpost.com/software/just-meme-it" },
            { label: "GitHub Repo", url: "https://github.com/sameershaItrmadev/just-meme-it/" },
            { label: "Live on Reddit", url: "https://www.reddit.com/r/just_meme_it/" },
        ],
    },
];

function LinkIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500 flex-shrink-0"
        >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    );
}

export default function Achievements() {
    return (
        <section className="max-w-6xl mx-auto p-6 mt-12 cursor-default">
            <h3 className="text-2xl font-bold mb-2">Achievements</h3>
            <div className="space-y-4">
                {achievements.map((entry, idx) => (
                    <div key={entry.id} className="space-y-3">
                        {/* Title */}
                        {entry.titleLink ? (
                            <a
                                href={entry.titleLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-semibold text-blue-500 hover:opacity-80 transition"
                            >
                                {entry.title}
                            </a>
                        ) : (
                            <span className="text-xl font-semibold text-blue-500">
                                {entry.title}
                            </span>
                        )}

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {entry.skills.map((skill, skillIdx) => (
                                <span
                                    key={skillIdx}
                                    className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground">{entry.description}</p>

                        {/* Links */}
                        {entry.links?.length > 0 && (
                            <div className="flex items-center gap-3 flex-wrap">
                                <LinkIcon />
                                {entry.links.map((link, linkIdx) => (
                                    <a
                                        key={linkIdx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-500 hover:opacity-80 transition"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Divider */}
                        {idx < achievements.length - 1 && (
                            <div className="border-t border-gray-300 mt-6"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
