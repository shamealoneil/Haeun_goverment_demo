
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  linkText?: string;
  linkUrl?: string;
}

const InfoCard = ({ title, description, icon, index, linkText, linkUrl }: InfoCardProps) => {
  const { ref, isIntersecting } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-700 transform 
      ${isIntersecting 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex flex-col space-y-4">
        <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {linkText && linkUrl && (
          <a 
            href={linkUrl} 
            className="inline-flex items-center font-medium text-accent hover:underline mt-2"
          >
            {linkText}
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
        )}
      </div>
    </div>
  );
};

export default InfoCard;
