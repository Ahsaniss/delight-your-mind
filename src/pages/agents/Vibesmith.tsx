import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { geminiService } from "@/services/geminiService";
import { agentPersonalities } from "@/config/agentPersonalities";

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

    try {
      const prompt = `${agentPersonalities.vibesmith}

User mood: ${mood}

As Vibesmith, create a response with:
1. A creative emotion label for this mood
2. A short, poetic description (4 lines)  
3. A recommended playlist name (optional)

Respond naturally and conversationally. DO NOT use JSON format. Just respond as the energetic Vibesmith character with these elements included naturally in your response.`;

      const aiResponse = await geminiService.generateResponse(prompt, agentPersonalities.vibesmith);

      setResponse({
        emotionLabel: "Custom Vibe Created!",
        poem: aiResponse, // The full AI response as poem/text
        playlist: undefined
      });

      toast({
        title: "Vibe crafted! ✨",
        description: "Your emotional masterpiece is ready!",
      });
    } catch (error: any) {
      setResponse({
        emotionLabel: "Vibesmith is having a technical hiccup!",
        poem: error.message || "Sorry, I couldn't craft your vibe right now.",
        playlist: undefined
      });
      toast({
        title: "Error",
        description: error.message || "AI service unavailable.",
        variant: "destructive"
      });
    } finally {
      setIsCrafting(false);
    }
  };

  const moodEmojis = ["😊", "😢", "😤", "🤔", "😴", "🌧️", "☀️", "🌙"];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-slate-100 to-zinc-100">
      <Navigation />

      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce">🎨</div>
            <h1 className="text-4xl font-bold mb-4 text-slate-800 drop-shadow">
              Vibesmith
            </h1>
            <p className="text-xl text-gray-700">
              The creative architect of emotions
            </p>
          </div>

          <Card className="bg-white/90 shadow-xl border-2 border-gray-300 mb-8 rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-slate-600 to-gray-700 text-white rounded-t-2xl">
              <CardTitle className="text-center text-xl">
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

              <div className="text-center text-peach-400 font-semibold">or</div>

              <Input
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="I feel like a deflated balloon..."
                className="border-peach-300 focus:border-peach-500 text-center rounded-lg"
              />

              <Button
                onClick={handleCraftVibe}
                disabled={!mood.trim() || isCrafting}
                className={`w-full bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 ${
                  isCrafting ? "animate-pulse" : "hover:scale-105"
                }`}
              >
                {isCrafting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⚡</span>
                    Crafting your vibe...
                  </span>
                ) : (
                  "Craft My Vibe!"
                )}
              </Button>
            </CardContent>
          </Card>

          {response && (
            <Card className="bg-white/90 shadow-lg border-2 border-gray-300 rounded-2xl animate-fade-in">
              <CardHeader className="bg-gradient-to-r from-zinc-100 to-slate-100">
                <CardTitle className="text-slate-700 text-center text-xl">
                  Your Custom Vibe ⚡
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-gray-50 p-8 rounded-lg shadow border">
                  {/* Display AI response as plain text - no JSON */}
                  <div className="text-gray-800 whitespace-pre-wrap leading-relaxed text-base">
                    {response.poem}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="bg-gradient-to-r from-slate-700 via-gray-700 to-zinc-800 text-white py-8 mt-16 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-base font-semibold tracking-wide">
              © {new Date().getFullYear()} Vibesmith — Crafting emotional experiences
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:underline font-semibold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline font-semibold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:underline font-semibold transition-colors">
                Support
              </a>
              <a href="#" className="hover:underline font-semibold transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Vibesmith;