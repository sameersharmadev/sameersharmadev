import { Mail, Linkedin, Github } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row gap-8 items-start w-full max-w-6xl mx-auto p-6 mt-8">
            {/* Right About Text */}
            <div className="space-y-4">
                <h3 className="text-3xl font-bold">About</h3>
                <div>
                    <p className="mb-2">
                        Hello there! I am Sameer Sharma, a computer science student at <a href="https://mait.ac.in/" className="text-blue-500 hover:opacity-80" target="_blank" rel="noopener noreferrer">MAIT</a>, expected to graduate in 2027.
                        I have experience in full-stack development using technologies like React, Next.js, Node.js, and PostgreSQL.
                    </p>

                    <p className="mb-2">
                        I worked on full-stack projects as an intern at <a href="https://drive.google.com/file/d/1Pkx0Ie2Rl1q76cYx5Cczp4aegjVH4ttr/view" className="text-blue-500 hover:opacity-80" target="_blank" rel="noopener noreferrer">Cantilever</a>, where I designed efficient APIs with query optimizations, and built responsive UIs using React. I have also independently developed a <a href="http://chrono.sameersharma.me" className="text-blue-500 hover:opacity-80" target="_blank" rel="noopener noreferrer">task management tool</a> with progress tracking and a collaborative <a href="http://devlog.sameersharma.me" className="text-blue-500 hover:opacity-80" target="_blank" rel="noopener noreferrer">blogging platform</a> for developers with markdown editor and social features.
                    </p>

                    <p className="mb-2">
                        I also <a href="https://inclearsite.sameersharma.me/" className="text-blue-500 hover:opacity-80" target="_blank" rel="noopener noreferrer">freelance</a> and help brands build their online presence with conversion focussed websites.
                    </p>
                </div>

            </div>
        </section>
    );
}
