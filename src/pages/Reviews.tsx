import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    initials: "SC",
    role: "Wellness Coach",
    rating: 5,
    review: "Overthinking Buddy literally saved my 3am spiral sessions. The ironic comfort it provides is exactly what my anxious brain needed. It's like having a friend who gets your chaos.",
    agent: "🌪️ Overthinking Buddy",
    color: "lavender"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    initials: "MR", 
    role: "Creative Director",
    rating: 5,
    review: "Vibesmith turned my 'meh Monday' into 'Melancholic Moon-Gazing Magnificence.' The custom emotion labels are pure poetry. I screenshot every single one.",
    agent: "🎨 Vibesmith",
    color: "peach"
  },
  {
    id: 3,
    name: "Emma Thompson",
    initials: "ET",
    role: "Psychology Student", 
    rating: 5,
    review: "The Void Whisperer gives me chills in the best way. Sometimes I get beautiful poetry, sometimes profound silence. It's therapeutic unpredictability at its finest.",
    agent: "🌌 Void Whisperer",
    color: "sky-blue"
  },
  {
    id: 4,
    name: "James Kim",
    initials: "JK",
    role: "Software Engineer",
    rating: 5,
    review: "MoodFrog's emotional weather forecasts are surprisingly accurate. Professor Ribbit told me I had '40% chance of breakthrough moments' and I landed my dream job that day!",
    agent: "🐸 MoodFrog",
    color: "mint"
  },
  {
    id: 5,
    name: "Luna Patel",
    initials: "LP",
    role: "Therapist",
    rating: 5,
    review: "As a mental health professional, I'm impressed by the emotional intelligence here. My clients love using these agents between sessions for gentle self-exploration.",
    agent: "All Agents",
    color: "primary"
  },
  {
    id: 6,
    name: "Alex Rivers",
    initials: "AR",
    role: "Artist",
    rating: 5,
    review: "This platform celebrates emotional complexity in a way I've never seen before. It's not trying to 'fix' me - it's celebrating the beautiful mess of being human.",
    agent: "✨ Overall Experience",
    color: "secondary"
  }
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, string> = {
    lavender: "border-lavender/30 bg-lavender/5",
    peach: "border-peach/30 bg-peach/5",
    "sky-blue": "border-sky-blue/30 bg-sky-blue/5",
    mint: "border-mint/30 bg-mint/5",
    primary: "border-primary/30 bg-primary/5",
    secondary: "border-secondary/30 bg-secondary/5"
  };
  return colorMap[color] || "";
};

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Community Reviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real humans who found connection with our AI companions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 text-center shadow-primary">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card backdrop-blur-sm border-secondary/20 text-center shadow-secondary">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">2.5K+</div>
              <p className="text-muted-foreground">Happy Users</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card backdrop-blur-sm border-accent/20 text-center shadow-accent">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">15K+</div>
              <p className="text-muted-foreground">Conversations</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 text-center shadow-glow">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Would Recommend</p>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <Card 
              key={review.id}
              className={`bg-gradient-card backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow ${getColorClasses(review.color)}`}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="ring-2 ring-primary/20">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{review.review}"
                </p>
                <div className="text-sm font-medium text-primary">
                  {review.agent}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-hero text-white max-w-2xl mx-auto shadow-glow">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Join thousands of others who've discovered a new way to connect with their emotions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/agents" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105">
                  Meet Your AI Companions
                </a>
                <a href="/about" className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Learn Our Story
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Reviews;