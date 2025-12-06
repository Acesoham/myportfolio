import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 tracking-wide uppercase">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
              Soham Gaikwad
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800">
              Full Stack Developer & DevOps Engineer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              3rd Year BTech CSD Student specializing in MERN Stack Development,
              Cloud Architecture, and AWS Solutions
            </p>
          </div>

          <div className="flex items-center space-x-4 pt-4 flex-wrap">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:soham@example.com"
              className="w-12 h-12 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="#resume"
              className="ml-2 px-6 py-3 bg-black text-white font-medium flex items-center space-x-2 hover:bg-gray-800 transition-colors"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden border-4 border-black shadow-lg">
            <img
              src="/photo.jpg"
              alt="Soham Gaikwad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={24} className="text-gray-700" />
      </button>
    </section>
  );
}
