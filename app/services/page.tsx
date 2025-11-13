import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - My Portfolio",
  description: "Explore the services I offer",
};

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "blue",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that provide excellent user experiences.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: "green",
  },
  {
    id: "api-development",
    title: "API Development",
    description: "Robust and scalable RESTful APIs for your applications and services.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "purple",
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description: "Expert advice on architecture, technology stack, and best practices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "orange",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I offer a range of services to help bring your digital projects to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-lg flex items-center justify-center mb-6 text-${service.color}-600 dark:text-${service.color}-400 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific needs and create a tailored solution.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
