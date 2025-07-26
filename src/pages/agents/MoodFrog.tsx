import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { geminiService } from "@/services/geminiService";
import { agentPersonalities } from "@/config/agentPersonalities";

const MoodFrog = () => {
  const { toast } = useToast();
  const [moodValue, setMoodValue] = useState([3]);
  const [isForecasting, setIsForecasting] = useState(false);
  const [response, setResponse] = useState<{ 
    forecast: string;
    frogName: string;
    frogTitle: string;
    mantra: string;
    weatherIcon: string;
  } | null>(null);

  const moodLabels = [
    "Terrible 😞",
    "Not great 😕", 
    "Okay 😐",
    "Pretty good 😊",
    "Amazing! 🌟"
  ];

  const handleForecast = async () => {
    setIsForecasting(true);
    
    try {
      const currentMood = moodLabels[moodValue[0] - 1];
      
      // Enhanced Gemini AI integration
      const prompt = `${agentPersonalities.moodFrog}

Current mood level: ${currentMood} (${moodValue[0]}/5)

As MoodFrog, the playful emotional meteorologist, create a weather-style emotional forecast that includes:

1. A fun weather-style forecast for their emotional day (like "60% chance of giggles, 25% scattered contemplation")
2. A quirky frog meteorologist name (like "Professor Ribbit" or "Dr. Hopsworth")
3. A silly professional title for the frog
4. An encouraging daily mantra/wisdom
5. A weather emoji that matches the forecast

Be playful, encouraging, and use weather metaphors creatively. Help them see their emotions as natural weather patterns that will shift and change. Keep it light-hearted but meaningful. DO NOT use JSON format - respond naturally as the cheerful MoodFrog with these elements woven into your response.`;

      const aiResponse = await geminiService.generateResponse(prompt, agentPersonalities.moodFrog);
      
      // Parse AI response or use structured fallback
      const parsedResponse = parseAIResponse(aiResponse) || generateFallbackResponse(moodValue[0]);
      
      setResponse(parsedResponse);
      
      toast({
        title: "Forecast complete! 🐸",
        description: `${parsedResponse.frogName} has analyzed your emotional atmosphere!`,
      });
      
    } catch (error: any) {
      console.error("MoodFrog AI Error:", error);
      
      // Enhanced fallback response
      const fallbackResponse = generateFallbackResponse(moodValue[0]);
      setResponse(fallbackResponse);
      
      toast({
        title: "Forecast ready! 🐸",
        description: "Your frog meteorologist has prepared a special forecast!",
      });
    } finally {
      setIsForecasting(false);
    }
  };

  const parseAIResponse = (aiResponse: string) => {
    // Try to extract structured data from AI response
    try {
      // Look for patterns in the AI response
      const forecastMatch = aiResponse.match(/forecast[:\-]?\s*([^\.!]+[\.!])/i);
      const nameMatch = aiResponse.match(/(?:I'm|I am|name is|called)\s+([A-Z][a-zA-Z\s]+?)(?:\s|,|\.|!)/i);
      const titleMatch = aiResponse.match(/(?:PhD|Dr\.|Professor|Specialist|Expert)\s+[^,\n]*/i);
      const mantraMatch = aiResponse.match(/(?:mantra|wisdom|remember)[:\-]?\s*([^\.!]+[\.!])/i);
      const emojiMatch = aiResponse.match(/([🌤️🌞🌧️⛅🌈🌩️🌦️☀️🌟⭐🌪️🌊])/);

      if (forecastMatch || nameMatch) {
        return {
          forecast: forecastMatch?.[1]?.trim() || aiResponse.split('.')[0] || "Expect scattered moments of joy with a chance of deep thoughts!",
          frogName: nameMatch?.[1]?.trim() || "Professor Ribbit",
          frogTitle: titleMatch?.[0]?.trim() || "PhD in Emotional Meteorology",
          mantra: mantraMatch?.[1]?.trim() || "You're perfectly where you need to be on your emotional journey!",
          weatherIcon: emojiMatch?.[1] || "🌤️"
        };
      }
    } catch (e) {
      console.log("Parsing AI response failed, using fallback");
    }
    return null;
  };

  const generateFallbackResponse = (mood: number) => {
    const fallbacks = [
      // Mood 1 - Terrible
      {
        forecast: "30% chance of gentle rain clearing into unexpected sunshine, 40% probability of finding small pockets of peace, 30% likelihood of discovering inner strength you didn't know you had",
        frogName: "Dr. Hopeful",
        frogTitle: "Specialist in Weather Pattern Recovery",
        mantra: "Even storm clouds eventually part to reveal the sun—your bright moments are coming.",
        weatherIcon: "🌦️"
      },
      // Mood 2 - Not great
      {
        forecast: "50% chance of gradual brightening throughout the day, 35% scattered moments of clarity, 15% surprise bursts of motivation",
        frogName: "Professor Optimistic",
        frogTitle: "Expert in Emotional Climate Change",
        mantra: "You're like a seed in winter soil—growth is happening even when you can't see it.",
        weatherIcon: "⛅"
      },
      // Mood 3 - Okay
      {
        forecast: "60% chance of steady emotional weather with gentle breeze of contentment, 30% possibility of unexpected joy showers, 10% chance of breakthrough moments",
        frogName: "Meteorologist Ribbit",
        frogTitle: "PhD in Balanced Atmospheric Conditions",
        mantra: "You're a pond, not a puddle—deep, reflective, and full of life.",
        weatherIcon: "🌤️"
      },
      // Mood 4 - Pretty good
      {
        forecast: "70% chance of sustained sunshine with warm emotional currents, 25% probability of infectious laughter clouds, 5% scattered moments of peaceful reflection",
        frogName: "Dr. Sunshine Hopper",
        frogTitle: "Chief of Positive Pressure Systems",
        mantra: "Your good vibes are like ripples in a pond—they spread further than you know.",
        weatherIcon: "🌞"
      },
      // Mood 5 - Amazing
      {
        forecast: "85% brilliant emotional sunshine with high-energy wind currents, 10% chance of euphoric rainbow moments, 5% gentle cooling periods for integration",
        frogName: "Professor Spectacular",
        frogTitle: "Director of Peak Emotional Weather",
        mantra: "You're radiating so much positive energy, you're basically a walking sunrise!",
        weatherIcon: "🌈"
      }
    ];

    return fallbacks[mood - 1];
  };

  const getCurrentMoodEmoji = () => {
    const mood = moodValue[0];
    const emojis = ["😞", "😕", "😐", "😊", "🌟"];
    return emojis[mood - 1];
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
          <div className="absolute top-1/4 left-[10%] text-4xl opacity-30">🐸</div>
          <div className="absolute top-1/3 right-[15%] text-3xl opacity-25">🌤️</div>
          <div className="absolute bottom-1/3 left-[20%] text-3xl opacity-20">🌈</div>
          <div className="absolute bottom-1/4 right-[10%] text-5xl opacity-15">✨</div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="text-8xl mb-6 cursor-pointer hover:animate-bounce" onClick={() => toast({ title: "*ribbit* 🐸" })}>
              🐸
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Mood
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frog
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Playful companion who helps you hop out of bad moods with wisdom, humor, and gentle encouragement.
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
                  What's your current emotional weather? 🌡️
                </CardTitle>
                <p className="text-center text-purple-100 text-sm">
                  Your amphibian meteorologist • Powered by Gemini AI ✨
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">{getCurrentMoodEmoji()}</div>
                  <div className="text-xl font-semibold text-slate-800 mb-2">
                    {moodLabels[moodValue[0] - 1]}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center text-purple-600 font-medium">
                    Slide to adjust your mood level
                  </div>
                  <Slider
                    value={moodValue}
                    onValueChange={setMoodValue}
                    max={5}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>😞</span>
                    <span>😕</span>
                    <span>😐</span>
                    <span>😊</span>
                    <span>🌟</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleForecast}
                  disabled={isForecasting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 text-lg ${
                    isForecasting ? 'animate-pulse' : 'hover:scale-105'
                  }`}
                >
                  {isForecasting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">🌀</span>
                      Analyzing emotional patterns...
                    </span>
                  ) : (
                    "Get My Weather Forecast! 🐸"
                  )}
                </Button>
              </CardContent>
            </Card>

            {response && (
              <div className="space-y-8 mb-12">
                <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-2xl rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
                    <CardTitle className="text-center text-xl font-semibold flex items-center justify-center gap-2">
                      <span>{response.weatherIcon}</span>
                      Today's Emotional Forecast
                      <span className="text-sm opacity-75 ml-2">• via Gemini AI</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-inner border-2 border-green-100">
                      <p className="text-lg text-gray-800 leading-relaxed text-center">
                        {response.forecast}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-2xl rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                    <CardTitle className="text-center text-xl font-semibold">
                      Your Weather Frog 🐸
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl shadow-inner border-2 border-orange-100">
                      <div className="text-6xl mb-4 animate-bounce">🐸</div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {response.frogName}
                      </h3>
                      <p className="text-orange-600 text-sm mb-6 font-medium">
                        {response.frogTitle}
                      </p>
                      <div className="bg-white/80 p-6 rounded-xl">
                        <p className="text-gray-800 italic text-lg leading-relaxed">
                          "{response.mantra}"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button 
                    variant="ghost" 
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                    onClick={() => setResponse(null)}
                  >
                    Get a New Forecast 🔄
                  </Button>
                </div>
              </div>
            )}

            {/* Info Cards - Same style as home page cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    🐸 How MoodFrog Works
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Just like checking the weather before going outside, MoodFrog helps you understand your emotional climate using Gemini AI:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-gray-600">Weather-style emotional forecasts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                      <span className="text-gray-600">Meet your personal weather frog</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-gray-600">Daily mantras for emotional guidance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    🌈 My Hopeful Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I believe emotions are like weather patterns - they're natural, they change, and they all serve a purpose. 
                    Enhanced by AI, I help you see your feelings as temporary weather systems that will shift and evolve. 
                    Even storms bring the rain that helps flowers grow!
                  </p>
                  <div className="mt-4 text-xs text-green-600 bg-green-50 p-3 rounded-lg">
                    🐸 <strong>AI-Enhanced Optimism:</strong> Each forecast is uniquely generated to match your exact mood and provide personalized encouragement.
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

export default MoodFrog;