import { CheckCircle2, Target, Lightbulb } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right" className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4 pt-12">
                {/* modern office team collaboration */}
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4">
                {/* startup team coding */}
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
                  alt="Startup coding" 
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -z-10" />
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn delay={0.1}>
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-4xl font-display font-bold mb-6">Pioneering the Future of Digital Transformation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Since our founding, NexusCorp has been driven by a singular vision: to bridge the gap between complex enterprise needs and elegant technological solutions. We don't just write code; we engineer competitive advantages.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <FadeIn delay={0.2} direction="up" className="bg-background p-6 rounded-2xl border border-border/50 hover:shadow-md transition-shadow">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-sm text-muted-foreground">To empower businesses through intuitive, scalable, and cutting-edge software ecosystems.</p>
              </FadeIn>
              
              <FadeIn delay={0.3} direction="up" className="bg-background p-6 rounded-2xl border border-border/50 hover:shadow-md transition-shadow">
                <Lightbulb className="h-8 w-8 text-accent mb-4" />
                <h4 className="font-bold text-lg mb-2">Our Vision</h4>
                <p className="text-sm text-muted-foreground">To be the global standard for enterprise technological excellence and sustainable innovation.</p>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <ul className="space-y-3">
                {['Client-centric agile development', 'Enterprise-grade security standards', 'Continuous continuous innovation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="font-medium text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
