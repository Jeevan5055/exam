import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const PROJECTS = [
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    /* fintech modern analytics dashboard interface */
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "HealthConnect App",
    category: "Mobile App",
    /* doctor using mobile app medical tech */
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Global Supply Chain",
    category: "Logistics Platform",
    /* global supply chain shipping abstract map */
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AI Marketing Tool",
    category: "SaaS Product",
    /* ai technology future interface */
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn className="max-w-2xl">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Work</h2>
            <h3 className="text-4xl font-display font-bold">Featured Projects</h3>
            <p className="text-muted-foreground text-lg mt-4">
              Explore some of our most impactful work driving digital transformation for forward-thinking brands.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <button className="text-primary font-semibold inline-flex items-center hover:underline">
              View All Projects <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-100 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-primary/20 text-primary-foreground backdrop-blur-md px-3 py-1 rounded-full inline-block text-xs font-semibold mb-3 border border-white/20">
                    {project.category}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <div className="flex items-center text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Explore Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  );
}
