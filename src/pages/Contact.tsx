import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { Tooltip } from '../components/Tooltip';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const email = "john@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    
    if (!name || !message) {
      alert("Please fill in at least your name and message.");
      return;
    }
    
    const whatsappNumber = "919284479312";
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email || 'Not provided'}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-10">
      <div className="space-y-3 border-b border-stone-100 dark:border-stone-800 pb-6">
        <h2 className="text-[10px] font-bold tracking-[0.2em] text-stone-400 dark:text-stone-500 uppercase">
          Portfolio
        </h2>
        <h1 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-stone-50 tracking-tight">
          Contact
        </h1>
        <p className="text-base text-stone-600 dark:text-stone-400 max-w-2xl font-light">
          Have a project in mind, a question, or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="space-y-6">
          <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50">Send a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-3 py-2.5 rounded bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-light"
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-3 py-2.5 rounded bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-light"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                Message
              </label>
              <textarea 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="What's on your mind?"
                className="w-full px-3 py-2.5 rounded bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none text-sm font-light"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="px-5 py-2.5 bg-emerald-700 dark:bg-emerald-600 text-white text-sm font-medium rounded hover:bg-emerald-800 dark:hover:bg-emerald-500 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50">Email</h3>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <a href={`mailto:${email}`} className="text-stone-800 dark:text-stone-200 hover:text-emerald-700 dark:hover:text-emerald-500 text-base font-light transition-all duration-300 ease-in-out">
                  {email}
                </a>
                <Tooltip content={copied ? "Copied!" : "Copy email to clipboard"} position="top">
                  <button
                    onClick={handleCopy}
                    className="p-1.5 text-stone-400 hover:text-emerald-700 dark:text-stone-500 dark:hover:text-emerald-500 transition-all duration-300 ease-in-out rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                    aria-label="Copy email"
                  >
                    {copied ? <Check size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </Tooltip>
              </div>
              <p className="text-stone-400 dark:text-stone-500 text-xs">
                Usually reply within 24-48 hours.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-serif text-stone-900 dark:text-stone-50">Find me elsewhere</h3>
            <div className="space-y-2">
              <a href="#" className="flex items-center justify-between p-3 rounded border border-stone-100 dark:border-stone-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors group">
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-stone-800 dark:text-stone-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">GitHub</span>
                  <span className="text-[11px] text-stone-400 dark:text-stone-500">See my code and open-source work</span>
                </div>
                <span className="text-stone-400 dark:text-stone-500 text-xs group-hover:text-emerald-700 dark:group-hover:text-emerald-500 flex items-center gap-1 transition-colors">
                  @johndoe <ArrowUpRight size={10} />
                </span>
              </a>

              <a href="#" className="flex items-center justify-between p-3 rounded border border-stone-100 dark:border-stone-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors group">
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-stone-800 dark:text-stone-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">LinkedIn</span>
                  <span className="text-[11px] text-stone-400 dark:text-stone-500">Connect professionally</span>
                </div>
                <span className="text-stone-400 dark:text-stone-500 text-xs group-hover:text-emerald-700 dark:group-hover:text-emerald-500 flex items-center gap-1 transition-colors">
                  in/johndoe <ArrowUpRight size={10} />
                </span>
              </a>

              <a href="#" className="flex items-center justify-between p-3 rounded border border-stone-100 dark:border-stone-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors group">
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-stone-800 dark:text-stone-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">Twitter / X</span>
                  <span className="text-[11px] text-stone-400 dark:text-stone-500">Thoughts and updates</span>
                </div>
                <span className="text-stone-400 dark:text-stone-500 text-xs group-hover:text-emerald-700 dark:group-hover:text-emerald-500 flex items-center gap-1 transition-colors">
                  @johndoe <ArrowUpRight size={10} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
