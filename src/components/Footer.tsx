import { Link } from "react-router-dom";
import { Heart, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Delightfully You</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              An emotionally intelligent playground where AI meets the beautiful chaos of human feelings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:hello@delightfullyyou.com" className="text-white/70 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/agents" className="text-white/80 hover:text-white transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-white/80 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Companions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Companions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/agents/overthinking-buddy" className="text-white/80 hover:text-white transition-colors">
                  🌪️ Overthinking Buddy
                </Link>
              </li>
              <li>
                <Link to="/agents/vibesmith" className="text-white/80 hover:text-white transition-colors">
                  🎨 Vibesmith
                </Link>
              </li>
              <li>
                <Link to="/agents/void-whisperer" className="text-white/80 hover:text-white transition-colors">
                  🌌 Void Whisperer
                </Link>
              </li>
              <li>
                <Link to="/agents/moodfrog" className="text-white/80 hover:text-white transition-colors">
                  🐸 MoodFrog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2024 Delightfully You. Made with <Heart className="inline w-4 h-4 text-red-300" /> for emotional wellbeing.
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Powered by AI • Built for Humans
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;