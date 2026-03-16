import React from 'react';
import { twMerge } from 'tailwind-merge';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiTypescript, 
  SiGo, SiHtml5, SiJavascript,
  SiPython, SiSass, SiNextdotjs, SiTailwindcss,
  SiFramer, SiRedux, SiVuedotjs, SiExpress,
  SiPostgresql, SiFirebase, SiSupabase, SiGit,
  SiDocker, SiVercel, SiFigma,
} from 'react-icons/si';
import { FaDatabase, FaCloudSun, FaTerminal, FaChartLine, FaAws, FaCss3Alt, FaVial, FaGithub } from 'react-icons/fa6';

interface TechBadgeProps {
  tag: string;
  className?: string;
}

interface TechInfo {
  icon: React.ElementType;
  color?: string;
}

const techMap: Record<string, TechInfo> = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'CSS': { icon: FaCss3Alt, color: '#1572B6' },
  'Go': { icon: SiGo, color: '#00ADD8' },
  'HTML': { icon: SiHtml5, color: '#E34F26' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#F7DF1E' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'HTML5': { icon: SiHtml5, color: '#E34F26' },
  'CSS3/SCSS': { icon: SiSass, color: '#CC6699' },
  'SQL': { icon: FaDatabase, color: '#336791' },
  'Next.js': { icon: SiNextdotjs },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF' },
  'Redux': { icon: SiRedux, color: '#764ABC' },
  'Vue.js': { icon: SiVuedotjs, color: '#4FC08D' },
  'Express': { icon: SiExpress },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28' },
  'Supabase': { icon: SiSupabase, color: '#3ECF8E' },
  'Git': { icon: SiGit, color: '#F05032' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'AWS': { icon: FaAws, color: '#FF9900' },
  'Vercel': { icon: SiVercel },
  'Figma': { icon: SiFigma, color: '#F24E1E' },
  'Jest': { icon: FaVial, color: '#C21325' },
'CI/CD': { icon: FaGithub, color: '#2088FF' },
  'Chart.js': { icon: FaChartLine, color: '#FF6384' },
  'IndexedDB': { icon: FaDatabase },
  'Weather API': { icon: FaCloudSun },
  'CLI': { icon: FaTerminal },
};

export function TechBadge({ tag, className }: TechBadgeProps) {
  const tech = techMap[tag];
  const Icon = tech?.icon;

  return (
    <span className={twMerge(
      "inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-stone-600 dark:text-stone-300 font-medium bg-stone-100 dark:bg-stone-800/50 rounded border border-stone-200/50 dark:border-stone-700/50 transition-colors px-2 py-1 group-hover:border-emerald-500/20",
      className
    )}>
      {Icon && <Icon className="text-xs" style={{ color: tech.color }} />}
      {tag}
    </span>
  );
}
