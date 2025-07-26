import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Brain, ArrowRight, Users, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900">
      {/* Fixed, glassy header */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 relative">
        {/* Floating Emojis */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-32 left-10 text-6xl opacity-20 animate-bounce">🧠</div>
          <div className="absolute top-52 right-20 text-5xl opacity-15 animate-pulse">✨</div>
          <div className="absolute bottom-40 left-20 text-4xl opacity-25 animate-bounce">💜</div>
          <div className="absolute bottom-20 right-10 text-7xl opacity-10 animate-pulse">🌟</div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-200 text-sm font-semibold">AI-Powered Mental Wellness</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
                Delight Your
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Mind
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-xl">
                Meet your personal AI therapeutic agents designed to help you navigate different emotional states and mental challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/agents">
                  <Button size="lg" className="bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white transition-all duration-300 hover:scale-105 shadow-lg px-8 py-4 text-lg font-semibold group w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-gray-400 text-gray-200 hover:bg-gray-700/30 transition-all duration-300 px-8 py-4 text-lg font-semibold backdrop-blur-sm w-full sm:w-auto">
                    Watch Demo 🎥
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-gray-400 text-sm">Happy Users</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-2">4</div>
                  <div className="text-gray-400 text-sm">AI Agents</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Available</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Main Visual Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full">
                <div className="text-center mb-8">
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Your AI Companions</h3>
                  <p className="text-gray-300 text-sm">Choose the perfect match for your emotional needs</p>
                </div>
                
                {/* Mini Agent Preview */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <span className="text-3xl">🌪️</span>
                    <div className="flex-1">
                      <div className="text-white font-medium">Overthinking Buddy</div>
                      <div className="text-gray-400 text-sm">Taming thought spirals</div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <span className="text-3xl">🎨</span>
                    <div className="flex-1">
                      <div className="text-white font-medium">Vibesmith</div>
                      <div className="text-gray-400 text-sm">Creative mood architect</div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <span className="text-3xl">🌌</span>
                    <div className="flex-1">
                      <div className="text-white font-medium">Void Whisperer</div>
                      <div className="text-gray-400 text-sm">Mystical counselor</div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                    <span className="text-3xl">🐸</span>
                    <div className="flex-1">
                      <div className="text-white font-medium">MoodFrog</div>
                      <div className="text-gray-400 text-sm">Playful mood enhancer</div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 shadow-lg animate-bounce">
                <div className="text-white text-sm font-semibold">💡 AI Powered</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-4 shadow-lg animate-pulse">
                <div className="text-white text-sm font-semibold">🔒 Private & Safe</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 text-sm mb-8">Trusted by thousands of users worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">10,000+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Cards Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
              Meet Your AI Companions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each agent is uniquely designed to help with specific emotional needs and challenges
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Link to="/agents/overthinking-buddy" className="group">
              <Card className="bg-white/90 backdrop-blur-sm border-gray-300 hover:border-slate-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-6xl mb-6 group-hover:animate-bounce transition-transform duration-300">🌪️</div>
                  <h3 className="text-slate-700 font-bold text-xl mb-4">Overthinking Buddy</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">Your gentle companion for taming thought spirals and managing anxiety</p>
                  <div className="inline-flex items-center text-slate-600 font-medium">
                    Try it now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/agents/vibesmith" className="group">
              <Card className="bg-white/90 backdrop-blur-sm border-gray-300 hover:border-slate-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-6xl mb-6 group-hover:animate-bounce transition-transform duration-300">🎨</div>
                  <h3 className="text-slate-700 font-bold text-xl mb-4">Vibesmith</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">The creative architect of emotions who transforms your mood</p>
                  <div className="inline-flex items-center text-slate-600 font-medium">
                    Try it now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/agents/void-whisperer" className="group">
              <Card className="bg-white/90 backdrop-blur-sm border-gray-300 hover:border-slate-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-6xl mb-6 group-hover:animate-pulse transition-transform duration-300">🌌</div>
                  <h3 className="text-slate-700 font-bold text-xl mb-4">Void Whisperer</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">Mystical counselor for exploring deep emotions and darkness</p>
                  <div className="inline-flex items-center text-slate-600 font-medium">
                    Try it now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/agents/moodfrog" className="group">
              <Card className="bg-white/90 backdrop-blur-sm border-gray-300 hover:border-slate-400 transition-all duration-500 transform hover:scale-105 hover:shadow-xl h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-6xl mb-6 group-hover:animate-bounce transition-transform duration-300">🐸</div>
                  <h3 className="text-slate-700 font-bold text-xl mb-4">MoodFrog</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">Playful companion who helps you hop out of bad moods</p>
                  <div className="inline-flex items-center text-slate-600 font-medium">
                    Try it now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
              Why Choose Our AI Companions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional mental wellness support powered by advanced artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-gray-300 shadow-lg hover:scale-105 transition-all duration-300 h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-slate-700">Emotionally Intelligent</h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  Each AI agent understands nuance, context, and the beautiful complexity of human emotions with advanced natural language processing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-300 shadow-lg hover:scale-105 transition-all duration-300 h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-700">Uniquely Personal</h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  No two interactions are the same. Each response is crafted specifically for your emotional moment and personal situation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-300 shadow-lg hover:scale-105 transition-all duration-300 h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-r from-zinc-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-zinc-700">Safe & Supportive</h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  A judgment-free space where your emotions are celebrated, not fixed or minimized. Privacy and safety are our top priorities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple steps to start your mental wellness journey with AI companions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-700">Choose Your Agent</h3>
              <p className="text-gray-600 leading-relaxed">Select the AI companion that best matches your current emotional needs and challenges</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-700">Share Your Thoughts</h3>
              <p className="text-gray-600 leading-relaxed">Express your feelings, concerns, or whatever's on your mind in a safe, private environment</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-zinc-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-zinc-700">Receive Support</h3>
              <p className="text-gray-600 leading-relaxed">Get personalized, AI-powered guidance and emotional support tailored to your unique situation</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
