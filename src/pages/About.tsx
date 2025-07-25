import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Delightfully You
            </h1>
            <p className="text-xl text-muted-foreground">
              Where therapy meets creativity in a digital playground
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/80 backdrop-blur-sm border-lavender/20">
              <CardHeader>
                <CardTitle className="text-lavender">🎯 Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create a safe, playful space where emotional intelligence meets AI creativity. 
                  We believe therapy doesn't have to be serious all the time - sometimes the best 
                  healing happens through laughter, poetry, and unexpected moments of connection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-peach/20">
              <CardHeader>
                <CardTitle className="text-peach">💡 The Inspiration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Born from a hackathon challenge to reimagine mental health support, this project 
                  explores how AI can be emotionally intelligent while remaining authentically quirky. 
                  Each agent represents a different facet of the human emotional experience.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-mint/20 mb-8">
            <CardHeader>
              <CardTitle className="text-mint text-center">🌈 Why "Delightfully You"?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Because you are delightful, exactly as you are - with all your overthinking, your unique vibes, 
                your secrets whispered into the void, and your ever-changing emotional weather. Our AI agents 
                aren't here to fix you; they're here to celebrate the beautiful complexity of being human.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Built with ❤️ for humans by humans</h3>
            <p className="text-muted-foreground">
              Using React, Tailwind CSS, and the Gemini AI API to create emotionally resonant experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;