import { Mail, MapPin } from "lucide-react";

export default function AboutSidebar() {
    return (
        <aside className="w-full md:w-1/4 p-6 md:sticky md:top-12 self-start">
            <div className="flex flex-col items-start">
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-36 h-36 rounded-full object-cover shadow-md border border-gray-300 dark:border-gray-800"
                />
                <h2 className="text-2xl font-semibold mt-4">Sameer Sharma</h2>
                <p className="text-sm text-muted-foreground">CSE @ MAIT, New Delhi</p>
                <p>Full stack web developer</p>
                <div className="w-full border-b border-gray-300 dark:border-gray-600 my-3"></div>
                <div className="flex flex-row gap-2">
                    <a
                        href="mailto:sameer@sameersharma.me"
                        className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:opacity-80"
                    >
                        <Mail className="w-4 h-4" />
                        Email
                    </a>
                    <a
                        href="https://linkedin.com/in/sameersharma777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:opacity-80"
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /></svg>
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/sameersharmadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:opacity-80"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                        GitHub
                    </a>
                </div>
                <div className="flex flex-row gap-1 mt-2 items-center text-gray-700 dark:text-gray-300">
                    <MapPin className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    <p className="text-sm text-muted-foreground">New Delhi, India (+ 5:30 GMT)</p>
                </div>
                <a
                    href="https://drive.google.com/file/d/14qEKyjV4k-naNoSE2qYItsaljgJpleSN/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300 hover:opacity-80 transition"
                >
                    View Resume
                </a>

            </div>
        </aside>
    );
}
