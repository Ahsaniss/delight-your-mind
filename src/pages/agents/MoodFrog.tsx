import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    
    // Simulate AI response (replace with actual Gemini API call)
    setTimeout(() => {
      const mockResponse = {
        forecast: "60% chance of unexpected giggles, 25% scattered moments of deep contemplation, 15% spontaneous dance breaks",
        frogName: "Professor Ribbit",
        frogTitle: "PhD in Emotional Meteorology",
        mantra: "Today's wisdom: You're a pond, not a puddle—deep, reflective, and full of life.",
        weatherIcon: "🌤️"
      };
      
      setResponse(mockResponse);
      setIsForecasting(false);
      
      toast({
        title: "Forecast complete! 🐸",
        description: "Professor Ribbit has analyzed your emotional atmosphere!",
      });
    }, 2000);
  };

  const getCurrentMoodEmoji = () => {
    const mood = moodValue[0];
    const emojis = ["😞", "😕", "😐", "😊", "🌟"];
    return emojis[mood - 1];
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 cursor-pointer hover:animate-bounce" onClick={() => toast({ title: "*ribbit* 🐸" })}>
              🐸
            </div>
            <h1 className="text-4xl font-bold mb-4 text-mint">
              MoodFrog
            </h1>
            <p className="text-xl text-muted-foreground">
              Your amphibian emotional meteorologist
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-mint/30 mb-8">
            <CardHeader>
              <CardTitle className="text-mint text-center">
                What's your current emotional weather? 🌡️
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-4">{getCurrentMoodEmoji()}</div>
                <div className="text-lg font-medium text-foreground mb-2">
                  {moodLabels[moodValue[0] - 1]}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-center text-muted-foreground">
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
                <div className="flex justify-between text-xs text-muted-foreground">
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
                className={`w-full bg-mint hover:bg-mint/90 text-mint-foreground transition-all duration-300 ${
                  isForecasting ? 'animate-pulse' : 'hover:scale-105'
                }`}
              >
                {isForecasting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">🌀</span>
                    Analyzing emotional patterns...
                  </span>
                ) : (
                  "Get My Weather Forecast!"
                )}
              </Button>
            </CardContent>
          </Card>

          {response && (
            <div className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border-mint/30 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-mint text-center flex items-center justify-center gap-2">
                    <span>{response.weatherIcon}</span>
                    Today's Emotional Forecast
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-mint/10 p-6 rounded-lg">
                    <p className="text-lg text-foreground leading-relaxed">
                      {response.forecast}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-peach/30 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-peach text-center">
                    Your Weather Frog 🐸
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-peach/10 p-6 rounded-lg">
                    <div className="text-4xl mb-3 animate-bounce">🐸</div>
                    <h3 className="text-xl font-bold text-peach mb-1">
                      {response.frogName}
                    </h3>
                    <p className="text-peach/80 text-sm mb-4">
                      {response.frogTitle}
                    </p>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <p className="text-foreground italic">
                        "{response.mantra}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-lavender/30 animate-fade-in">
                <CardContent className="pt-6 text-center">
                  <Button 
                    variant="ghost" 
                    className="text-lavender hover:text-lavender/80"
                    onClick={() => window.location.reload()}
                  >
                    Get a New Forecast 🔄
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="mt-12 text-center">
            <Card className="bg-card/60 backdrop-blur-sm border-mint/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-mint">
                  How MoodFrog Works 🐸
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Just like checking the weather before going outside, MoodFrog helps you understand 
                  your emotional climate. Share your current mood level and receive a personalized 
                  forecast with weather-style predictions, meet your assigned weather frog, and get 
                  a daily mantra to guide your emotional journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodFrog;