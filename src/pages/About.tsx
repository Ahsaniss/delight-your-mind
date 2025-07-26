import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
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
          <div className="absolute top-1/4 left-[10%] text-4xl opacity-30">❤️</div>
          <div className="absolute top-1/3 right-[15%] text-3xl opacity-25">✨</div>
          <div className="absolute bottom-1/3 left-[20%] text-3xl opacity-20">🌈</div>
          <div className="absolute bottom-1/4 right-[10%] text-5xl opacity-15">🌟</div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              About
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Delightfully You
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Where therapy meets creativity in a digital playground designed for your emotional wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Same background as home page sections */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Mission & Inspiration Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-xl">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    🎯 Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed">
                    To create a safe, playful space where emotional intelligence meets AI creativity. 
                    We believe therapy doesn't have to be serious all the time - sometimes the best 
                    healing happens through laughter, poetry, and unexpected moments of connection.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-xl">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    💡 The Inspiration
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed">
                    Born from a vision to reimagine mental health support, this project 
                    explores how AI can be emotionally intelligent while remaining authentically quirky. 
                    Each agent represents a different facet of the human emotional experience.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main About Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 mb-12">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-xl">
                <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                  🌈 Why "Delightfully You"?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Because you are delightful, exactly as you are - with all your overthinking, your unique vibes, 
                  your secrets whispered into the void, and your ever-changing emotional weather. Our AI agents 
                  aren't here to fix you; they're here to celebrate the beautiful complexity of being human.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">AI-Powered Empathy</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Each agent uses Gemini AI to provide personalized, emotionally intelligent responses 
                    that adapt to your unique needs and communication style.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Diverse Personalities</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Four unique AI companions - from the analytical Overthinking Buddy to the mystical 
                    Void Whisperer - each bringing their own approach to emotional support.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🔒</div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Safe & Private</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Your conversations are confidential and designed to create a judgment-free space 
                    for authentic emotional expression and growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tech Stack Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10 text-center">
                <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center justify-center gap-2">
                  <span>💻</span>
                  Built with Love & Technology
                </h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-2">⚛️</div>
                    <div className="font-semibold text-slate-700">React</div>
                    <div className="text-sm text-gray-500">Frontend Framework</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🎨</div>
                    <div className="font-semibold text-slate-700">Tailwind CSS</div>
                    <div className="text-sm text-gray-500">Styling</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="font-semibold text-slate-700">Gemini AI</div>
                    <div className="text-sm text-gray-500">AI Intelligence</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">❤️</div>
                    <div className="font-semibold text-slate-700">Human Care</div>
                    <div className="text-sm text-gray-500">The Most Important</div>
                  </div>
                </div>
                <p className="text-gray-600 mt-8 leading-relaxed">
                  Crafted with modern web technologies and powered by advanced AI to create emotionally resonant experiences 
                  that genuinely support your mental wellness journey.
                </p>
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
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover which AI companion resonates with your emotional needs and start your path to delightful self-discovery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/agents" className="inline-block">
              <div className="bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl px-12 py-6 text-xl font-bold rounded-xl">
                Meet Your AI Companions
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

export default About;