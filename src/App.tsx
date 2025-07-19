import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from '@/components/ScrollToTop';
import PageLoader from '@/components/PageLoader'; // Assuming you have a loader component

// Lazy-loaded pages
const Index = lazy(() => import('@/pages/Index'));
const Join = lazy(() => import('@/pages/Join'));
const About = lazy(() => import('@/pages/About'));
const Team = lazy(() => import('@/pages/Team'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/join" element={<Join />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
