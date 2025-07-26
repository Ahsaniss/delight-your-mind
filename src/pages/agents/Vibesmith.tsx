import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
        poem: aiResponse,
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
          <div className="absolute top-1/4 left-[10%] text-4xl opacity-30">🎨</div>
          <div className="absolute top-1/3 right-[15%] text-3xl opacity-25">✨</div>
          <div className="absolute bottom-1/3 left-[20%] text-3xl opacity-20">🌈</div>
          <div className="absolute bottom-1/4 right-[10%] text-5xl opacity-15">🎭</div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="text-8xl mb-6">🎨</div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Vibe
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                smith
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              The creative architect of emotions who transforms your mood into something beautiful and meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Same background as home page sections */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-2xl rounded-3xl overflow-hidden mb-12">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <CardTitle className="text-center text-xl font-semibold">
                  What's your current emotional frequency? 🌈
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {moodEmojis.map((emoji) => (
                    <Button
                      key={emoji}
                      variant="ghost"
                      size="lg"
                      onClick={() => setMood(emoji)}
                      className="text-3xl hover:scale-110 transition-all duration-300 hover:bg-purple-100 border-2 border-transparent hover:border-purple-300 rounded-xl p-4"
                    >
                      {emoji}
                    </Button>
                  ))}
                </div>

                <div className="text-center text-purple-600 font-semibold text-lg">or</div>

                <Input
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="I feel like a deflated balloon..."
                  className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-center rounded-xl text-lg py-4 text-gray-800"
                />

                <Button
                  onClick={handleCraftVibe}
                  disabled={!mood.trim() || isCrafting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 text-lg ${
                    isCrafting ? "animate-pulse" : "hover:scale-105"
                  }`}
                >
                  {isCrafting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⚡</span>
                      Crafting your vibe...
                    </span>
                  ) : (
                    "Craft My Vibe! ✨"
                  )}
                </Button>
              </CardContent>
            </Card>

            {response && (
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <CardTitle className="text-center text-xl font-semibold">
                    Your Custom Vibe ⚡
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-inner border-2 border-purple-100">
                    <div className="text-gray-800 whitespace-pre-wrap leading-relaxed text-lg">
                      {response.poem}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Info Cards - Same style as home page cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    🎨 What I Create
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Personalized emotion labels
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Poetic mood descriptions
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Creative perspective shifts
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Artistic emotional insights
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    ✨ My Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I see emotions as raw creative material waiting to be transformed. 
                    Every feeling - even the difficult ones - contains beauty and meaning. 
                    I help you discover the artistic essence of your emotional experience and 
                    craft something meaningful from whatever you're feeling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vibesmith;