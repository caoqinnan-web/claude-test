import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development - Services",
  description: "Professional web development services",
};

export default function WebDevelopmentPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← Back to Services
        </Link>

        <div className="mb-8">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Web Development
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building modern, responsive, and performant web applications tailored to your needs.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            What I Offer
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Custom web application development
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Responsive design for all devices
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Performance optimization
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              SEO best practices
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Modern frameworks (React, Next.js, etc.)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Process
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">1. Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Understanding your requirements and goals
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">2. Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating wireframes and visual designs
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">3. Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building your application with clean, maintainable code
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">4. Testing & Launch</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thorough testing and smooth deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
