import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Routes } from '@/routes';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Routes />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;