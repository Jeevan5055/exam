import { Code2, Smartphone, Cloud, Shield, Database, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const SERVICES = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    description: "Full-stack web applications tailored to your business logic, built on robust and scalable architectures.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile experiences that engage users and deliver seamless performance.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Cloud-native architectures, serverless deployments, and DevOps automation for ultimate scalability.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Auditing",
    description: "Comprehensive security reviews, penetration testing, and implementation of zero-trust networks.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Complex data pipelines, warehousing solutions, and business intelligence dashboards.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Embedding large language models and machine learning to automate operations and enhance intelligence.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl font-display font-bold mb-6">Comprehensive Engineering Services</h3>
            <p className="text-muted-foreground text-lg">
              We provide end-to-end technology solutions. From initial strategy and prototyping to deployment and scaling, our team has you covered.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-sm shadow-black/5 border border-border/50 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 h-full">
                  <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
