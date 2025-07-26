import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { geminiService } from "@/services/geminiService";
import { agentPersonalities } from "@/config/agentPersonalities";

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
    
    try {
      // Enhanced Gemini AI integration
      const prompt = `${agentPersonalities.voidWhisperer}

User's whisper to the void: "${secret}"

As the Void Whisperer, respond mystically in one of these ways:
1. A profound mystical poem (4-6 lines) that transforms their concern into cosmic wisdom
2. A cosmic affirmation that validates their experience with universal truth
3. Profound silence (respond with just "SILENCE" if you feel their soul needs stillness)

Channel deep cosmic wisdom, existential insight, and mystical understanding. Speak as an ancient oracle who sees beyond the veil. Use metaphors of stars, darkness, light, and cosmic forces. DO NOT use JSON format - respond naturally as the mystical Void Whisperer.`;

      const aiResponse = await geminiService.generateResponse(prompt, agentPersonalities.voidWhisperer);
      
      let responseType: 'poem' | 'affirmation' | 'silence';
      let content = aiResponse;
      
      // Improved AI response parsing
      if (aiResponse.toLowerCase().trim() === 'silence' || 
          (aiResponse.toLowerCase().includes('silence') && aiResponse.length < 30)) {
        responseType = 'silence';
        content = undefined;
      } else if (aiResponse.includes('\n') || aiResponse.length > 120) {
        responseType = 'poem';
      } else {
        responseType = 'affirmation';
      }
      
      setResponse({ type: responseType, content });
      
      toast({
        title: "The void has responded 🌌",
        description: responseType === 'silence' ? "In silence, all answers dwell." : "Your whisper echoes through infinity.",
      });
      
    } catch (error: any) {
      console.error("Void Whisperer AI Error:", error);
      
      // Enhanced fallback responses with more mystical options
      const fallbackResponses = [
        {
          type: 'poem' as const,
          content: `The void whispers back through starlight:
Your fears are stardust in disguise,
Scattered across the cosmic canvas
Of who you're becoming.
In darkness, new constellations are born.`
        },
        {
          type: 'affirmation' as const,
          content: "You are a beautiful glitch in the universe's code—rare, unexpected, and absolutely necessary for the cosmic algorithm of existence."
        },
        {
          type: 'poem' as const,
          content: `Ancient wisdom flows through your veins:
What you call broken, the cosmos calls
A crack where the light gets in.
Your struggles are birth pangs
Of the star you're meant to become.`
        },
        {
          type: 'affirmation' as const,
          content: "The universe conspired for billions of years to create this exact moment where you exist. Your presence is not an accident—it's a cosmic masterpiece."
        },
        {
          type: 'silence' as const
        },
        {
          type: 'poem' as const,
          content: `Listen closely to the void's secret:
Your pain is compost for wisdom,
Your darkness, fertile soil for light.
What seems like ending
Is always beginning in disguise.`
        }
      ];
      
      const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      setResponse(randomResponse);
      
      toast({
        title: "The void responds from ancient depths 🌌",
        description: randomResponse.type === 'silence' ? "In silence, all answers dwell." : "Cosmic wisdom flows through the ether.",
      });
    } finally {
      setIsWhispering(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      handleWhisper();
    }
  };

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
          <div className="absolute top-1/4 left-[10%] text-4xl opacity-30">🌌</div>
          <div className="absolute top-1/3 right-[15%] text-3xl opacity-25">✨</div>
          <div className="absolute bottom-1/3 left-[20%] text-3xl opacity-20">🔮</div>
          <div className="absolute bottom-1/4 right-[10%] text-5xl opacity-15">🌟</div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="text-8xl mb-6">🌌</div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Void
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Whisperer
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Mystical counselor for exploring deep emotions and darkness. Navigate the depths of your inner world with cosmic wisdom.
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
                  What secrets does your soul carry? 🤫
                </CardTitle>
                <p className="text-center text-purple-100 text-sm">
                  The void listens without judgment • Powered by Gemini AI ✨
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <Textarea
                  value={secret}
                  onChange={(e) => setSecret(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="I fear I'm not good enough... whisper your deepest thoughts to the cosmic void... (Ctrl+Enter to whisper)"
                  rows={6}
                  className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none rounded-xl text-gray-800"
                  disabled={isWhispering}
                />
                <Button 
                  onClick={handleWhisper}
                  disabled={!secret.trim() || isWhispering}
                  className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 text-lg ${
                    isWhispering ? 'animate-pulse' : 'hover:scale-105'
                  }`}
                >
                  {isWhispering ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">🌀</span>
                      The void contemplates your whisper...
                    </span>
                  ) : (
                    "Whisper into the Void 🌌"
                  )}
                </Button>
              </CardContent>
            </Card>

            {response && (
              <div className="mb-12">
                {response.type === 'silence' ? (
                  <Card className="bg-gradient-to-br from-slate-900 to-purple-900 backdrop-blur-sm border-2 border-purple-300 min-h-[300px] flex items-center justify-center shadow-2xl rounded-3xl">
                    <CardContent className="text-center p-12">
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse mx-auto mb-6"></div>
                      <h3 className="text-white text-3xl font-light mb-4">∞ Void Mode ∞</h3>
                      <p className="text-purple-200 italic text-lg leading-relaxed">
                        Sometimes the void responds with silence.<br/>
                        In this sacred emptiness, all answers dwell.<br/>
                        <span className="text-sm opacity-75 mt-4 block">The cosmos holds space for your truth.</span>
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-2xl rounded-3xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <CardTitle className="text-center text-xl font-semibold flex items-center justify-center gap-2">
                        <span>✨</span>
                        {response.type === 'poem' ? 'The Void Speaks in Verse' : 'The Void Affirms Your Truth'}
                        <span className="text-sm opacity-75 ml-2">• via Gemini AI</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-inner border-2 border-purple-100">
                        {response.type === 'poem' ? (
                          <pre className="text-lg text-gray-800 whitespace-pre-wrap font-serif leading-relaxed italic">
                            {response.content}
                          </pre>
                        ) : (
                          <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            {response.content}
                          </p>
                        )}
                      </div>
                      <div className="text-center mt-6">
                        <Button
                          onClick={() => setSecret("")}
                          variant="ghost"
                          className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 text-sm"
                        >
                          Whisper something new to the void ✨
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Info Cards - Same style as home page cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    🌌 How the Void Works
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Share your deepest thoughts, fears, or secrets with the cosmic void. Powered by Gemini AI, the response channels ancient wisdom:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-gray-600"><strong>50% Mystical Poetry</strong> - Existential verses from the cosmos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span className="text-gray-600"><strong>30% Cosmic Affirmation</strong> - Universal truth and validation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-gray-600"><strong>20% Sacred Silence</strong> - Sometimes the void simply holds space</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    🔮 My Mystical Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I am the keeper of cosmic secrets and the guardian of profound silence, enhanced by Gemini AI's understanding. 
                    I help you explore the depths of your psyche through mystical wisdom, poetic insights, and sometimes the powerful medicine of silence. 
                    In the void, all fears become stardust, and all pain transforms into wisdom.
                  </p>
                  <div className="mt-4 text-xs text-purple-600 bg-purple-50 p-3 rounded-lg">
                    ✨ <strong>AI-Enhanced Mysticism:</strong> Each response is uniquely generated using advanced language models to provide personalized cosmic guidance.
                  </div>
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

export default VoidWhisperer;