export default function AboutSection() {
    return (
        <section className="flex flex-col md:flex-row gap-8 items-start w-full max-w-6xl mx-auto p-6 md:mt-8 cursor-default">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold">About Me</h3>
                <div>
                    <p className="mb-2">
                        I’m a computer science student who loves working on real-world products and solving practical problems. I specialize in full-stack development, with a focus on writing clean, maintainable, and reliable software.<br/>
                        I’m currently working as an intern at <a href="https://in.linkedin.com/company/vigovia" target="_blank" className="text-blue-500">Vigovia</a>, a travel tech startup. Outside of work, I love experimenting and learning new things, refining my workflow, and contributing to open-source projects.
                    </p>
                </div>

            </div>
        </section>
    );
}
