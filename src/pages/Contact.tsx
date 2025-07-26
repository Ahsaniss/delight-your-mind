import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", "353875a5-9527-46bb-a421-8c3b780a2e5d");
      formData.append("from_name", "Delightfully You Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully! 💫",
          description: "Thank you for reaching out. We'll get back to you soon!",
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error sending message",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Failed to connect to the server. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
          <div className="absolute top-1/4 left-[10%] text-4xl opacity-30">💌</div>
          <div className="absolute top-1/3 right-[15%] text-3xl opacity-25">✨</div>
          <div className="absolute bottom-1/3 left-[20%] text-3xl opacity-20">💜</div>
          <div className="absolute bottom-1/4 right-[10%] text-5xl opacity-15">🌟</div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Get In
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We'd love to hear from you! Share your thoughts, feedback, or just say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Same background as home page sections */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Contact Form Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-2xl rounded-3xl overflow-hidden mb-12">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <CardTitle className="text-center text-2xl font-bold">
                  Send us a message ✨
                </CardTitle>
                <p className="text-center text-purple-100 text-sm">
                  We'd love to connect with you
                </p>
              </CardHeader>
              <CardContent className="p-10">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your delightful name"
                        required
                        disabled={isSubmitting}
                        className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl text-gray-800"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl text-gray-800"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none rounded-xl text-gray-800"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 text-lg ${
                      isSubmitting ? 'animate-pulse' : 'hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⚡</span>
                        Sending your message...
                      </span>
                    ) : (
                      "Send Message ✨"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">💜</div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Support</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    For technical questions, feedback, or help with our AI companions
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Collaboration</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Interested in working together or partnering with us?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🌈</div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Community</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Join our growing community of delightful souls
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-8 text-slate-800 text-center flex items-center justify-center gap-2">
                  <span>❓</span>
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">How quickly will you respond?</h4>
                    <p className="text-gray-600 text-sm">We typically respond within 24-48 hours. For urgent matters, please mention it in your message.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Is my information secure?</h4>
                    <p className="text-gray-600 text-sm">Absolutely! We take privacy seriously and never share your personal information with third parties.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Can I suggest new AI agent features?</h4>
                    <p className="text-gray-600 text-sm">Yes! We love hearing your ideas and feedback. Your suggestions help us improve and create better emotional support tools.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            Ready to Connect?
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you have questions, feedback, or just want to say hello, we're here to listen and help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/agents" className="inline-block">
              <div className="bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl px-12 py-6 text-xl font-bold rounded-xl">
                Try Our AI Companions
                <span className="ml-3">→</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;