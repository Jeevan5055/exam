import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-48 mt-12 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-48 mb-12 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Innovating the Future
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6">
                Build the Next <br />
                Generation of <br />
                <span className="text-gradient">Digital Products</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                NexusCorp empowers modern enterprises with scalable, high-performance software solutions designed to accelerate growth and drive innovation.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white/50 backdrop-blur border-border hover:bg-white transition-all duration-300">
                  Our Services
                </Button>
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} direction="left" className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-white/50 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ease-out">
              {/* hero business technology abstract background */}
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Technology" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-2xl animate-bounce-slow" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <ChevronRight className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-2xl">99.9%</p>
                  <p className="text-sm font-medium text-muted-foreground">Uptime Guarantee</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
