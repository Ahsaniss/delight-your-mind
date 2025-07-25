import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Vibesmith = () => {
  const { toast } = useToast();
  const [mood, setMood] = useState("");
  const [isCrafting, setIsCrafting] = useState(false);
  const [response, setResponse] = useState<{ 
    emotionLabel: string; 
    poem: string; 
    playlist?: string;
  } | null>(null);

  const handleCraftVibe = async () => {
    if (!mood.trim()) return;
    
    setIsCrafting(true);
    
    // Simulate AI response (replace with actual Gemini API call)
    setTimeout(() => {
      const mockResponse = {
        emotionLabel: "Post-Drizzle Melancholy with Hints of Cosmic Wandering",
        poem: `In the space between raindrops,\nYour heart holds entire universes.\nDeflated balloon dreams float upward,\nCarrying whispers of tomorrow's sunshine.`,
        playlist: "Lo-fi Beats for Broken Robots"
      };
      
      setResponse(mockResponse);
      setIsCrafting(false);
      
      toast({
        title: "Vibe crafted! ✨",
        description: "Your emotional masterpiece is ready!",
      });
    }, 2000);
  };

  const moodEmojis = ["😊", "😢", "😤", "🤔", "😴", "🌧️", "☀️", "🌙"];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce">🎨</div>
            <h1 className="text-4xl font-bold mb-4 text-peach">
              Vibesmith
            </h1>
            <p className="text-xl text-muted-foreground">
              The poetic hype-beast of emotions
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-peach/30 mb-8">
            <CardHeader>
              <CardTitle className="text-peach text-center">
                What's your current emotional frequency? 🌈
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {moodEmojis.map((emoji) => (
                  <Button
                    key={emoji}
                    variant="ghost"
                    size="lg"
                    onClick={() => setMood(emoji)}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    {emoji}
                  </Button>
                ))}
              </div>
              
              <div className="text-center text-muted-foreground">or</div>
              
              <Input
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="I feel like a deflated balloon..."
                className="border-peach/30 focus:border-peach text-center"
              />
              
              <Button 
                onClick={handleCraftVibe}
                disabled={!mood.trim() || isCrafting}
                className={`w-full bg-peach hover:bg-peach/90 text-peach-foreground transition-all duration-300 ${
                  isCrafting ? 'animate-pulse' : 'hover:scale-105'
                }`}
              >
                {isCrafting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">✨</span>
                    Crafting your vibe...
                  </span>
                ) : (
                  "Craft My Vibe!"
                )}
              </Button>
            </CardContent>
          </Card>

          {response && (
            <div className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border-peach/30 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-peach text-center">
                    Your Custom Emotion Label 🏷️
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-gradient-agent p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {response.emotionLabel}
                    </h3>
                    <p className="text-white/80">Certified by the Vibesmith</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-lavender/30 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-lavender text-center">
                    Your Personalized Poem 📝
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-lavender/10 p-8 rounded-lg">
                    <pre className="text-lg text-foreground whitespace-pre-wrap font-serif leading-relaxed">
                      {response.poem}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {response.playlist && (
                <Card className="bg-card/80 backdrop-blur-sm border-mint/30 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-mint text-center">
                      Recommended Soundtrack 🎵
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-mint/10 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-mint mb-2">
                        {response.playlist}
                      </h4>
                      <p className="text-muted-foreground">
                        Perfect for your current vibe frequency
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          <div className="mt-12 text-center">
            <Card className="bg-card/60 backdrop-blur-sm border-peach/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-peach">
                  The Vibesmith Experience 🎭
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Because "sad" is too basic for your emotional complexity. I transform your moods into 
                  artisanal emotion labels and craft personalized poetry that captures the nuance of your 
                  feelings. Sometimes I'll even suggest the perfect playlist to match your newly-labeled vibe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vibesmith;