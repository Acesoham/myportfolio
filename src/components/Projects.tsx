import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'SpendSense – AI-powered Expense Tracker (Oct 2025)',
      description:
        'Developed a full-stack expense management app with CRUD operations, search & category filters, and data export (CSV/PDF).\n\n' +
        'Implemented JWT authentication for secure user access and integrated Recharts analytics dashboard for insightful expense tracking.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TailwindCSS', 'JWT', 'Recharts'],
      github: 'https://github.com/Acesoham/spendsense',
      live: 'https://spendsense-sand.vercel.app',
    },
    {
      title: 'CabBook – AI-Powered Cab Booking System (June 2025)',
      description:
        'Developed a full-stack MERN web application that allows users to book rides, track cab history, and monitor trip expenses in real time.\n\n' +
        'Implemented secure authentication using JWT and Google Sign-In with optimized role-based access for passengers and drivers.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Google Sign-In'],
      github: 'https://github.com/Acesoham/cabbook',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
      <div className="max-w-7xl w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Projects</h2>
            <div className="w-20 h-1 bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-300 hover:border-gray-800 transition-all duration-300 group"
              >
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium border border-gray-400 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
