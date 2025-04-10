import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { motion } from 'framer-motion'
import './index.css'

const projects = [
  {
    title: '🎯 YouTuber Website',
    description: 'A creative website for a YouTuber.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/thatkidbambino/High-On-Anime-Website',
    demo: 'https://thatkidbambino.github.io/High-On-Anime-Website/'
  },
  {
    title: '🗓️ Medical Appointment App',
    description: 'A full-stack CRUD app for hospital scheduling.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/thatkidbambino/medischedule-appointment-system',
    demo: 'https://medischedule-appointment-system.onrender.com'
  },
  {
    title: '🤖 AI Game Challenge Generator',
    description: 'Generates creative game challenges using OpenAI.',
    tech: ['React', 'Node.js', 'OpenAI API'],
    github: 'https://github.com/thatkidbambino/ai-challenge-assistant',
    demo: 'https://ai-challenge-assistant.vercel.app/'
  },
  {
    title: '✈️ Travel Recommendation',
    description: 'A creative travel recommendation website.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/thatkidbambino/travelRecommendation',
    demo: 'https://thatkidbambino.github.io/travelRecommendation/index.html'
  },
  {
    title: '🎬 MovieMate',
    description: 'Movie tracker with auth, ratings, and a custom list.',
    tech: ['React', 'Node.js', 'SQLite'],
    github: 'https://github.com/thatkidbambino/movie-recommendation',
    demo: 'https://movie-recommendation-f94cxx56j-matthew-sollidays-projects.vercel.app/'
  }
];

const skills = [
  'JavaScript (ES6+)',
  'React & Vite',
  'Node.js & Express',
  'MongoDB & SQLite',
  'REST API Design',
  'JWT Authentication',
  'Tailwind CSS',
  'HTML5 & CSS3',
  'Git & GitHub',
  'Postman & API Testing',
  'CRUD Operations',
  'Responsive Design',
  'Agile Workflows',
  'Deployment (Netlify, Vercel)',
  'Problem Solving & Debugging'
];

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'about', 'skills', 'contact'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 font-sans scroll-smooth">
      <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center gap-6 text-sm text-gray-300">
          {['projects', 'about', 'skills', 'contact'].map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-blue-400 transition ${activeSection === id ? 'text-blue-400 font-semibold' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition hidden md:block"
      >
        ↑ Top
      </button>

      <motion.section
        className="text-center py-20 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/profile.jpg"
          alt="Matt Solliday"
          className="w-80 h-80 mx-auto mb-4 rounded-full border-4 border-blue-500 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <h1 className="text-5xl font-extrabold tracking-tight">Hi, I'm Matt 👋</h1>
        <p className="text-xl mt-4 text-gray-400">Full-Stack Developer | Creative Technologist</p>
        <a
          href="/Matthew_Solliday_Resume.pdf"
          download
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
        >
          Download My Resume
        </a>
      </motion.section>

      <motion.section
        id="projects"
        className="py-20 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-700 border border-gray-600 px-2 py-1 text-xs rounded-full text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a href={project.github} target="_blank" className="text-blue-400 hover:underline">GitHub</a>
                <a href={project.demo} target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="py-20 bg-gray-900 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a full-stack developer passionate about building clean, performant web applications.
            With a background in software development and content creation, I bring a creative, user-focused approach
            to everything I make. I'm actively looking for remote opportunities and freelance projects where I can
            bring ideas to life and create awesome digital experiences.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="py-20 bg-gray-950 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-20 bg-gray-900 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-gray-400 mb-6">I'm always open to collaboration, freelance work, or remote job opportunities. Reach out and let's build something amazing!</p>
          <div className="flex justify-center gap-6 text-blue-400">
            <a href="mailto:matthewsolliday@yahoo.com" className="hover:underline">Email</a>
            <a href="https://github.com/thatkidbambino" className="hover:underline" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/mattsolliday/" className="hover:underline" target="_blank">LinkedIn</a>
          </div>
        </div>
      </motion.section>

      <footer className="bg-gray-950 text-center text-sm py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Matt Solliday. All rights reserved.
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
