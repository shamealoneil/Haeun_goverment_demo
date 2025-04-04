
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary to-primary/80">
      <div 
        className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)' }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white animate-fadeInUp animate-delay-1">
              Serving Citizens with Transparency
            </h1>
            <p className="text-xl md:text-2xl text-white/80 animate-fadeInUp animate-delay-2">
              Connecting you with essential government services and information, all in one place.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeInUp animate-delay-3">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={scrollToServices}
              >
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-fadeIn animate-delay-4">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Announcements</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "New Passport Application System",
                    date: "April 1, 2025",
                  },
                  {
                    title: "Tax Filing Deadline Extended",
                    date: "March 28, 2025",
                  },
                  {
                    title: "Public Transportation Updates",
                    date: "March 25, 2025",
                  },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg bg-white/5 animate-fadeIn`} 
                    style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                  >
                    <p className="text-sm text-white/60">{item.date}</p>
                    <h4 className="font-medium text-white">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToServices}
            aria-label="Scroll down"
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
