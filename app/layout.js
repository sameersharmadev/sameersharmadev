import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Sameer Sharma",
  description:
    "Portfolio of Sameer Sharma, a computer science student passionate about software engineering, with experience in full-stack development using React, Next.js, Node.js, and PostgreSQL.",
  keywords: [
    "Sameer Sharma",
    "Software Engineer Portfolio",
    "Computer Science Student",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "Engineering Intern",
    "Student Developer Portfolio",
    "Open Source",
    "JavaScript",
    "Web Developer",
  ],
  authors: [{ name: "Sameer Sharma" }],
  creator: "Sameer Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
