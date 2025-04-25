
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
import History from "./pages/History";
import Portfolio from "./pages/Portfolio";
import Strategies from "./pages/Strategies";
import BestYield from "./pages/BestYield";
import Rebalance from "./pages/Rebalance";
import TestStrategy from "./pages/TestStrategy";
import Resources from "./pages/Resources";
import Tutorials from "./pages/Tutorials";
import Documentation from "./pages/Documentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/history" element={<History />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/best-yield" element={<BestYield />} />
          <Route path="/rebalance" element={<Rebalance />} />
          <Route path="/test-strategy" element={<TestStrategy />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/documentation" element={<Documentation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
