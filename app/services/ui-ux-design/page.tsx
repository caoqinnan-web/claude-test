import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design - Services",
  description: "Professional UI/UX design services",
};

export default function UIUXDesignPage() {
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
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            UI/UX Design
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Creating beautiful and intuitive user interfaces that users love to interact with.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Design Services
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              User interface design
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              User experience optimization
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              Wireframing and prototyping
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              Design systems and component libraries
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              Responsive design for all devices
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Design Tools
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop", "Illustrator"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
              >
                {tool}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Design Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">User-Centered</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Always putting the user's needs first
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Consistency</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Maintaining design consistency throughout
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Designing for all users, including those with disabilities
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Simplicity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Keeping designs clean and easy to understand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
