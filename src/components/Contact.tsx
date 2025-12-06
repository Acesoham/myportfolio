import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sohamgaikwad45@gmail.com',
      link: 'mailto:sohamgaikwad45@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8668289736',
      link: 'tel:+918668289736',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nashik, Maharashtra',
      link: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-7xl w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Get In Touch</h2>
            <div className="w-20 h-1 bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-600">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-gray-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors bg-white text-gray-900"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors bg-white text-gray-900"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 focus:outline-none transition-colors resize-none bg-white text-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
