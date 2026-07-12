import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [

{
  title: 'EduFlow – Cloud-Deployed LMS Platform (Jan 2026)',
  description:
    'Designed and deployed a full-stack Learning Management System (LMS) using the MERN stack with a production-ready DevOps setup.\n\n' +
    'Containerized frontend and backend using Docker & Docker Compose, configured Nginx as a reverse proxy for API routing, and deployed the application on AWS EC2 with HTTPS (Let’s Encrypt). Debugged real-world production issues including API routing failures, port conflicts, SSL configuration, and Docker networking.',
  technologies: [
    'AWS EC2',
    'Docker',
    'Docker Compose',
    'Nginx',
    'MongoDB Atlas',
    'Express.js',
    'React.js',
    'Node.js',
    'Linux (Ubuntu)',
    'Let’s Encrypt',
  ],
  github: 'https://github.com/Acesoham/LMSapp',
  live: 'https://eduflow.duckdns.org',
},


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
  title: 'MediVault – Telemedicine & Electronic Health Records (EHR) Platform (Jul 2026)',
  description:
    'Built a full-stack telemedicine platform with secure Electronic Health Records (EHR), appointment scheduling, doctor/patient dashboards, and role-based authentication using the MERN stack.\n\n' +
    'Deployed the application on AWS EC2 using Docker, Docker Compose, and Nginx with HTTPS, enabling secure cloud hosting and streamlined production deployment.',
  technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AWS EC2', 'Docker', 'Docker Compose', 'Nginx', 'JWT'],
  github: 'https://github.com/Acesoham/Telemedicine-and-Electronic-Health-Records-EHR-Application',
  live: 'https://medivault.duckdns.org',
},
{
  title: 'FoodHub – Food Delivery & Dine-Out Hospitality Platform (Jun 2026)',
  description:
    'Developed a full-stack food delivery and dine-out platform featuring restaurant management, table reservations, Stripe payments, event bookings, and Google Maps integration.\n\n' +
    'Containerized the application with Docker and deployed it on AWS EC2 using Nginx, SSL, Jenkins CI/CD, and GitHub Webhooks for automated production deployments.',
  technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'AWS EC2', 'Docker', 'Docker Compose', 'Jenkins', 'Nginx', 'Stripe'],
  github: 'https://github.com/Acesoham/Food-Delivery-and-Dine-Out-Hospitality-Platform',
  live: 'https://foodhub.dedyn.io',
},
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Projects</h2>
            <div className="w-20 h-1 bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
