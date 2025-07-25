import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Delightfully You
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            An emotionally intelligent playground where AI agents explore the beautiful chaos of human feelings with you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/agents">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105">
                Meet Your AI Companions ✨
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Agent Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link to="/agents/overthinking-buddy" className="group">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce">🌪️</div>
                <h3 className="text-white font-semibold mb-2">Overthinking Buddy</h3>
                <p className="text-white/80 text-sm">Your chaotic spiral companion</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/agents/vibesmith" className="group">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce">🎨</div>
                <h3 className="text-white font-semibold mb-2">Vibesmith</h3>
                <p className="text-white/80 text-sm">Poetic hype-beast of emotions</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/agents/void-whisperer" className="group">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:animate-pulse">🌌</div>
                <h3 className="text-white font-semibold mb-2">Void Whisperer</h3>
                <p className="text-white/80 text-sm">Mysterious cosmic therapist</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/agents/moodfrog" className="group">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce">🐸</div>
                <h3 className="text-white font-semibold mb-2">MoodFrog</h3>
                <p className="text-white/80 text-sm">Emotional meteorologist</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Tagline */}
        <div className="text-center mt-16">
          <p className="text-white/80 text-lg italic">
            "Because you are delightful, exactly as you are"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
