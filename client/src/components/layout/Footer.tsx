import { Hexagon, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-xl text-primary">
                <Hexagon className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">NexusCorp</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              We build intelligent, scalable solutions for modern enterprises. Transforming complex challenges into elegant digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-white transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-white transition-all">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NexusCorp Technologies. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
