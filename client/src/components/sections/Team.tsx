import { Linkedin, Twitter } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const TEAM = [
  {
    name: "Eleanor Vance",
    role: "Chief Executive Officer",
    bio: "Former VP of Engineering with 15 years experience in scaling enterprise tech teams.",
    /* confident professional woman ceo headshot */
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Marcus Chen",
    role: "Head of Product",
    bio: "Product visionary passionate about UX and data-driven development cycles.",
    /* professional young man product manager headshot */
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Lead Architect",
    bio: "Cloud architecture specialist. Opensource contributor and tech speaker.",
    /* professional woman software architect headshot */
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "David Kim",
    role: "Director of AI",
    bio: "PhD in Machine Learning. Leading our integrations of emerging LLM technologies.",
    /* professional man tech leader headshot */
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Team</h2>
            <h3 className="text-4xl font-display font-bold mb-6">The Minds Behind the Code</h3>
            <p className="text-muted-foreground text-lg">
              A diverse group of engineers, designers, and strategists working together to build exceptional software.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white/20 hover:bg-white text-white hover:text-primary backdrop-blur-md p-2 rounded-full transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="bg-white/20 hover:bg-white text-white hover:text-primary backdrop-blur-md p-2 rounded-full transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm line-clamp-2">{member.bio}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  );
}
