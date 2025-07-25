import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const agents = [
  {
    id: "overthinking-buddy",
    name: "Overthinking Buddy",
    emoji: "🌪️",
    tagline: "Your chaotic but comforting spiral companion",
    description: "Dive into the delightful art of overthinking with a friend who gets it. Spirals thoughts into absurdity, then offers ironic comfort.",
    color: "lavender",
    cta: "Spiral with Me",
    path: "/agents/overthinking-buddy"
  },
  {
    id: "vibesmith",
    name: "Vibesmith",
    emoji: "🎨",
    tagline: "The poetic hype-beast of emotions",
    description: "Transform your mood into custom emotion labels and AI-generated poetry. Because 'sad' is too simple for your complexity.",
    color: "peach",
    cta: "Craft My Vibe",
    path: "/agents/vibesmith"
  },
  {
    id: "void-whisperer",
    name: "Void Whisperer",
    emoji: "🌌",
    tagline: "Mysterious cosmic therapist",
    description: "Share your secrets with the universe. Sometimes you get poetry, sometimes affirmations, sometimes... silence.",
    color: "pale-blue",
    cta: "Whisper into the Void",
    path: "/agents/void-whisperer"
  },
  {
    id: "moodfrog",
    name: "MoodFrog",
    emoji: "🐸",
    tagline: "Your amphibian emotional meteorologist",
    description: "Get personalized emotional weather forecasts with frog wisdom. Today's vibe: You're a pond, not a puddle.",
    color: "mint",
    cta: "Check My Weather",
    path: "/agents/moodfrog"
  }
];

const AgentsOverview = () => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      lavender: "border-lavender/30 hover:border-lavender/50 hover:shadow-lg hover:shadow-lavender/20",
      peach: "border-peach/30 hover:border-peach/50 hover:shadow-lg hover:shadow-peach/20",
      "pale-blue": "border-pale-blue/30 hover:border-pale-blue/50 hover:shadow-lg hover:shadow-pale-blue/20",
      mint: "border-mint/30 hover:border-mint/50 hover:shadow-lg hover:shadow-mint/20"
    };
    return colorMap[color] || "";
  };

  const getButtonClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      lavender: "bg-lavender hover:bg-lavender/90",
      peach: "bg-peach hover:bg-peach/90 text-peach-foreground",
      "pale-blue": "bg-pale-blue hover:bg-pale-blue/90 text-pale-blue-foreground",
      mint: "bg-mint hover:bg-mint/90 text-mint-foreground"
    };
    return colorMap[color] || "";
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Meet Your AI Companions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four unique personalities ready to explore the beautiful chaos of human emotions with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {agents.map((agent) => (
            <Card 
              key={agent.id}
              className={`bg-card/80 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 ${getColorClasses(agent.color)}`}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 animate-bounce">{agent.emoji}</div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {agent.name}
                </CardTitle>
                <p className="text-muted-foreground italic">
                  {agent.tagline}
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
                <Link to={agent.path}>
                  <Button 
                    className={`w-full transition-all duration-300 ${getButtonClasses(agent.color)}`}
                  >
                    {agent.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-card/60 backdrop-blur-sm border-primary/20 max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">✨ How It Works</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each agent uses advanced AI to understand and respond to your emotional input in their unique way. 
                No two interactions are the same - just like real emotions! Your conversations are private and stored 
                locally for your personal journey of self-discovery.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AgentsOverview;