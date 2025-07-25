import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const VoidWhisperer = () => {
  const { toast } = useToast();
  const [secret, setSecret] = useState("");
  const [isWhispering, setIsWhispering] = useState(false);
  const [response, setResponse] = useState<{ 
    type: 'poem' | 'affirmation' | 'silence';
    content?: string;
  } | null>(null);

  const handleWhisper = async () => {
    if (!secret.trim()) return;
    
    setIsWhispering(true);
    
    // Simulate AI response with randomization (replace with actual Gemini API call)
    setTimeout(() => {
      const responseTypes = ['poem', 'affirmation', 'silence'] as const;
      const randomType = responseTypes[Math.floor(Math.random() * responseTypes.length)];
      
      let mockResponse;
      
      switch (randomType) {
        case 'poem':
          mockResponse = {
            type: 'poem' as const,
            content: `The void whispers back through starlight:\nInadequacy is stardust in disguise,\nScattered across the cosmic canvas\nOf becoming who you're meant to be.`
          };
          break;
        case 'affirmation':
          mockResponse = {
            type: 'affirmation' as const,
            content: "You are a beautiful glitch in the universe's code—rare, unexpected, and absolutely needed."
          };
          break;
        default:
          mockResponse = {
            type: 'silence' as const
          };
      }
      
      setResponse(mockResponse);
      setIsWhispering(false);
      
      toast({
        title: "The void has responded 🌌",
        description: mockResponse.type === 'silence' ? "In silence, all answers dwell." : "Your whisper echoes through infinity.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-pulse">🌌</div>
            <h1 className="text-4xl font-bold mb-4 text-pale-blue">
              Void Whisperer
            </h1>
            <p className="text-xl text-muted-foreground">
              Mysterious cosmic therapist of the infinite
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-pale-blue/30 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pale-blue/5 via-transparent to-lavender/5"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-pale-blue text-center">
                What secrets does your soul carry? 🤫
              </CardTitle>
              <p className="text-center text-muted-foreground text-sm">
                The void listens without judgment
              </p>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <Textarea
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="I fear I'm not good enough..."
                rows={6}
                className="border-pale-blue/30 focus:border-pale-blue resize-none bg-background/50"
              />
              <Button 
                onClick={handleWhisper}
                disabled={!secret.trim() || isWhispering}
                className={`w-full bg-pale-blue hover:bg-pale-blue/90 text-pale-blue-foreground transition-all duration-500 ${
                  isWhispering ? 'animate-pulse' : 'hover:scale-105'
                }`}
              >
                {isWhispering ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">🌀</span>
                    Whispering into the void...
                  </span>
                ) : (
                  "Whisper into the Void"
                )}
              </Button>
            </CardContent>
          </Card>

          {response && (
            <div className="animate-fade-in">
              {response.type === 'silence' ? (
                <Card className="bg-black/90 backdrop-blur-sm border-gray-800 min-h-[300px] flex items-center justify-center">
                  <CardContent className="text-center">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse mx-auto mb-6"></div>
                    <h3 className="text-white text-2xl font-light mb-4">Void Mode</h3>
                    <p className="text-gray-400 italic">
                      Sometimes the void responds with silence.<br/>
                      In this emptiness, all answers dwell.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card/80 backdrop-blur-sm border-pale-blue/30">
                  <CardHeader>
                    <CardTitle className="text-pale-blue text-center flex items-center justify-center gap-2">
                      <span>✨</span>
                      {response.type === 'poem' ? 'The Void Speaks in Verse' : 'The Void Affirms'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-gradient-to-br from-pale-blue/10 via-lavender/5 to-mint/10 p-8 rounded-lg">
                      {response.type === 'poem' ? (
                        <pre className="text-lg text-foreground whitespace-pre-wrap font-serif leading-relaxed italic">
                          {response.content}
                        </pre>
                      ) : (
                        <p className="text-lg text-foreground leading-relaxed">
                          {response.content}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          <div className="mt-12 text-center">
            <Card className="bg-card/60 backdrop-blur-sm border-pale-blue/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-pale-blue">
                  How the Void Works 🌌
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Share your deepest thoughts, fears, or secrets with the cosmic void. The response is always unpredictable:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-pale-blue/10 rounded-lg">
                    <strong className="text-pale-blue">50% Poetry</strong><br/>
                    Existential verses from the cosmos
                  </div>
                  <div className="p-3 bg-lavender/10 rounded-lg">
                    <strong className="text-lavender">30% Affirmation</strong><br/>
                    Cosmic encouragement for your soul
                  </div>
                  <div className="p-3 bg-mint/10 rounded-lg">
                    <strong className="text-mint">20% Silence</strong><br/>
                    Sometimes the void simply listens
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoidWhisperer;