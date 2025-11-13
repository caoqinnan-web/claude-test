export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn how to build modern web applications with Next.js 15 and its powerful features.",
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements to the React framework. In this post, we'll explore what's new and how to get started.

## What's New in Next.js 15

- **Improved Performance**: Faster builds and better runtime performance
- **Enhanced Image Optimization**: New image component with better defaults
- **App Router Improvements**: More stable and feature-rich
- **Server Actions**: Simplified data mutations

## Getting Started

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Key Features

### File-based Routing

Next.js uses a file-based routing system, making it easy to create pages and routes.

### Server Components

Take advantage of React Server Components for better performance and smaller bundle sizes.

### Built-in Optimization

Next.js automatically optimizes your application with features like code splitting and image optimization.

## Conclusion

Next.js 15 is a powerful framework that makes building modern web applications easier than ever. Give it a try in your next project!
    `,
    author: "John Doe",
    date: "2024-11-10",
    category: "Web Development",
    readTime: "5 min read",
  },
  {
    id: "tailwindcss-best-practices",
    title: "TailwindCSS Best Practices for 2024",
    excerpt: "Discover the best practices for using TailwindCSS in modern web development projects.",
    content: `
# TailwindCSS Best Practices for 2024

TailwindCSS has become one of the most popular CSS frameworks. Here are some best practices to make the most of it.

## Why TailwindCSS?

- **Utility-First**: Build designs directly in your markup
- **Responsive Design**: Easy-to-use responsive utilities
- **Customization**: Highly customizable with configuration
- **Performance**: Unused styles are purged automatically

## Best Practices

### 1. Use the Configuration File

Customize your Tailwind setup in \`tailwind.config.js\`:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
      },
    },
  },
}
\`\`\`

### 2. Create Reusable Components

Don't repeat utility classes. Extract common patterns into components.

### 3. Use @apply Sparingly

While @apply is useful, try to use utility classes directly when possible for better performance.

### 4. Leverage Tailwind Plugins

Use official and community plugins to extend functionality.

## Dark Mode

Tailwind makes dark mode implementation simple:

\`\`\`jsx
<div className="bg-white dark:bg-gray-900">
  <p className="text-black dark:text-white">Hello World</p>
</div>
\`\`\`

## Conclusion

Following these best practices will help you build maintainable and performant applications with TailwindCSS.
    `,
    author: "Jane Smith",
    date: "2024-11-08",
    category: "CSS",
    readTime: "4 min read",
  },
  {
    id: "typescript-tips-tricks",
    title: "10 TypeScript Tips and Tricks",
    excerpt: "Level up your TypeScript skills with these useful tips and tricks for everyday development.",
    content: `
# 10 TypeScript Tips and Tricks

TypeScript has become the standard for large-scale JavaScript applications. Here are some tips to improve your TypeScript code.

## 1. Use Type Inference

Let TypeScript infer types when possible:

\`\`\`typescript
const numbers = [1, 2, 3]; // TypeScript knows this is number[]
\`\`\`

## 2. Utility Types

TypeScript provides many useful utility types:

\`\`\`typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User>;
type UserWithoutEmail = Omit<User, 'email'>;
\`\`\`

## 3. Const Assertions

Use const assertions for literal types:

\`\`\`typescript
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
} as const;
\`\`\`

## 4. Discriminated Unions

Create type-safe state machines:

\`\`\`typescript
type State =
  | { status: 'loading' }
  | { status: 'success'; data: string }
  | { status: 'error'; error: Error };
\`\`\`

## 5. Template Literal Types

Build sophisticated string types:

\`\`\`typescript
type Color = 'red' | 'blue' | 'green';
type Shade = 'light' | 'dark';
type ColorShade = \`\${Shade}-\${Color}\`;
\`\`\`

## More Tips

- Use unknown instead of any
- Leverage strict mode
- Use readonly for immutability
- Take advantage of type guards
- Use satisfies operator for type checking

## Conclusion

These TypeScript tips will help you write more type-safe and maintainable code. Keep learning and exploring!
    `,
    author: "Mike Johnson",
    date: "2024-11-05",
    category: "TypeScript",
    readTime: "6 min read",
  },
  {
    id: "building-performant-react-apps",
    title: "Building Performant React Applications",
    excerpt: "Learn techniques and strategies to optimize your React applications for better performance.",
    content: `
# Building Performant React Applications

Performance is crucial for user experience. Here's how to build fast React applications.

## Performance Optimization Techniques

### 1. Code Splitting

Use dynamic imports to split your code:

\`\`\`javascript
const HeavyComponent = lazy(() => import('./HeavyComponent'));
\`\`\`

### 2. Memoization

Prevent unnecessary re-renders:

\`\`\`javascript
const MemoizedComponent = memo(MyComponent);
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
\`\`\`

### 3. Virtual Lists

Use virtualization for long lists:

\`\`\`javascript
import { FixedSizeList } from 'react-window';
\`\`\`

### 4. Image Optimization

Use next/image for automatic optimization:

\`\`\`javascript
import Image from 'next/image';
\`\`\`

## Measuring Performance

Use React DevTools Profiler to identify bottlenecks and optimize accordingly.

## Best Practices

- Avoid inline function definitions in render
- Use production builds
- Implement error boundaries
- Optimize bundle size
- Use Server Components when possible

## Conclusion

Performance optimization is an ongoing process. Measure, optimize, and test regularly to ensure the best user experience.
    `,
    author: "Sarah Williams",
    date: "2024-11-01",
    category: "React",
    readTime: "7 min read",
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}
