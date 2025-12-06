import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Soham Gaikwad</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer & DevOps Engineer passionate about building
              innovative solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="#resume" className="text-gray-400 hover:text-white transition-colors text-sm">
                Resume
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:soham@example.com"
                className="w-10 h-10 flex items-center justify-center border border-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Soham Gaikwad. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
