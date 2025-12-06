export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', ],
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
    },
    {
      title: ' DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Git', 'Linux','Ansible'],
    },
    {
      title: 'AWS Services',
      skills: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation', 'ECS', 'Route 53'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
      <div className="max-w-7xl w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-300 p-8 hover:border-gray-800 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 border-2 border-gray-800 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
