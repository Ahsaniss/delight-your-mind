import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Brain, ArrowRight, Users, Shield, Clock, Zap, Star, Check, Play } from "lucide-react";

const Index = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 pt-20">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-[10%] text-4xl opacity-30">🧠</div>
            <div className="absolute top-1/3 right-[15%] text-3xl opacity-25">✨</div>
            <div className="absolute bottom-1/3 left-[20%] text-3xl opacity-20">💜</div>
            <div className="absolute bottom-1/4 right-[10%] text-5xl opacity-15">🌟</div>
          </div>

          <div className="relative container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              {/* Left Content */}
              <div className="space-y-8 text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 hover:bg-white/15 transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-200 text-sm font-semibold">AI-Powered Mental Wellness</span>
                </div>

                {/* Title */}
                <div>
                  <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
                    Delight
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Your Mind
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Meet your personal AI therapeutic agents designed to help you navigate different emotional states and mental challenges with compassion and intelligence.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/agents">
                    <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105 shadow-xl px-10 py-6 text-lg font-semibold w-full sm:w-auto">
                      Get Started Free
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 px-10 py-6 text-lg font-semibold backdrop-blur-sm w-full sm:w-auto flex items-center justify-center gap-2">
                      <Play className="w-5 h-5" />
                      Watch Demo
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-bold text-white mb-2">10K+</div>
                    <div className="text-purple-300 text-sm font-medium">Happy Users</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-bold text-white mb-2">4</div>
                    <div className="text-blue-300 text-sm font-medium">AI Agents</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-pink-300 text-sm font-medium">Available</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Clean Dashboard Preview */}
              <div className="relative flex justify-center">
                {/* Main Card - Centered and Clean */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full">
                  <div className="text-center mb-8">
                    <div className="flex justify-center gap-4 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2">Your AI Companions</h3>
                    <p className="text-purple-200 text-sm">Choose the perfect match for your emotional journey</p>
                  </div>

                  {/* Agent List */}
                  <div className="space-y-4">
                    {[
                      { emoji: "🌪️", name: "Overthinking Buddy", desc: "Calming anxious thoughts", status: "online" },
                      { emoji: "🎨", name: "Vibesmith", desc: "Creative mood transformation", status: "online" },
                      { emoji: "🌌", name: "Void Whisperer", desc: "Deep emotional guidance", status: "online" },
                      { emoji: "🐸", name: "MoodFrog", desc: "Playful mood enhancement", status: "busy" }
                    ].map((agent, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 cursor-pointer group">
                        <span className="text-4xl">{agent.emoji}</span>
                        <div className="flex-1">
                          <div className="text-white font-semibold">{agent.name}</div>
                          <div className="text-gray-400 text-sm">{agent.desc}</div>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${agent.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Features Inside Card */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 text-yellow-400 mb-1">
                          <Zap className="w-4 h-4" />
                          <span className="text-xs font-semibold">AI Powered</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 text-green-400 mb-1">
                          <Shield className="w-4 h-4" />
                          <span className="text-xs font-semibold">Secure & Private</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-24 text-center">
              <p className="text-purple-300 text-lg mb-8 font-medium">Trusted by mental health professionals worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-purple-200">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Users className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="font-semibold">10,000+ Active Users</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Shield className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="font-semibold">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Clock className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors" />
                  <span className="font-semibold">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent">
                Meet Your AI Companions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Each agent is uniquely designed with distinct personalities to help with specific emotional needs
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                { to: "/agents/overthinking-buddy", emoji: "🌪️", name: "Overthinking Buddy", desc: "Your gentle companion for taming thought spirals and managing anxiety", color: "from-blue-500 to-purple-600" },
                { to: "/agents/vibesmith", emoji: "🎨", name: "Vibesmith", desc: "The creative architect of emotions who transforms your mood", color: "from-purple-500 to-pink-600" },
                { to: "/agents/void-whisperer", emoji: "🌌", name: "Void Whisperer", desc: "Mystical counselor for exploring deep emotions and darkness", color: "from-indigo-500 to-purple-600" },
                { to: "/agents/moodfrog", emoji: "🐸", name: "MoodFrog", desc: "Playful companion who helps you hop out of bad moods", color: "from-green-500 to-teal-600" }
              ].map((agent, index) => (
                <Link key={index} to={agent.to} className="group">
                  <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full overflow-hidden">
                    <CardContent className="p-8 text-center h-full flex flex-col relative">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${agent.color}`}></div>
                      <div className="text-7xl mb-6">
                        {agent.emoji}
                      </div>
                      <h3 className="text-slate-800 font-bold text-xl mb-4 group-hover:text-purple-700 transition-colors">
                        {agent.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                        {agent.desc}
                      </p>
                      <div className="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                        Try it now 
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Advanced AI technology meets human empathy to create a truly supportive experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                { icon: Brain, title: "Emotionally Intelligent", desc: "Our AI understands context, nuance, and the complexity of human emotions with advanced natural language processing.", color: "from-blue-600 to-purple-600" },
                { icon: Sparkles, title: "Uniquely Personal", desc: "Every interaction is tailored to your specific emotional state and personal journey, ensuring relevant support.", color: "from-purple-600 to-pink-600" },
                { icon: Shield, title: "Safe & Secure", desc: "Your privacy is paramount. All conversations are encrypted and never stored or shared with third parties.", color: "from-pink-600 to-red-600" }
              ].map((feature, index) => (
                <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full group">
                  <CardContent className="p-10 text-center h-full flex flex-col">
                    <div className={`w-24 h-24 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                      <feature.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-800 group-hover:text-purple-700 transition-colors">
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

        {/* How It Works */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Three simple steps to start your mental wellness journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                { step: "1", title: "Choose Your Agent", desc: "Select the AI companion that resonates with your current emotional needs and personality.", color: "from-blue-600 to-purple-600" },
                { step: "2", title: "Share Your Thoughts", desc: "Express yourself freely in a judgment-free environment designed for emotional exploration.", color: "from-purple-600 to-pink-600" },
                { step: "3", title: "Receive Guidance", desc: "Get personalized, AI-powered support tailored to your unique situation and goals.", color: "from-pink-600 to-red-600" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-28 h-28 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl`}>
                    <span className="text-4xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {item.desc}
                  </p>
                </div>
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
              Ready to Transform Your Mind?
            </h2>
            <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who have found peace, clarity, and emotional balance with our AI companions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/agents">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl px-12 py-6 text-xl font-bold">
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-purple-200">
                <Check className="w-5 h-5 text-green-400" />
                <span className="font-medium">Free to start • No credit card required</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
