import React from 'react';
import { BookOpen, DollarSign, Home, HeartPulse, FileText, PencilRuler } from 'lucide-react';
import { Link } from 'wouter';

const ResourceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText = "Learn More", 
  link = "#"
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="h-32 bg-gradient-to-r from-[#2B6777] to-[#52AB98] flex items-center justify-center">
      <Icon className="text-white h-16 w-16" />
    </div>
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-3 text-[#2B6777]">{title}</h2>
      <p className="text-gray-600 mb-5 min-h-[80px]">
        {description}
      </p>
      <Link 
        href={link} 
        className="inline-block px-4 py-2 bg-[#52AB98] text-white rounded-md hover:bg-[#2B6777] transition"
      >
        {buttonText}
      </Link>
    </div>
  </div>
);

const ResourcesPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2B6777] mb-4">Senior Living Resources</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive guides and resources to help you navigate senior living options, 
          financing, and care types.
        </p>
      </div>
      
      {/* Featured Resource */}
      <div className="bg-[#C8D8E4] rounded-xl p-8 mb-12 shadow-md">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#2B6777] mb-4">Senior Housing Guide</h2>
            <p className="text-lg mb-6">
              Our comprehensive guide walks you through everything you need to know about 
              senior living options, from independent living communities to skilled nursing facilities.
            </p>
            <Link 
              href="#"
              className="inline-block px-6 py-3 bg-[#F2B366] text-white font-semibold rounded-md hover:bg-opacity-90 transition"
            >
              Download Free Guide
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-4 rounded-md shadow-md rotate-3 transform transition hover:rotate-0">
              <div className="w-64 h-80 bg-[#52AB98] flex items-center justify-center text-white">
                <BookOpen className="h-24 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <ResourceCard 
          icon={Home}
          title="Types of Senior Housing"
          description="Compare different senior living options including independent living, assisted living, memory care, and nursing homes."
          buttonText="Explore Options"
        />
        
        <ResourceCard 
          icon={DollarSign}
          title="Financing Senior Care"
          description="Learn about payment options, including Medicare, Medicaid, VA benefits, insurance, and private pay strategies."
          buttonText="Review Financing"
        />
        
        <ResourceCard 
          icon={HeartPulse}
          title="Health & Wellness"
          description="Discover resources for maintaining physical and mental health, nutrition guidelines, and exercise programs for seniors."
          buttonText="View Resources"
        />
      </div>

      {/* Secondary Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ResourceCard 
          icon={FileText}
          title="Legal & Financial Planning"
          description="Important information about wills, trusts, power of attorney, and other legal considerations for seniors and their families."
          buttonText="Get Started"
        />
        
        <ResourceCard 
          icon={PencilRuler}
          title="Senior Living Checklist"
          description="A comprehensive checklist to help you evaluate and compare different senior living communities during your search."
          buttonText="Download Checklist"
        />
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#2B6777] to-[#52AB98] text-white p-8 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Need Personalized Guidance?</h2>
            <p className="max-w-2xl">
              Our senior living advisors can help you find the perfect community based on your needs and preferences.
              Get free, personalized recommendations today.
            </p>
          </div>
          <Link 
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-[#2B6777] font-bold rounded-md hover:bg-[#F2B366] hover:text-white transition"
          >
            Contact an Advisor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;