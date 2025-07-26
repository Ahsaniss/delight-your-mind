import { Link } from "react-router-dom";
import { Brain, Mail, MapPin, Phone, Twitter, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">Delight Your Mind</span>
            </Link>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Empowering mental wellness through AI-powered therapeutic agents.
              Your journey to emotional balance starts here.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>hello@delightyourmind.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <span>123 Wellness Street<br />Mental Health District<br />Mindful City, MC 12345</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get mental wellness tips and updates delivered to your inbox.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-slate-950">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© 2024 Delight Your Mind. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for mental wellness.</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/terms" className="hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/privacy" className="hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="hover:text-purple-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;