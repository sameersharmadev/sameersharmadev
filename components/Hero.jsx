import { Mail, Github } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row gap-8 items-start w-full max-w-6xl mx-auto p-6 md:mt-8 cursor-default">
            {/* Right About Text */}
            <div className="space-y-4">
                <h3 className="text-3xl font-bold">About</h3>
                <div>
                    <p className="mb-2">
                        Hello there! I am Sameer Sharma, a full stack developer with experience in technologies like React.js, Next.js, and the Node.js ecosystem.
                        I love building stuff that create meaningful impact and add real world value.
                    </p>

                    <p className="mb-2">
                        I also freelance and help brands build their online presence with conversion focussed websites. I love open source and often contribute to my favorite projects.
                    </p>
                </div>

            </div>
        </section>
    );
}
