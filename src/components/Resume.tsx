import { FileDown } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-14 md:py-20 bg-gray-50">
      <div className="max-w-4xl w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Resume / CV</h2>
            <div className="w-20 h-1 bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white border-2 border-gray-300 hover:border-gray-800 transition-colors p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-800 text-white flex-shrink-0">
                  <FileDown size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">Download Resume</h3>
                  <p className="text-gray-700">
                    Get a detailed view of my professional experience, education, and skills.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/resume.pdf"
                  download="Soham-Gaikwad-Resume.pdf"
                  className="inline-block w-full sm:w-auto py-3 px-6 bg-gray-800 text-white font-medium text-center hover:bg-gray-900 transition-colors"
                >
                  Download PDF
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto py-3 px-6 border-2 border-gray-800 text-gray-800 font-medium text-center hover:bg-gray-800 hover:text-white transition-colors"
                >
                  View PDF
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Quick Summary</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 font-bold mt-1">•</span>
                    <span>3rd Year BTech CSE student with strong foundation in full-stack development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 font-bold mt-1">•</span>
                    <span>Proficient in MERN stack with hands-on project experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 font-bold mt-1">•</span>
                    <span>AWS certified enthusiast with DevOps and cloud architecture expertise</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gray-800 font-bold mt-1">•</span>
                    <span>Strong problem-solving skills and passion for continuous learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
