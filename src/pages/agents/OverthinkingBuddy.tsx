import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TypingIndicator } from "@/components/ui/loading-spinner";
import { PrivacyNotice } from "@/components/ui/privacy-notice";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { geminiService } from "@/services/geminiService";
import { agentPersonalities } from "@/config/agentPersonalities";
import { Brain, MessageCircle, Lightbulb, Heart } from "lucide-react";

interface Message {
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

const OverthinkingBuddy = () => {
  const { toast } = useToast();
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>(
    [
      {
        type: 'agent',
        content: "Hey there! 🧠 I'm your Overthinking Buddy. I understand how exhausting it can be when your mind won't stop racing. Share what's on your mind - whether it's something that happened today, a worry that's stuck on repeat, or just that general feeling of your brain being too loud. I'm here to listen and help you work through it together.",
        timestamp: new Date()
      }
    ]
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      const conversationHistory = messages.slice(-3).map(msg =>
        `${msg.type === 'user' ? 'User' : 'Overthinking Buddy'}: ${msg.content}`
      ).join('\n');

      const prompt = `${agentPersonalities.overthinkingBuddy}

Previous conversation:
${conversationHistory}

User just said: "${currentInput}"

Respond naturally as the Overthinking Buddy. Provide genuine support, practical advice, and gentle guidance. Keep the response conversational, warm, and helpful. Do NOT use JSON format - just respond naturally as a supportive friend.`;

      const aiResponse = await geminiService.generateResponse(prompt, agentPersonalities.overthinkingBuddy);

      const agentMessage: Message = {
        type: 'agent',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
      
      toast({
        title: "Response received! 🧠",
        description: "Your Overthinking Buddy has responded",
      });

    } catch (error: any) {
      const errorMessage: Message = {
        type: 'agent',
        content: "I'm having a small technical hiccup, but I'm still your Overthinking Buddy! 🧠 Tell me what's been spiraling in your thoughts, and I'll do my best to help you work through it manually.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      toast({
        title: "Connection Issue 🌪️",
        description: "AI service hiccup - but I'm still here to help!",
        variant: "destructive"
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col agent-overthinking bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />

      <div className="container mx-auto px-6 py-16 flex-1">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="relative inline-block mb-6">
              <div className="text-8xl animate-float filter drop-shadow-lg">🌪️</div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-xl -z-10"></div>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Overthinking Buddy
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your gentle companion for taming thought spirals and finding peace in mental chaos
            </p>
            
            {/* Agent Features */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Brain className="w-4 h-4" />
                Anxiety Support
              </div>
              <div className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                Thought Analysis
              </div>
              <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <Lightbulb className="w-4 h-4" />
                Perspective Shifts
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mb-8 animate-fade-in">
            <PrivacyNotice />
          </div>

          {/* Enhanced Chat Interface */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-float border-0 mb-8 rounded-3xl overflow-hidden animate-scale-in">
            <CardHeader className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-6">
              <CardTitle className="text-center text-xl font-display flex items-center justify-center gap-3">
                <Brain className="w-6 h-6" />
                Let's untangle your thoughts together
                <Heart className="w-5 h-5 text-pink-200" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[500px] overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-blue-50/50 to-white border-b border-blue-100"
                   style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgb(147 197 253) transparent' }}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex items-start gap-3 max-w-[80%] ${
                      message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}>
                      {/* Avatar */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-soft flex-shrink-0 ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600' 
                          : 'bg-gradient-to-r from-indigo-500 to-purple-600'
                      }`}>
                        {message.type === 'user' ? (
                          <span className="text-white text-sm font-bold">You</span>
                        ) : (
                          <span className="text-xl">🌪️</span>
                        )}
                      </div>
                      
                      {/* Message Bubble */}
                      <div className={`p-4 rounded-2xl shadow-card transition-smooth hover:shadow-glow ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                          : 'bg-white text-gray-800 border border-blue-100'
                      }`}>
                        <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-2 opacity-75 ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-soft">
                        <span className="text-xl animate-pulse">🌪️</span>
                      </div>
                      <div className="bg-white text-gray-600 border border-blue-100 p-4 rounded-2xl shadow-card">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">Buddy is thinking...</span>
                          <TypingIndicator className="text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-6 bg-white border-t border-blue-100">
                <div className="flex gap-4">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Share what's on your mind... I'm here to listen and help you work through it 💙"
                    rows={3}
                    className="border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none flex-1 text-gray-800 rounded-2xl transition-smooth shadow-soft"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isTyping}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-2xl font-semibold shadow-button transition-bounce hover:shadow-glow disabled:opacity-50"
                  >
                    {isTyping ? <TypingIndicator className="text-white" /> : (
                      <>
                        Send
                        <Brain className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            <Card className="bg-white/80 backdrop-blur-sm shadow-card border-0 rounded-2xl hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:scale-110 transition-bounce">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-gray-800">
                  What I Help With
                </h3>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Breaking thought loops and spirals
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    Anxiety and worry management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Perspective shifts on situations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Practical mindfulness techniques
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-card border-0 rounded-2xl hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:scale-110 transition-bounce">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-gray-800">
                  My Approach
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  I understand overthinking because I'm designed to help people navigate complex thoughts. 
                  I won't just tell you to "stop thinking" - instead, I'll help you work with your thoughts 
                  in a gentler, more manageable way.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-card border-0 rounded-2xl hover:shadow-glow transition-smooth group md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:scale-110 transition-bounce">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-gray-800">
                  Why It Works
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  By acknowledging your thoughts instead of fighting them, we can gently guide your mind toward 
                  clarity and peace. Think of me as your personal thought navigator.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OverthinkingBuddy;