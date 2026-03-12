export interface Project {
  id: string;
  title: string;
  badges: string[];
  year: string;
  description: string;
  tags: string[];
  github: string | null;
  live: string | null;
  blog: string | null;
  youtube: string | null;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "AI-Resume-Analyzer-and-Interview-Prep-Tool", 
    title: "AI Resume Analyzer & Interview Prep Tool ",
    badges: ["Live", "Open Source"],
    year: "2024",
    description: "A minimal web app to track income and expenses, with visual charts and monthly summaries. Built with a focus on simplicity and speed.",
    tags: ["React", "Chart.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    blog: "/blog/finance-tracker",
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://picsum.photos/seed/finance1/800/600",
      "https://picsum.photos/seed/finance2/800/600",
      "https://picsum.photos/seed/finance3/800/600",
      "https://picsum.photos/seed/finance4/800/600",
      "https://picsum.photos/seed/finance5/800/600",
      "https://picsum.photos/seed/finance6/800/600",
      "https://picsum.photos/seed/finance7/800/600",
      "https://picsum.photos/seed/finance8/800/600"
    ]
  },
  {
    id: "Real-Time-Multi-User-Device-Tracker",
    title: "Real-Time Multi-User Device Tracker ",
    
    badges: ["In Progress", "Open Source"],
    year: "2024",
    description: "A lightweight markdown note-taking app with offline support and a clean, distraction-free writing mode. No accounts needed.",
    tags: ["TypeScript", "IndexedDB", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
    blog: null,
    youtube: null,
    images: [
      "https://picsum.photos/seed/notes1/800/600",
      "https://picsum.photos/seed/notes2/800/600",
      "https://picsum.photos/seed/notes3/800/600"
    ]
  },
  {
    id: "CanvasCraft–ML-Powered-Gesture-Drawing-Board",
    title: "CanvasCraft – ML-Powered Gesture Drawing Board",
    badges: ["Completed", "Open Source"],
    year: "2023",
    description: "Command-line tool that fetches real-time weather data and displays it with clean terminal formatting. Supports geolocation and unit conversion.",
    tags: ["Go", "Weather API", "CLI"],
    github: "https://github.com",
    live: null,
    blog: "/blog/weather-cli",
    youtube: null,
    images: [
      "https://picsum.photos/seed/weather1/800/600",
      "https://picsum.photos/seed/weather2/800/600"
    ]
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v1",
    badges: ["Archived"],
    year: "2022",
    description: "My first portfolio website built with vanilla HTML/CSS and JavaScript. A learning experience in responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com",
    live: "https://example.com",
    blog: null,
    youtube: null,
    images: [
      "https://picsum.photos/seed/portfolio1/800/600",
      "https://picsum.photos/seed/portfolio2/800/600",
      "https://picsum.photos/seed/portfolio3/800/600"
    ]
  }
];
