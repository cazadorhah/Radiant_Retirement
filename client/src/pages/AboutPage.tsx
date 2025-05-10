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
              <h2 className="text-2xl font-bold text-[#2B6777] mb-4 pb-2 border-b-2 border-[#C8D8E4]">Our Story</h2>
              <p className="mb-4">
                Radiant Retirement was founded in 2018 by Sarah Johnson, a senior care professional with over 15 years of experience, who experienced firsthand the challenges of finding suitable housing for her aging parents. What began as a small directory of trusted facilities in Arizona has grown into a nationwide resource.
              </p>
              <p className="mb-4">
                Our mission emerged from a simple observation: families needed a trusted, comprehensive source of information when making one of life's most important decisions. Today, our team has expanded to include senior living advisors, healthcare professionals, and technology experts all dedicated to the same goal – making the search for senior living solutions easier, more transparent, and personalized to each family's unique needs.
              </p>
              <p className="italic text-[#52AB98] font-medium">
                "We believe every senior deserves to age with dignity in a community that truly feels like home."
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-[#C8D8E4] flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="bg-[#2B6777] text-white p-4 rounded-lg shadow-md mb-3 inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="text-[#2B6777] font-bold text-lg">Our Dedicated Team</h3>
                    <p className="text-[#555] mt-2">Healthcare professionals, senior living experts, and caregivers</p>
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
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#2B6777] mb-3">Why Choose Radiant Retirement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart in helping families find the perfect senior living solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#C8D8E4] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2B6777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#2B6777] mb-2 text-center">Comprehensive Directory</h3>
              <p className="text-gray-600 text-center">
                Access detailed profiles of over 5,000 senior living facilities across all 50 states, with verified information updated regularly.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#C8D8E4] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2B6777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#2B6777] mb-2 text-center">Expert Guidance</h3>
              <p className="text-gray-600 text-center">
                Our certified senior living advisors provide personalized recommendations based on your specific needs and preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#C8D8E4] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2B6777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#2B6777] mb-2 text-center">Trusted Reviews</h3>
              <p className="text-gray-600 text-center">
                Read authentic reviews from residents and families to gain real insights about the communities you're considering.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#C8D8E4] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2B6777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#2B6777] mb-2 text-center">Free Resources</h3>
              <p className="text-gray-600 text-center">
                Access guides, checklists, and articles to help you navigate every aspect of the senior living search process.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#C8D8E4] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2B6777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#2B6777] mb-2 text-center">No Hidden Costs</h3>
              <p className="text-gray-600 text-center">
                Our services are completely free for seniors and their families. We maintain transparency in all our operations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-[#C8D8E4] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2B6777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#2B6777] mb-2 text-center">Ongoing Support</h3>
              <p className="text-gray-600 text-center">
                We're with you every step of the way, from initial search through to move-in day and beyond.
              </p>
            </div>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#2B6777] mb-3">What Families Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from families who found the perfect senior living community with our help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f8f9fa] rounded-lg p-6 shadow-sm">
              <div className="mb-3" style={{color: '#F2B366'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <p className="italic text-gray-600 mb-4">
                "Radiant Retirement made what seemed like an overwhelming process so much easier. Their personalized guidance helped us find the perfect assisted living facility for my mother."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#C8D8E4] rounded-full mr-3"></div>
                <div>
                  <p className="font-bold text-[#2B6777]">Patricia M.</p>
                  <p className="text-sm text-gray-500">Chicago, IL</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-lg p-6 shadow-sm">
              <div className="mb-3" style={{color: '#F2B366'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <p className="italic text-gray-600 mb-4">
                "We were looking for an independent living community for my father. The Radiant Retirement team listened to his needs and preferences and found several excellent options in his area."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#C8D8E4] rounded-full mr-3"></div>
                <div>
                  <p className="font-bold text-[#2B6777]">Robert T.</p>
                  <p className="text-sm text-gray-500">Phoenix, AZ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-lg p-6 shadow-sm">
              <div className="mb-3" style={{color: '#F2B366'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="#F2B366" strokeWidth="1" className="inline-block">
                  <path d="M12 2L7.782 8.732L0.5 10.18L6.25 15.138L4.998 22L12 18.77L19.002 22L17.75 15.138L23.5 10.18L16.218 8.732L12 2Z" clipRule="evenodd" fillRule="evenodd"></path>
                </svg>
              </div>
              <p className="italic text-gray-600 mb-4">
                "The resources on financing senior care were incredibly helpful. Our advisor was patient and took time to explain everything about various payment options available."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#C8D8E4] rounded-full mr-3"></div>
                <div>
                  <p className="font-bold text-[#2B6777]">Linda & James K.</p>
                  <p className="text-sm text-gray-500">Denver, CO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#2B6777] text-white rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-3">Have Questions About Senior Living?</h2>
              <p className="text-lg mb-0">
                Our team of certified senior living advisors is ready to provide personalized guidance at no cost to you. Let us help you find the perfect community for your loved one.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col gap-3">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                1-800-555-0000
              </a>
            </div>
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