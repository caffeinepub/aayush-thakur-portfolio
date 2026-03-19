import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LoadingScreen } from "./components/LoadingScreen";
import { MouseFollower } from "./components/MouseFollower";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="min-h-screen font-poppins"
        style={{ background: "oklch(0.09 0.025 265)" }}
      >
        <LoadingScreen isLoading={isLoading} />
        <MouseFollower />
        {!isLoading && (
          <>
            <Navbar />
            <main>
              <Hero />
              <Portfolio />
              <About />
              <Services />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
