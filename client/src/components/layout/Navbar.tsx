import { useState, useEffect } from "react";
import { Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Team", href: "#team" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Hexagon className="h-6 w-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">NexusCorp</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact">
              <Button className="rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 bg-primary">
                Contact Us
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium p-2 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full rounded-xl">Contact Us</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
