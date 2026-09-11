import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './components/theme-provider';
import { router } from './routes/router';
import { useIsPublicRoute } from './shared/hooks/useIsPublicRoute';
import { Toaster } from '@/components/ui/sonner';
import { useBodyScrollLock } from './shared/hooks/use-body-scroll-lock';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  // const isPublicRoute = useIsPublicRoute();

  // // enable body scroll on public route (landing, login, signup), disable on /app
  // useBodyScrollLock(isPublicRoute);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster />
      {/* vercel services */}
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
