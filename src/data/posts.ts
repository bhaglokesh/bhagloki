export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  badges?: string[];
  lastUpdated?: string;
  image?: string;
  template?: 'default' | 'roman-list' | 'code-heavy';
}

export const posts: BlogPost[] = [
  {
    id: "switched-to-vite",
    title: "Why I Switched from Create React App to Vite",
    excerpt: "After years of using Create React App, I finally made the switch to Vite. Here's what changed in my workflow and why I won't be going back.",
    date: "February 12, 2026",
    readTime: "5 min read",
    category: "Frontend",
    tags: ["React", "Vite", "Build Tools"],
    badges: ["Featured", "New"],
    lastUpdated: "March 20, 2026",
    image: "https://picsum.photos/seed/vite/800/400",
    template: "code-heavy",
    content: `
After years of using Create React App, I finally made the switch to Vite. Here's what changed in my workflow and why I won't be going back.

For years, Create React App was my go-to starting point for new React projects. It was reliable, well-documented, and required zero configuration to get started. But as projects grew more complex, I kept running into the same pain points: slow cold start times, sluggish HMR, and a black-box webpack config that was difficult to customize.

## The Breaking Point

The final straw was a medium-sized project that took over 45 seconds to start the dev server. Every time I made a config change, I'd wait nearly a minute just to see the result. Modern developer experience this was not.

I'd heard about Vite for a while but kept putting off the migration. One weekend I finally sat down and did it — and I was shocked by how smooth the process was.

### Vite Configuration Example

Here is a simple example of how easy it is to configure Vite with React:

\`\`\`typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
\`\`\`

## Why Vite?

Vite (French for "quick") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

1. A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
2. A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

## The Result

I won't be going back to CRA. The developer experience improvement is too significant to ignore. If you're still on CRA for a new project, I'd strongly encourage giving Vite a try. Your future self will thank you.
    `
  },
  {
    id: "collaborative-editor",
    title: "Building a Real-Time Collaborative Editor from Scratch",
    excerpt: "A deep dive into operational transforms, conflict resolution, and the fascinating challenges behind building apps like Google Docs.",
    date: "January 28, 2026",
    readTime: "10 min read",
    category: "Engineering",
    tags: ["WebSockets", "Algorithms", "Node.js"],
    badges: ["Deep Dive"],
    lastUpdated: "February 10, 2026",
    image: "https://picsum.photos/seed/editor/800/400",
    template: "roman-list",
    content: `
Building a real-time collaborative editor is one of the most challenging and rewarding problems in frontend engineering. It forces you to think about distributed systems, conflict resolution, and performance in ways that typical CRUD apps don't.

## The Challenge

Imagine two users, Alice and Bob, editing the same document. Alice types "Hello" at the beginning. Bob types "World" at the end. If we just send the new state of the document to the server, one user's changes will overwrite the other's. We need a way to merge these changes intelligently.

## Operational Transformation (OT) vs CRDTs

There are two main approaches to this problem: Operational Transformation (OT) and Conflict-free Replicated Data Types (CRDTs).

### Key Differences

*   **Operational Transformation (OT)**
    *   Used by Google Docs
    *   Requires a central server to resolve conflicts
    *   Transforms operations based on concurrent operations
*   **Conflict-free Replicated Data Types (CRDTs)**
    *   Used by Figma and modern collaborative tools
    *   Guarantees strong eventual consistency
    *   No central server required (peer-to-peer friendly)

## Implementation Steps

Here are the primary steps to implement a basic collaborative editor using WebSockets:

1. Set up the WebSocket server
2. Implement the client-side editor (e.g., using ProseMirror or Quill)
3. Integrate the CRDT library (e.g., Yjs or Automerge)
4. Handle cursor presence and awareness
5. Implement offline support and reconnection logic

## Conclusion

For this project, I chose to implement a simple CRDT using Yjs. It allowed me to get up and running quickly while still providing a robust solution for conflict resolution.
    `
  },
  {
    id: "css-grid-vs-flexbox",
    title: "CSS Grid vs. Flexbox: When to Use Which",
    excerpt: "Understanding the fundamental differences between CSS Grid and Flexbox is crucial for building modern, responsive layouts.",
    date: "March 1, 2026",
    readTime: "7 min read",
    category: "Frontend",
    tags: ["CSS", "Layout", "Web Design"],
    badges: ["Tutorial"],
    image: "https://picsum.photos/seed/grid/800/400",
    template: "code-heavy",
    content: `
Understanding the fundamental differences between CSS Grid and Flexbox is crucial for building modern, responsive layouts.

## Flexbox: One-Dimensional
Flexbox is designed for one-dimensional layouts—either a row or a column. It's perfect for aligning items within a container, distributing space, and handling content flow.

## CSS Grid: Two-Dimensional
CSS Grid is designed for two-dimensional layouts—both rows and columns simultaneously. It's the ultimate tool for creating complex, grid-based layouts without relying on hacks.

### When to use what?
*   **Use Flexbox** for components, navigation bars, and simple alignment.
*   **Use Grid** for the overall page layout, complex dashboards, and gallery grids.
    `
  },
  {
    id: "react-server-components",
    title: "Understanding React Server Components",
    excerpt: "A look at the paradigm shift introduced by React Server Components and how they change the way we build React applications.",
    date: "February 25, 2026",
    readTime: "8 min read",
    category: "Engineering",
    tags: ["React", "Server Components", "Performance"],
    badges: ["Deep Dive"],
    image: "https://picsum.photos/seed/rsc/800/400",
    template: "roman-list",
    content: `
React Server Components represent a significant paradigm shift in how we build React applications.

## The Problem
Traditionally, React components are rendered on the client, which can lead to large bundle sizes and slower initial load times.

## The Solution: Server Components
Server Components are rendered exclusively on the server. They don't send any JavaScript to the client, which can drastically reduce bundle sizes and improve performance.

### Key Benefits
1.  **Zero bundle size:** Server components don't ship JavaScript to the client.
2.  **Direct backend access:** Server components can directly access databases and file systems.
3.  **Improved performance:** Faster initial page loads and reduced client-side processing.
    `
  },
  {
    id: "design-systems-101",
    title: "Design Systems 101: Building Scalable UIs",
    excerpt: "Why design systems are essential for scaling teams and maintaining consistency across large applications.",
    date: "February 15, 2026",
    readTime: "6 min read",
    category: "Design",
    tags: ["Design Systems", "UI/UX", "Scalability"],
    badges: ["Featured"],
    image: "https://picsum.photos/seed/design/800/400",
    template: "default",
    content: `
Why design systems are essential for scaling teams and maintaining consistency across large applications.

## What is a Design System?
A design system is more than just a component library. It's a collection of reusable components, guidelines, and standards that help teams build consistent products faster.

## The Benefits
*   **Consistency:** Ensures a unified look and feel across all products.
*   **Efficiency:** Reduces design and development time by reusing components.
*   **Scalability:** Makes it easier to onboard new team members and maintain large codebases.

## Getting Started
Start small. Document your core styles (colors, typography, spacing) first, then build out your most common components.
    `
  },
  {
    id: "web-accessibility",
    title: "Web Accessibility: Building for Everyone",
    excerpt: "Accessibility is not just a 'nice to have'—it's a fundamental requirement for building inclusive web applications.",
    date: "February 5, 2026",
    readTime: "9 min read",
    category: "Design",
    tags: ["Accessibility", "Inclusive Design", "Web"],
    badges: ["Deep Dive"],
    image: "https://picsum.photos/seed/a11y/800/400",
    template: "roman-list",
    content: `
Accessibility is not just a 'nice to have'—it's a fundamental requirement for building inclusive web applications.

## Why Accessibility Matters
1.  **Inclusivity:** Ensures everyone can access and use your content, regardless of ability.
2.  **Legal Requirements:** Many regions have legal requirements for web accessibility.
3.  **Better User Experience:** Accessible design is often better design for everyone.

## Core Principles (WCAG)
*   **Perceivable:** Information must be presented in ways that users can perceive.
*   **Operable:** UI components must be operable.
*   **Understandable:** Information and operation must be understandable.
*   **Robust:** Content must be robust enough to be interpreted by a wide variety of user agents.
    `
  }
];
