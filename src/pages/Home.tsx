import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tooltip } from '../components/Tooltip';
import profileImg from '../assets/images/lokesh.jpg';


export default function Home() {
  return (
    <div className="space-y-8 md:space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="w-21 h-21 md:w-29 md:h-29 rounded-full overflow-hidden border-[1px] border-[#0f766e] shadow-md">
            <img 
              src={profileImg} 
              alt="My profile picture" 
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-stone-500 dark:text-stone-400 uppercase">
              Software Developer
            </h2>
            <h1 className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              Lokesh Bhagadkar
            </h1>
            <p className="max-w-2xl text-sm md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              I build clean, thoughtful software. Interested in web technologies, 
              developer tools, and the occasional side project. Based in Nagpur, India.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-5 -mt-2">
            <Tooltip content="View my GitHub profile" position="bottom">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs md:text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-500 transition-all duration-300 ease-in-out border-b border-stone-300 dark:border-stone-700 hover:border-emerald-700 dark:hover:border-emerald-500 pb-0.5">
                GitHub
              </a>
            </Tooltip>
            <Tooltip content="Connect with me on LinkedIn" position="bottom">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs md:text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-500 transition-all duration-300 ease-in-out border-b border-stone-300 dark:border-stone-700 hover:border-emerald-700 dark:hover:border-emerald-500 pb-0.5">
                LinkedIn
              </a>
            </Tooltip>
            <Tooltip content="Send me an email" position="bottom">
              <a href="mailto:john@example.com" className="flex items-center gap-1 text-xs md:text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-500 transition-all duration-300 ease-in-out border-b border-stone-300 dark:border-stone-700 hover:border-emerald-700 dark:hover:border-emerald-500 pb-0.5">
                Email
              </a>
            </Tooltip>
            <Tooltip content="Download my resume (PDF)" position="bottom">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs md:text-sm text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-500 transition-all duration-300 ease-in-out border-b border-stone-300 dark:border-stone-700 hover:border-emerald-700 dark:hover:border-emerald-500 pb-0.5">
                Resume <ArrowUpRight size={10} className="md:w-3 md:h-3" />
              </a>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-2 md:space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-serif text-stone-900 dark:text-stone-50">About</h3>
          <div className="w-12 h-0.5 bg-emerald-500"></div>
        </div>
        
        <div className="space-y-3 md:space-y-5 text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl font-light text-sm md:text-lg">
          <p>
            I am a passionate software engineer with experience in building web applications and solving complex problems. I enjoy working with modern technologies and continuously learning new skills.
          </p>
          <p>
            Currently, I'm focused on building scalable applications and exploring new technologies in the web development ecosystem. When I'm not coding, you can find me reading, hiking, or experimenting with new tech projects.
          </p>
         
        </div>
      </section>

      {/*current focus */}
      <section className="space-y-2 md:space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-serif text-stone-900 dark:text-stone-50">Current focus</h3>
          <div className="w-12 h-0.5 bg-emerald-500"></div>
        </div>
        
        <div className="space-y-3 md:space-y-5 text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl font-light text-sm md:text-lg">
          <ul className="list-disc list-inside space-y-0.5">
            <li>Full-stack web development</li>
            <li>Cloud architecture and DevOps</li>
            <li>Open source contributions</li>
          </ul>
        </div>
      </section>

      {/* Explore Section */}
      <section className="space-y-4 md:space-y-6">
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-serif text-stone-900 dark:text-stone-50">Explore</h3>
          <div className="w-12 h-0.5 bg-emerald-500"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <Link to="/skills" className="group p-4 md:p-5 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-all duration-200">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">Skills</h4>
              <span className="text-stone-400 dark:text-stone-500 transition-transform group-hover:translate-x-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 text-xs">→</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-[11px] md:text-xs">Technologies & tools</p>
          </Link>

          <Link to="/projects" className="group p-4 md:p-5 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-all duration-200">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">Projects</h4>
              <span className="text-stone-400 dark:text-stone-500 transition-transform group-hover:translate-x-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 text-xs">→</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-[11px] md:text-xs">Things I've built</p>
          </Link>

          <Link to="/blog" className="group p-4 md:p-5 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-all duration-200">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">Blog</h4>
              <span className="text-stone-400 dark:text-stone-500 transition-transform group-hover:translate-x-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 text-xs">→</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-[11px] md:text-xs">Thoughts & writings</p>
          </Link>

          <Link to="/contact" className="group p-4 md:p-5 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-all duration-200">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">Contact</h4>
              <span className="text-stone-400 dark:text-stone-500 transition-transform group-hover:translate-x-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 text-xs">→</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-[11px] md:text-xs">Get in touch</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
