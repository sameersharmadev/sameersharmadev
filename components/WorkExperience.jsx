'use client';
import { useState } from 'react';
import Image from 'next/image';

function ExperienceCard({ id, company, title, duration, description, type }) {
    return (
        <div className="pt-3 space-y-1 md:space-y-2">
            <div className="flex items-start flex-col md:flex-row gap-2 justify-between">
                <div className="flex items-center space-x-4">
                    <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
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
            id: 'inclearsite',
            company: 'InClearSite',
            title: 'Freelance Developer',
            duration: 'Jan 2024 - Present',
            description:
               'Worked with small businesses to enhance their online presence and drive conversions. Built full-stack, conversion-focused websites with responsive design, backend functionality, and deployment. Delivered websites that helped clients grow their business, with 90% satisfaction.'
        },
        {
            id: 'cantilever',
            company: 'Cantilever',
            title: 'Full Stack Development Intern',
            duration: 'Jun 2025 - Jul 2025',
            description:
                'Developed a full-stack platform with secure authentication and role-based access. I created React components, designed database schemas, and built performance-optimized APIs. This reduced API response time by 35%, and improved first contentful paint by 20%.',
        },
        {
            id: 'simmature',
            company: 'Simmature',
            title: 'Software Development Intern',
            duration: 'Oct 2025 - Present',
            description:
                'Developed and optimized real-time chat features using WebSockets, reducing message latency by 35%. Implemented CI/CD pipelines with GitHub Actions to automate testing and deployment. Collaborated and used technical documentation to deliver production-ready features.'
        }
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


            <div className="rounded-lg p-4 gap-4 flex flex-col-reverse">
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
