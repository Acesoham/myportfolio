import { Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software  Intern',
      organization: 'Acrylic Solutions Pvt. Ltd. — Nashik, Maharashtra',
      period: 'March 2025 – July 2025',
      type: 'Internship',
      description:
        '• Built a web application to simplify government form submission for rural users using React, TypeScript, Node.js, Express.js, and Socket.io\n\n' +
        '• Integrated with official government websites and implemented MongoDB databases for efficient data storage and retrieval\n\n' +
        '• Designed a user-friendly interface to improve accessibility, adoption, and reduce errors in form submissions',
      
    },
  
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-7xl w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Experience</h2>
            <div className="w-20 h-1 bg-gray-800"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-gray-800 pl-8 py-6 hover:bg-gray-50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-gray-600">{exp.organization}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar size={18} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 border-2 border-gray-400 text-xs font-medium text-gray-700">
                    {exp.type}
                  </div>
                  <p className="text-gray-700 leading-relaxed max-w-3xl whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
