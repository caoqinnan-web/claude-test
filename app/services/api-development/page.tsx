import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Development - Services",
  description: "Professional API development services",
};

export default function APIDevelopmentPage() {
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
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            API Development
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building robust, scalable, and secure APIs for your applications and services.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            API Services
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              RESTful API design and development
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              GraphQL API implementation
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              API documentation with Swagger/OpenAPI
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              Authentication and authorization (JWT, OAuth)
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              Rate limiting and caching strategies
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              API testing and monitoring
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Node.js", "Express", "Fastify", "GraphQL", "REST", "PostgreSQL", "MongoDB", "Redis"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Best Practices
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementing robust security measures including authentication, authorization, and data validation
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Scalability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designing APIs that can handle growth and increased traffic efficiently
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Providing comprehensive documentation for easy integration and maintenance
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Versioning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Proper API versioning to ensure backward compatibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
