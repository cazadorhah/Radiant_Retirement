import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Radiant Retirement</title>
        <meta name="description" content="Learn about our mission to help seniors find the perfect living community with comprehensive information and personalized guidance." />
      </Helmet>
      
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2B6777] mb-4">About Radiant Retirement</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simplifying the search for senior living with comprehensive information, trusted insights, 
            and personalized guidance for families across America.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#2B6777] mb-4">Our Story</h2>
              <p className="mb-4">
                Radiant Retirement was founded in 2018 by Sarah Johnson, a senior care professional with over 15 years of experience, who experienced firsthand the challenges of finding suitable housing for her aging parents.
              </p>
              <p className="mb-4">
                What began as a small directory of trusted facilities in Arizona has grown into a nationwide resource with information on over 5,000 senior living communities across all 50 states.
              </p>
              <p>
                Our mission emerged from a simple observation: families needed a trusted, comprehensive source of information when making one of life's most important decisions.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-[#C8D8E4] flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-[#2B6777] font-bold text-lg mb-2">Image Placeholder</p>
                    <p className="text-[#2B6777] text-sm">Team photo would appear here</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-[#52AB98] text-white p-3 rounded-tl-lg">
                  <p className="text-sm font-bold">Serving seniors since 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-[#C8D8E4] rounded-full flex items-center justify-center mb-4">
              <span className="text-[#2B6777] font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-[#2B6777] mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To empower seniors and their families with comprehensive, accurate information that simplifies the process of finding the right senior living community.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-[#C8D8E4] rounded-full flex items-center justify-center mb-4">
              <span className="text-[#2B6777] font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-[#2B6777] mb-3">Our Vision</h3>
            <p className="text-gray-600">
              A world where every senior can easily find a living environment that enhances their quality of life, meets their unique needs, and respects their dignity.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-[#C8D8E4] rounded-full flex items-center justify-center mb-4">
              <span className="text-[#2B6777] font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-[#2B6777] mb-3">Our Values</h3>
            <p className="text-gray-600">
              We are guided by compassion, integrity, innovation, and community in everything we do to support seniors and their families.
            </p>
          </div>
        </div>
        
        <div className="bg-[#f8f9fa] rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-[#2B6777] mb-6 text-center">Why Choose Radiant Retirement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-[#52AB98] rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2B6777] mb-2">Comprehensive Directory</h3>
                <p className="text-gray-600">
                  Access detailed profiles of over 5,000 senior living facilities across all 50 states, with verified information updated regularly.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-[#52AB98] rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2B6777] mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our team of certified senior living advisors provides personalized recommendations based on your specific needs and preferences.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-[#52AB98] rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2B6777] mb-2">Free Resources</h3>
                <p className="text-gray-600">
                  Access guides, checklists, and articles to help you navigate every aspect of the senior living search process.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-[#52AB98] rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2B6777] mb-2">No Hidden Costs</h3>
                <p className="text-gray-600">
                  Our services are completely free for seniors and their families. We maintain transparency in all our operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#2B6777] text-white rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Have Questions About Senior Living?</h2>
            <p className="text-lg">Our team of certified senior living advisors is ready to provide personalized guidance.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-block py-3 px-6 bg-white text-[#2B6777] font-bold rounded-md hover:bg-[#F2B366] hover:text-white transition text-center"
            >
              Contact Us Today
            </a>
            <a 
              href="tel:1-800-555-0000" 
              className="inline-block py-3 px-6 bg-transparent border border-white text-white font-bold rounded-md hover:bg-white hover:text-[#2B6777] transition text-center flex items-center justify-center"
            >
              <span className="mr-2">Call Us</span> 1-800-555-0000
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            For more information about our static site, please visit{' '}
            <a 
              href="/about.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#52AB98] hover:text-[#2B6777] inline-flex items-center"
            >
              our static website <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;