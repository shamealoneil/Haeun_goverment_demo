
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import InfoCard from './InfoCard';
import { FileText, User, Calendar, Search, Info, Mail } from 'lucide-react';

const ServicesSection = () => {
  const { ref, isIntersecting } = useScrollAnimation();
  
  const services = [
    {
      title: "Document Applications",
      description: "Apply for official documents, licenses, and certificates online.",
      icon: <FileText size={24} />,
      linkText: "Apply Now",
      linkUrl: "#"
    },
    {
      title: "Citizen Registration",
      description: "Register for government services and create your citizen profile.",
      icon: <User size={24} />,
      linkText: "Register",
      linkUrl: "#"
    },
    {
      title: "Schedule Appointments",
      description: "Book appointments with government agencies and departments.",
      icon: <Calendar size={24} />,
      linkText: "Book Now",
      linkUrl: "#"
    },
    {
      title: "Information Search",
      description: "Find information on public services, policies, and regulations.",
      icon: <Search size={24} />,
      linkText: "Search",
      linkUrl: "#"
    },
    {
      title: "Public Announcements",
      description: "Stay updated with the latest government announcements and news.",
      icon: <Info size={24} />,
      linkText: "View All",
      linkUrl: "#"
    },
    {
      title: "Contact Officials",
      description: "Reach out to government officials and representatives.",
      icon: <Mail size={24} />,
      linkText: "Contact",
      linkUrl: "#"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 
          ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Government Services
          </h2>
          <p className="text-xl text-gray-600">
            Access a wide range of government services designed to meet your needs efficiently and effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InfoCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              linkText={service.linkText}
              linkUrl={service.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
