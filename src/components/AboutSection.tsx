
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const AboutSection = () => {
  const leftSection = useScrollAnimation();
  const rightSection = useScrollAnimation();
  const statsSection = useScrollAnimation();

  const stats = [
    { value: '15M+', label: 'Citizens Served' },
    { value: '250+', label: 'Services Offered' },
    { value: '99%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftSection.ref}
            className={`transition-all duration-700 ${
              leftSection.isIntersecting 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Our Government Portal
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to create a more transparent, efficient, and accessible government for all citizens. We strive to provide high-quality services that meet the diverse needs of our population.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Through innovation and continuous improvement, we aim to simplify processes, reduce bureaucracy, and enhance the overall citizen experience when interacting with government institutions.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-1 w-16 bg-accent"></div>
              <p className="text-lg font-medium">Serving since 1995</p>
            </div>
          </div>
          
          <div 
            ref={rightSection.ref}
            className={`relative rounded-xl overflow-hidden transition-all duration-700 ${
              rightSection.isIntersecting 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="aspect-video bg-gradient-to-br from-primary to-primary/70 rounded-xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 mb-6">
                To build a more inclusive society where government services are accessible to all citizens, regardless of their location or circumstances.
              </p>
              <div className="flex flex-col space-y-4">
                {["Transparency", "Efficiency", "Accessibility", "Innovation"].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                      <svg 
                        className="h-3 w-3 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div 
          ref={statsSection.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-700 ${
            statsSection.isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => {
            // Use our countUp hook to animate the values
            const animatedValue = useCountUp({
              end: stat.value,
              duration: 2000,
              start: 0,
              isAnimating: statsSection.isIntersecting
            });
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 text-center"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: statsSection.isIntersecting ? 1 : 0,
                  transform: statsSection.isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.7s ease, transform 0.7s ease'
                }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{animatedValue}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
