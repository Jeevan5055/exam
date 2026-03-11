import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { toast } = useToast();
  const contactMutation = useContact();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Failed to send message",
          description: error.message,
        });
      },
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 w-full h-1/2 bg-slate-50 border-b border-border" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
          <FadeIn>
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-4xl font-display font-bold mb-6">Let's Build Something Great</h3>
            <p className="text-muted-foreground text-lg">
              Ready to transform your business? Contact our team to discuss your project requirements.
            </p>
          </FadeIn>
        </div>

        <div className="bg-card rounded-3xl shadow-xl shadow-black/5 border border-border/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
            
            {/* Contact Form */}
            <div className="p-8 lg:p-12 lg:col-span-3">
              <FadeIn delay={0.1}>
                <h4 className="text-2xl font-bold mb-6">Send us a message</h4>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-slate-50 border-border/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" className="bg-slate-50 border-border/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project goals, timeline, and requirements..." 
                              className="min-h-[150px] bg-slate-50 border-border/50 resize-y" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full sm:w-auto px-8"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </FadeIn>
            </div>

            {/* Contact Information & Map */}
            <div className="bg-slate-900 text-white p-8 lg:p-12 lg:col-span-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              
              <FadeIn delay={0.2} className="relative z-10 h-full flex flex-col">
                <h4 className="text-2xl font-bold mb-8">Contact Information</h4>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg text-primary-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white/90">Office Location</h5>
                      <p className="text-white/60 text-sm mt-1">100 Tech Innovation Way<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg text-primary-foreground">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white/90">Phone</h5>
                      <p className="text-white/60 text-sm mt-1">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg text-primary-foreground">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white/90">Email</h5>
                      <p className="text-white/60 text-sm mt-1">hello@nexuscorp.dev<br />support@nexuscorp.dev</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 rounded-xl overflow-hidden h-48 relative border border-white/10">
                  <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center text-white/40">
                    <MapPin className="h-8 w-8 mb-2 opacity-50" />
                    <span className="text-sm font-medium">Google Maps Embed</span>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
