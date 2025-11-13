import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Consulting - Services",
  description: "Professional technical consulting services",
};

export default function ConsultingPage() {
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
          <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Consulting
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Expert guidance on technology decisions, architecture, and best practices for your projects.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Consulting Services
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              Technology stack selection and evaluation
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              System architecture design and review
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              Code review and quality assessment
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              Performance optimization strategies
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              Team training and mentoring
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              Technical due diligence
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                React, Next.js, Vue, state management, and component design
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Systems</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Node.js, microservices, API design, and database optimization
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AWS, Azure, GCP, serverless, and containerization
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps & CI/CD</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Automated deployments, testing, and monitoring
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Why Choose My Consulting?
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Hands-on Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Years of practical experience building and scaling real-world applications
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Vendor-Neutral Advice</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unbiased recommendations based on your specific needs and constraints
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Long-term Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Solutions that consider maintainability and future growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
