import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AgentsOverview from "./pages/AgentsOverview";
import OverthinkingBuddy from "./pages/agents/OverthinkingBuddy";
import Vibesmith from "./pages/agents/Vibesmith";
import VoidWhisperer from "./pages/agents/VoidWhisperer";
import MoodFrog from "./pages/agents/MoodFrog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agents" element={<AgentsOverview />} />
          <Route path="/agents/overthinking-buddy" element={<OverthinkingBuddy />} />
          <Route path="/agents/vibesmith" element={<Vibesmith />} />
          <Route path="/agents/void-whisperer" element={<VoidWhisperer />} />
          <Route path="/agents/moodfrog" element={<MoodFrog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
