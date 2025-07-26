import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const agents = [
  {
    id: "overthinking-buddy",
    name: "Overthinking Buddy",
    emoji: "🌪️",
    tagline: "Your gentle companion for taming thought spirals",
    description: "Your gentle companion for taming thought spirals and managing anxiety. Let's untangle your thoughts together.",
    color: "from-blue-500 to-purple-600",
    cta: "Start Untangling",
    path: "/agents/overthinking-buddy"
  },
  {
    id: "vibesmith",
    name: "Vibesmith",
    emoji: "🎨",
    tagline: "The creative architect of emotions",
    description: "The creative architect of emotions who transforms your mood into something beautiful and meaningful.",
    color: "from-purple-500 to-pink-600",
    cta: "Transform My Mood",
    path: "/agents/vibesmith"
  },
  {
    id: "void-whisperer",
    name: "Void Whisperer",
    emoji: "🌌",
    tagline: "Mystical counselor for deep emotions",
    description: "Mystical counselor for exploring deep emotions and darkness. Navigate the depths of your inner world.",
    color: "from-indigo-500 to-purple-600",
    cta: "Explore the Depths",
    path: "/agents/void-whisperer"
  },
  {
    id: "moodfrog",
    name: "MoodFrog",
    emoji: "🐸",
    tagline: "Playful companion for mood enhancement",
    description: "Playful companion who helps you hop out of bad moods with wisdom, humor, and gentle encouragement.",
    color: "from-green-500 to-teal-600",
    cta: "Hop to Better Vibes",
    path: "/agents/moodfrog"
  }
];

const AgentsOverview = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Same as Home Page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 pt-20">
        {/* Background Elements - Same as Home */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>

        {/* Floating Icons - Same as Home */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-[10%] text-4xl opacity-30">🧠</div>
          <div className="absolute top-1/3 right-[15%] text-3xl opacity-25">✨</div>
          <div className="absolute bottom-1/3 left-[20%] text-3xl opacity-20">💜</div>
          <div className="absolute bottom-1/4 right-[10%] text-5xl opacity-15">🌟</div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Meet Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Companions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Four unique personalities designed with distinct emotional intelligence to help with specific mental wellness needs.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Section - Same background as home page sections */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {agents.map((agent, index) => (
              <Link key={agent.id} to={agent.path} className="group">
                <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full overflow-hidden">
                  <CardContent className="p-8 text-center h-full flex flex-col relative">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${agent.color}`}></div>
                    <div className="text-7xl mb-6">
                      {agent.emoji}
                    </div>
                    <h3 className="text-slate-800 font-bold text-xl mb-4 group-hover:text-purple-700 transition-colors">
                      {agent.name}
                    </h3>
                    <p className="text-purple-600 font-medium text-sm mb-4 italic">
                      {agent.tagline}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                      {agent.description}
                    </p>
                    <div className="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                      {agent.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* How It Works Section */}
          <div className="mt-20 text-center">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-6 text-slate-800 flex items-center justify-center gap-3">
                  ✨ How It Works
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Each agent uses advanced AI to understand and respond to your emotional input in their unique way. 
                  No two interactions are the same - just like real emotions! Your conversations are private and secure, 
                  designed for your personal journey of self-discovery and mental wellness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section - Same as Home */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent">
              Why Our AI Companions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each companion brings unique strengths to support your mental wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { title: "Personalized Support", desc: "Each agent adapts to your specific emotional needs and communication style", icon: "🎯" },
              { title: "24/7 Availability", desc: "Your companions are always ready to listen and provide support whenever you need it", icon: "🌙" },
              { title: "Private & Secure", desc: "All conversations are confidential and designed to create a safe space for expression", icon: "🔒" }
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-10 text-center h-full flex flex-col">
                  <div className="text-6xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            Ready to Meet Your Perfect Match?
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Start your journey with any of our AI companions. Each one is designed to support you in their own unique way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/agents/overthinking-buddy">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl px-12 py-6 text-xl font-bold">
                Start with Overthinking Buddy
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AgentsOverview;