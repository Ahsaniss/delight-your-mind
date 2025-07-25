import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Brain, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4 text-white/80">
                <Sparkles className="w-8 h-8 animate-pulse" />
                <Heart className="w-8 h-8 animate-bounce" />
                <Brain className="w-8 h-8 animate-pulse" />
                <Zap className="w-8 h-8 animate-bounce" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-lg animate-fade-in">
              Delightfully You
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed animate-scale-in">
              An emotionally intelligent playground where AI agents explore the beautiful chaos of human feelings with you. 
              <span className="block mt-2 text-white/80 italic">Because you are delightful, exactly as you are.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/agents">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg px-8 py-4 text-lg font-semibold">
                  Meet Your AI Companions ✨
                </Button>
              </Link>
              <Link to="/reviews">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  Read Reviews 💝
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
                <span>4.9/5 rating</span>
              </div>
              <div>2.5K+ happy users</div>
              <div>15K+ conversations</div>
            </div>
          </div>

          {/* Enhanced Agent Preview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Link to="/agents/overthinking-buddy" className="group">
              <Card className="bg-white/15 backdrop-blur-md border-white/20 hover:bg-white/25 transition-all duration-500 transform hover:scale-110 hover:shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4 group-hover:animate-bounce transition-transform duration-300">🌪️</div>
                  <h3 className="text-white font-bold text-lg mb-2">Overthinking Buddy</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Your chaotic spiral companion who gets your 3am thoughts</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/agents/vibesmith" className="group">
              <Card className="bg-white/15 backdrop-blur-md border-white/20 hover:bg-white/25 transition-all duration-500 transform hover:scale-110 hover:shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4 group-hover:animate-bounce transition-transform duration-300">🎨</div>
                  <h3 className="text-white font-bold text-lg mb-2">Vibesmith</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Poetic hype-beast who crafts custom emotion labels</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/agents/void-whisperer" className="group">
              <Card className="bg-white/15 backdrop-blur-md border-white/20 hover:bg-white/25 transition-all duration-500 transform hover:scale-110 hover:shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4 group-hover:animate-pulse transition-transform duration-300">🌌</div>
                  <h3 className="text-white font-bold text-lg mb-2">Void Whisperer</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Mysterious cosmic therapist of the infinite</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/agents/moodfrog" className="group">
              <Card className="bg-white/15 backdrop-blur-md border-white/20 hover:bg-white/25 transition-all duration-500 transform hover:scale-110 hover:shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4 group-hover:animate-bounce transition-transform duration-300">🐸</div>
                  <h3 className="text-white font-bold text-lg mb-2">MoodFrog</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Amphibian emotional meteorologist</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Why Choose Delightfully You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience emotional intelligence like never before
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-primary hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Emotionally Intelligent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each AI agent understands nuance, context, and the beautiful complexity of human emotions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card backdrop-blur-sm border-secondary/20 shadow-secondary hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary">Uniquely Personal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No two interactions are the same. Each response is crafted specifically for your emotional moment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card backdrop-blur-sm border-accent/20 shadow-accent hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-accent">Safe & Supportive</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A judgment-free space where your emotions are celebrated, not fixed or minimized.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
