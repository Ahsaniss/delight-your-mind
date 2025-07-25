import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 💫",
      description: "Thanks for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you! Share your thoughts, feedback, or just say hello.
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-lavender/20 mb-8">
            <CardHeader>
              <CardTitle className="text-center text-lavender">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your delightful name"
                    required
                    className="border-lavender/30 focus:border-lavender"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-peach/30 focus:border-peach"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    required
                    className="border-mint/30 focus:border-mint"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Send Message ✨
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/60 backdrop-blur-sm border-lavender/20 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">💜</div>
                <h3 className="font-semibold text-lavender mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">For technical questions and feedback</p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-peach/20 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🌸</div>
                <h3 className="font-semibold text-peach mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">Interested in working together?</p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-mint/20 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl mb-2">🌿</div>
                <h3 className="font-semibold text-mint mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Join our growing community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;