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
            duration: 'Jan 2025 - Sep 2025',
            description:
               'Worked with small businesses to improve their online presence and drive conversions. Built full-stack websites with responsive design, backend functionality, and deployment handled end to end. Clients reported noticeable increases in user engagement and conversion after launch, with overall client satisfaction around 90%.'
        },
        {
            id: 'vigovia',
            company: 'Vigovia',
            title: 'Software Development Intern',
            duration: 'Oct 2025 - Present',
            description:
                'Improved frontend performance by deferring script execution and preloading critical assets, resulting in significantly faster page loads and around a 60% reduction in LCP. Set up CI/CD pipelines with automated tests and build checks to make releases faster and more reliable. Worked closely with the team, using existing documentation and discussions to ship features that were ready for real-world use.',
        }
    ];

    const educationExperience = [
        {
            id: 'mait',
            company: 'Maharaja Agrasen Institute of Technology',
            title: 'B.Tech (CSE)',
            duration: 'Aug 2023 - Present',
            description: 'Pursuing core CS subjects including Data Structures, Alogrithms, Databases, Computer Networks, Operating Systems, and Software Engineering. Actively involved in development and lead on campus Google Developer Groups as a Tech Mentor and Core Team Member.',
        },
    ];

    const data = activeTab === 'work' ? workExperience : educationExperience;

    return (
        <section className="max-w-6xl mx-auto px-6 cursor-default">
            <div className="flex w-full rounded-lg overflow-hidden">
                <button
                    className={`w-1/2 px-4 py-2 text-sm font-medium transition-all rounded-none cursor-pointer ${activeTab === 'work'
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-muted-foreground'
                        }`}
                    onClick={() => setActiveTab('work')}
                >
                    Work Experience
                </button>
                <button
                    className={`w-1/2 px-4 py-2 text-sm font-medium transition-all rounded-none cursor-pointer ${activeTab === 'education'
                            ? 'bg-blue-100 text-blue-700'
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
