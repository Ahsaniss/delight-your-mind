import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const OverthinkingBuddy = () => {
  const { toast } = useToast();
  const [thought, setThought] = useState("");
  const [isSpiraling, setIsSpiraling] = useState(false);
  const [response, setResponse] = useState<{ spiral: string[]; comfort: string } | null>(null);

  const handleSpiral = async () => {
    if (!thought.trim()) return;
    
    setIsSpiraling(true);
    
    // Simulate AI response (replace with actual Gemini API call)
    setTimeout(() => {
      const mockResponse = {
        spiral: [
          `What if everyone at work thinks you're incompetent and they're all secretly talking about you in group chats?`,
          `What if this one moment defines your entire career trajectory and you end up homeless because of this?`,
          `What if the universe is keeping score and this mishap just cost you 47 karma points?`
        ],
        comfort: "But hey, at least you're not a sentient potato wondering if other vegetables find you appealing. 🥔"
      };
      
      setResponse(mockResponse);
      setIsSpiraling(false);
      
      toast({
        title: "Spiral complete! 🌪️",
        description: "Successfully overthought your thought. You're welcome!",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce">🌪️</div>
            <h1 className="text-4xl font-bold mb-4 text-lavender">
              Overthinking Buddy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your chaotic but comforting spiral companion
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-lavender/30 mb-8">
            <CardHeader>
              <CardTitle className="text-lavender text-center">
                What's bouncing around in your brain? 🧠
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={thought}
                onChange={(e) => setThought(e.target.value)}
                placeholder="I embarrassed myself at work today..."
                rows={4}
                className="border-lavender/30 focus:border-lavender resize-none"
              />
              <Button 
                onClick={handleSpiral}
                disabled={!thought.trim() || isSpiraling}
                className={`w-full bg-lavender hover:bg-lavender/90 transition-all duration-300 ${
                  isSpiraling ? 'animate-pulse' : 'hover:scale-105'
                }`}
              >
                {isSpiraling ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">🌀</span>
                    Spiraling...
                  </span>
                ) : (
                  "Spiral with Me!"
                )}
              </Button>
            </CardContent>
          </Card>

          {response && (
            <div className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border-red-300 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-red-500 flex items-center gap-2">
                    <span className="animate-bounce">⚠️</span>
                    Spiral Mode Activated
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {response.spiral.map((scenario, index) => (
                    <div 
                      key={index}
                      className={`p-4 bg-red-50 border-l-4 border-red-300 rounded-r-lg animate-fade-in`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <p className="text-red-700 font-medium">
                        Scenario {index + 1}: {scenario}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-mint/30 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center gap-2">
                    <span>💚</span>
                    Reality Check
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mint-foreground text-lg italic">
                    {response.comfort}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="mt-12 text-center">
            <Card className="bg-card/60 backdrop-blur-sm border-lavender/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-lavender">
                  How Overthinking Buddy Works 🤖
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Share any thought that's been cycling in your mind. I'll take it on a wild ride through 
                  increasingly absurd scenarios, then bring you back to earth with some ironic perspective. 
                  Sometimes the best way to stop overthinking is to overthink so hard it becomes funny.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverthinkingBuddy;