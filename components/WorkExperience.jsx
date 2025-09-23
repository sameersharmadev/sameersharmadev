'use client';
import { useState } from 'react';
import Image from 'next/image';

function ExperienceCard({ id, company, title, duration, description, type }) {
    return (
        <div className="pt-3 space-y-1 md:space-y-2">
            <div className="flex items-start flex-col md:flex-row gap-2 justify-between">
                <div className="flex items-center space-x-4">
                    <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden bg-white">
                        <Image
                            src={`/${type}/${id}.webp`}
                            alt={`${company} logo`}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold leading-tight">{company}</h3>
                        <p className="text-sm text-muted-foreground">{title}</p>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{duration}</p>
            </div>
            {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
            )}
        </div>
    );
}

export default function Experience() {
    const [activeTab, setActiveTab] = useState('work');

    const workExperience = [
        {
            id: 'cantilever',
            company: 'Cantilever',
            title: 'Full Stack Development Intern',
            duration: 'Jun 2025 - Jul 2025',
            description:
                'Got experience building secure, feature-rich web apps with React, Tailwind, and Supabase, focusing on auth, access control, and API performance.',
        },
    ];

    const educationExperience = [
        {
            id: 'mait',
            company: 'Maharaja Agrasen Institute of Technology',
            title: 'B.Tech (CSE)',
            duration: 'Aug 2023 - Jul 2027',
            description: 'Pursuing core CS subjects including Data Structures, Operating Systems, and Software Engineering. Actively involved in development.',
        },
    ];

    const data = activeTab === 'work' ? workExperience : educationExperience;

    return (
        <section className="max-w-6xl mx-auto p-6 cursor-default">
            <div className="flex w-full rounded-lg overflow-hidden mb-2">
                <button
                    className={`w-1/2 px-4 py-2 text-sm font-medium transition-all rounded-none cursor-pointer ${activeTab === 'work'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            : 'text-muted-foreground'
                        }`}
                    onClick={() => setActiveTab('work')}
                >
                    Work Experience
                </button>
                <button
                    className={`w-1/2 px-4 py-2 text-sm font-medium transition-all rounded-none cursor-pointer ${activeTab === 'education'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            : 'text-muted-foreground'
                        }`}
                    onClick={() => setActiveTab('education')}
                >
                    Education
                </button>
            </div>


            <div className="rounded-lg p-4 space-y-6">
                {data.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        {...item}
                        type={activeTab === 'work' ? 'workexperience' : 'education'}
                    />
                ))}
            </div>
        </section>
    );
}
