import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-red-600 text-white p-4 mb-6 text-center text-xl font-bold border-4 border-yellow-400">
        This is the RESOURCES page - React SPA Version
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Senior Living Resources</h1>
      
      <p className="text-lg mb-8">
        Explore our comprehensive guides and articles to help you navigate senior living options, financing, and care types.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Resource Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Senior Housing Guide Image</span>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Senior Housing Guide</h2>
            <p className="text-gray-600 mb-4">
              Understand different senior living options and how to choose the right one.
            </p>
            <a 
              href="#" 
              className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
            >
              Read Guide
            </a>
          </div>
        </div>
        
        {/* Resource Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Financing Options Image</span>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Financing Options</h2>
            <p className="text-gray-600 mb-4">
              Learn about different payment methods, insurance, and financial assistance programs.
            </p>
            <a 
              href="#" 
              className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Resource Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Care Types Image</span>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Types of Care</h2>
            <p className="text-gray-600 mb-4">
              Explore different levels of care from independent living to skilled nursing.
            </p>
            <a 
              href="#" 
              className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
            >
              View Care Types
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
        <p className="mb-4">
          Our senior living advisors can help you find the perfect community based on your needs and preferences.
        </p>
        <a 
          href="#" 
          className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition font-medium"
        >
          Contact an Advisor
        </a>
      </div>
    </div>
  );
};

export default ResourcesPage;