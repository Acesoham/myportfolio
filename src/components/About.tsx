import { Code, Cloud, Server } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: 'DevOps Engineering',
      description: 'Automating workflows and optimizing deployments',
    },
    
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Designing and deploying solutions on AWS',
    },
    
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with MERN stack',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-14 md:py-20 bg-white">
      <div className="max-w-7xl w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">About Me</h2>
            <div className="w-20 h-1 bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate technology enthusiast currently pursuing my BTech in
                Computer Science and Design. With a strong foundation in full-stack
                development and cloud technologies, I strive to build innovative solutions
                that make a difference.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in tech has led me to explore the exciting worlds of MERN stack
                development, DevOps practices, and AWS cloud services. I believe in writing
                clean, maintainable code and creating seamless user experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, I'm constantly learning new technologies and staying
                updated with the latest industry trends to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="border-2 border-gray-300 p-6 hover:border-gray-800 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
