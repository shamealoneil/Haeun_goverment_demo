
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const NewsSection = () => {
  const { ref, isIntersecting } = useScrollAnimation();
  
  const newsItems = [
    {
      title: "New Infrastructure Project Announced",
      date: "April 2, 2025",
      category: "Infrastructure",
      excerpt: "The government has announced a major infrastructure project set to begin next month, aimed at improving transportation across the country.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Digital Services Expansion",
      date: "March 30, 2025",
      category: "Technology",
      excerpt: "A new initiative to expand digital government services has been launched, making it easier for citizens to access public services online.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Public Health Campaign Launches",
      date: "March 25, 2025",
      category: "Health",
      excerpt: "A nationwide public health campaign has been launched to raise awareness about preventive healthcare measures and wellness.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 
          ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed with the latest government news, updates, and announcements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => {
            const { ref, isIntersecting } = useScrollAnimation();
            return (
              <div 
                key={index}
                ref={ref}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 transform 
                ${isIntersecting 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-accent">{news.category}</span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center font-medium text-accent hover:underline"
                  >
                    Read More
                    <svg 
                      className="ml-1 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
