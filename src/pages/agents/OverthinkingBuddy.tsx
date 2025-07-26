import Navigation from "@/components/Navigation";
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-slate-100 to-blue-100">
      <Navigation />

      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce">🌪️</div>
            <h1 className="text-4xl font-bold mb-4 text-slate-800 drop-shadow">
              Overthinking Buddy
            </h1>
            <p className="text-xl text-gray-700">
              Your gentle companion for taming thought spirals
            </p>
          </div>

          <Card className="bg-white/95 shadow-xl border-2 border-gray-300 mb-8 rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-slate-600 to-gray-700 text-white rounded-t-2xl">
              <CardTitle className="text-center text-xl">
                Let's untangle your thoughts together 🧠
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-b-2xl border-b-2 border-gray-200">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] p-4 rounded-2xl shadow-md border ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-slate-600 to-gray-700 text-white border-gray-300'
                          : 'bg-white text-gray-800 border-gray-200'
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed text-sm">{message.content}</p>
                      <p className={`text-xs mt-2 ${
                        message.type === 'user' ? 'text-gray-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border border-gray-200 p-4 rounded-2xl shadow-md">
                      <div className="flex items-center gap-2">
                        <span>🧠</span>
                        <span className="text-slate-600">Overthinking Buddy is thinking...</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
                <div className="flex gap-3">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Share what's on your mind... (Enter to send, Shift+Enter for new line)"
                    rows={3}
                    className="border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 resize-none flex-1 text-gray-800 rounded-xl"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isTyping}
                    className="bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
                  >
                    Send 🧠
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/90 shadow-lg border-2 border-gray-300 rounded-xl">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-700 flex items-center gap-2">
                  🧠 What I Help With
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Breaking thought loops and spirals</li>
                  <li>• Anxiety and worry management</li>
                  <li>• Perspective shifts on situations</li>
                  <li>• Practical mindfulness techniques</li>
                  <li>• Gentle reality checks with humor</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 shadow-lg border-2 border-slate-300 rounded-xl">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center gap-2">
                  💡 My Approach
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I understand overthinking because I'm designed to help people navigate complex thoughts. 
                  I won't just tell you to "stop thinking" - instead, I'll help you work with your thoughts 
                  in a gentler, more manageable way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="bg-gradient-to-r from-slate-700 via-gray-700 to-slate-800 text-white py-8 mt-16 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-base font-semibold tracking-wide">
              © {new Date().getFullYear()} Overthinking Buddy — Helping you untangle your thoughts
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:underline font-semibold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline font-semibold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:underline font-semibold transition-colors">
                Support
              </a>
              <a href="#" className="hover:underline font-semibold transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OverthinkingBuddy;