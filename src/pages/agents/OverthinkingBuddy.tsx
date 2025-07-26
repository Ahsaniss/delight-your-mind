import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { geminiService } from "@/services/geminiService";
import { agentPersonalities } from "@/config/agentPersonalities";

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
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Exactly like Home Page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 pt-20">
        {/* Background Elements - Same as Home */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>

        {/* Floating Icons - Same as Home */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-[10%] text-4xl opacity-30">🧠</div>
          <div className="absolute top-1/3 right-[15%] text-3xl opacity-25">✨</div>
          <div className="absolute bottom-1/3 left-[20%] text-3xl opacity-20">💜</div>
          <div className="absolute bottom-1/4 right-[10%] text-5xl opacity-15">🌟</div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="text-8xl mb-6">🌪️</div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Overthinking
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Buddy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Your gentle companion for taming thought spirals and managing anxiety. Let's untangle your thoughts together.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Section - Same background as home page sections */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <CardTitle className="text-center text-xl font-semibold">
                  Let's untangle your thoughts together 🧠
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-gray-50 to-white">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[75%] p-4 rounded-2xl shadow-lg border-2 ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-300'
                            : 'bg-white text-gray-800 border-purple-200'
                        }`}
                      >
                        <p className="whitespace-pre-wrap leading-relaxed text-sm">{message.content}</p>
                        <p className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-purple-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 border-2 border-purple-200 p-4 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-2">
                          <span>🧠</span>
                          <span className="text-purple-600 font-medium">Overthinking Buddy is thinking...</span>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-6 bg-white border-t-2 border-purple-200">
                  <div className="flex gap-4">
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Share what's on your mind... (Enter to send, Shift+Enter for new line)"
                      rows={3}
                      className="border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none flex-1 text-gray-800 rounded-xl"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!input.trim() || isTyping}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Send 🧠
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info Cards - Same style as home page cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    🧠 What I Help With
                  </h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Breaking thought loops and spirals
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Anxiety and worry management
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Perspective shifts on situations
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Practical mindfulness techniques
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Gentle reality checks with humor
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    💡 My Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I understand overthinking because I'm designed to help people navigate complex thoughts. 
                    I won't just tell you to "stop thinking" - instead, I'll help you work with your thoughts 
                    in a gentler, more manageable way. Together, we can transform overwhelming spirals into 
                    constructive reflection.
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

export default OverthinkingBuddy;