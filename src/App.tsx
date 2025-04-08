import { ThemeProvider } from "@/contexts/themeProvider"
import { Router } from "@/router/Router"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
      <Toaster />
    </ThemeProvider>
  )
}

export default App
