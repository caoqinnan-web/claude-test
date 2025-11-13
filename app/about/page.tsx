import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - My Portfolio",
  description: "Learn more about me and my background",
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for creating elegant solutions to complex problems.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a full-stack developer with over 5 years of experience in building web applications.
                My journey in tech started with a curiosity about how websites work, which quickly turned
                into a passion for creating them.
              </p>
              <p>
                I specialize in modern web technologies including React, Next.js, TypeScript, and TailwindCSS.
                I believe in writing clean, maintainable code and creating user experiences that are both
                beautiful and functional.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge through blog posts and tutorials.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "TailwindCSS", "HTML/CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "Vercel", "CI/CD"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Senior Full-Stack Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Tech Company • 2021 - Present</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Leading development of multiple web applications, mentoring junior developers,
                and implementing best practices for code quality and performance.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Full-Stack Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Startup Inc • 2019 - 2021</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Developed and maintained multiple client projects, worked with cross-functional
                teams, and contributed to the company's growth.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Junior Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Web Agency • 2018 - 2019</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Started my professional journey, learning industry best practices and working
                on various client projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
