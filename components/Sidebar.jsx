import { Mail, MapPin, Building } from "lucide-react";

export default function AboutSidebar() {
    return (
        <aside className="w-full md:w-1/4 p-6 md:sticky md:top-12 self-start cursor-default">
            <div className="flex flex-col items-start">
                <img
                    src="/profile.webp"
                    alt="Profile Picture"
                    className="w-36 h-36 rounded-full object-cover shadow-md border border-gray-300"
                />
                <h2 className="text-2xl font-semibold mt-4">Sameer Sharma</h2>
                <p className="text-sm text-muted-foreground">CSE @ MAIT, New Delhi</p>
                <div className="flex items-center gap-1 mt-1 text-gray-700">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">Viogiva, SDE Intern</span>
                </div>
                <div className="w-full border-b border-gray-300 my-3"></div>
                <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 text-sm">
                    <a
                        href="mailto:sameer@sameersharma.me"
                        className="flex items-center gap-1 text-gray-700 hover:opacity-80"
                    >
                        <Mail className="w-4 h-4" />
                        Email
                    </a>
                    <a
                        href="https://linkedin.com/in/sameersharma777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 hover:opacity-80"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /></svg>
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/sameersharmadev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 hover:opacity-80"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                        GitHub
                    </a>
                    <a
                        href="https://bsky.app/profile/crimsonbeam.bsky.social"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 hover:opacity-80"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" />
                        </svg>
                        Bluesky
                    </a>
                    <a
                        href="https://leetcode.com/u/CrimsonBeam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 hover:opacity-80"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 13h7.5" />
                            <path d="M9.424 7.268l4.999 -4.999" />
                            <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
                        </svg>
                        LeetCode
                    </a>
                </div>
                <div className="flex flex-row gap-1 mt-3 items-center text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-700" />
                    <p className="text-sm text-muted-foreground">New Delhi, India (+ 5:30 GMT)</p>
                </div>
                <a
                    href="https://drive.google.com/file/d/14qEKyjV4k-naNoSE2qYItsaljgJpleSN/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-sm font-medium hover:opacity-80 transition"
                >
                    View Resume
                </a>

            </div>
        </aside>
    );
}
