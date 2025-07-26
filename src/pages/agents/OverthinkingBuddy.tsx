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
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'agent',
      content: "Hey there! 💜 I'm your Overthinking Buddy. I totally get how exhausting it can be when your mind won't stop racing. Share what's on your mind - whether it's something that happened today, a worry that's stuck on repeat, or just that general feeling of your brain being too loud. I'm here to listen and help you work through it together.",
      timestamp: new Date()
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
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
      console.log("🔄 Sending message to Overthinking Buddy:", currentInput);
      
      const aiResponse = await geminiService.generateResponse(
        currentInput, 
        agentPersonalities.overthinkingBuddy
      );
      
      console.log("✨ Got AI response:", aiResponse);
      
      const agentMessage: Message = {
        type: 'agent',
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, agentMessage]);
      
      toast({
        title: "Response received! 💜",
        description: "Your Overthinking Buddy has responded",
      });
      
    } catch (error: any) {
      console.error("💥 Error in chat:", error);
      
      // Provide a helpful fallback response based on the error
      let fallbackResponse = "";
      
      if (error.message.includes('quota') || error.message.includes('rate limit')) {
        fallbackResponse = "I'm getting a lot of requests right now! 😅 While we wait for the AI to catch up, let me help you manually. What specific thoughts are bothering you? I can suggest some breathing exercises or grounding techniques in the meantime.";
      } else if (error.message.includes('API key')) {
        fallbackResponse = "There's a technical issue with my AI connection 🔧 But I'm still here to help! What's been on your mind? I can offer some general overthinking strategies while we fix this.";
      } else {
        fallbackResponse = `I'm having a small technical hiccup (${error.message}) but I'm still your Overthinking Buddy! 💜 Tell me what's been spiraling in your thoughts, and I'll do my best to help you work through it manually.`;
      }
      
      const errorMessage: Message = {
        type: 'agent',
        content: fallbackResponse,
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Fixed Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-3">🌪️</div>
          <h1 className="text-3xl font-bold mb-2">Overthinking Buddy</h1>
          <p className="text-blue-100">Your gentle AI companion for taming thought spirals</p>
        </div>
      </div>

      {/* Main Chat Container - No Overlap */}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          
          {/* Chat Section - Takes most space */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col shadow-xl border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <CardTitle className="text-center text-lg">
                  💬 Let's Talk Through It Together
                </CardTitle>
              </CardHeader>
              
              {/* Messages Area */}
              <div className="flex-1 overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-xl shadow-sm ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white ml-8'
                            : 'bg-white text-gray-800 border border-gray-200 mr-8'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-xl shadow-sm mr-8">
                        <div className="flex items-center gap-2">
                          <span>🤖</span>
                          <span className="text-blue-600 text-sm">Thinking...</span>
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input Area - Fixed at bottom */}
                <div className="border-t border-gray-200 p-4 bg-white">
                  <div className="flex gap-3">
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Share what's on your mind... (Enter to send, Shift+Enter for new line)"
                      rows={2}
                      className="border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none flex-1 text-gray-800"
                      disabled={isTyping}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!input.trim() || isTyping}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Help & Info */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-700 text-sm">
                  🧠 What I Help With
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="text-gray-700 space-y-2 text-xs">
                  <li>• Breaking thought loops</li>
                  <li>• Managing anxiety</li>
                  <li>• Perspective shifts</li>
                  <li>• Mindfulness techniques</li>
                  <li>• Gentle reality checks</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-700 text-sm">
                  💡 Tips for Best Results
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="text-gray-700 space-y-2 text-xs">
                  <li>• Be specific about your thoughts</li>
                  <li>• Share your feelings openly</li>
                  <li>• Ask for techniques you can try</li>
                  <li>• Take breaks if needed</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 shadow-lg">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-orange-700 text-sm">
                  ⚡ Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs border-gray-300 hover:bg-gray-50"
                  onClick={() => setInput("I'm feeling overwhelmed right now...")}
                >
                  I'm overwhelmed
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs border-gray-300 hover:bg-gray-50"
                  onClick={() => setInput("I can't stop thinking about...")}
                >
                  Can't stop thinking
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs border-gray-300 hover:bg-gray-50"
                  onClick={() => setInput("I need help with anxiety...")}
                >
                  Need anxiety help
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverthinkingBuddy;