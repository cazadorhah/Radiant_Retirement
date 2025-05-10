import React from 'react';
import { BookOpen, DollarSign, Activity, Calendar, Heart, LucideIcon } from 'lucide-react';

interface ResourceSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor?: string;
}

const ResourceSection = ({ title, description, icon: Icon, bgColor = "bg-[#2B6777]" }: ResourceSectionProps) => (
  <div className="mb-10">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`${bgColor} p-4 flex items-center`}>
        <Icon className="text-white h-10 w-10 mr-4" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ResourcesPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2B6777] mb-4">Resources</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive information to help seniors and their families make informed decisions about
          retirement living options and care.
        </p>
      </div>
      
      {/* Senior Living Guide */}
      <ResourceSection 
        title="Senior Living Guide"
        icon={BookOpen}
        description="Our comprehensive guide covers all aspects of senior living options. Learn about the differences between 
        independent living, assisted living, memory care, and skilled nursing facilities. Find information on what amenities 
        to look for, questions to ask during tours, and how to evaluate if a community is the right fit for you or your loved one. 
        Our guide also includes tips on making the transition to senior living smooth and stress-free."
      />
      
      {/* Financial Assistance */}
      <ResourceSection 
        title="Financial Assistance"
        icon={DollarSign}
        bgColor="bg-[#52AB98]"
        description="Understand the various financial options available to fund senior living and care. This section covers Medicare, 
        Medicaid, Veterans Aid & Attendance benefits, long-term care insurance, retirement savings strategies, and other payment sources. 
        Learn about eligibility requirements, application processes, and how to maximize benefits. We also provide information on tax 
        deductions and credits available to seniors and caregivers."
      />
      
      {/* Healthcare Resources */}
      <ResourceSection 
        title="Healthcare Resources"
        icon={Activity}
        description="Access important healthcare information for seniors, including preventive care recommendations, managing chronic conditions, 
        and coordinating care between different providers. Learn about telehealth options, prescription drug programs, and how to communicate 
        effectively with healthcare professionals. This section also covers how to select the right primary care physician, specialist, or 
        geriatric care manager to meet specific needs."
      />
      
      {/* Retirement Planning */}
      <ResourceSection 
        title="Retirement Planning"
        icon={Calendar}
        bgColor="bg-[#52AB98]"
        description="Plan for a fulfilling retirement with resources on financial planning, housing considerations, and lifestyle choices. 
        Beyond finances, this section addresses the emotional and social aspects of retirement, including maintaining purpose, developing 
        new hobbies, and building community connections. Learn strategies for downsizing, aging in place modifications, and how to evaluate 
        when it might be time to consider alternative living arrangements."
      />
      
      {/* Caregiver Support */}
      <ResourceSection 
        title="Caregiver Support"
        icon={Heart}
        description="Resources for family caregivers including self-care strategies, respite care options, support groups, and practical 
        caregiving tips. Learn about caregiver burnout prevention, balancing work and caregiving responsibilities, and having difficult 
        conversations with aging parents. This section also provides guidance on building a care team, coordinating with other family members, 
        and knowing when to seek professional assistance."
      />
    </div>
  );
};

export default ResourcesPage;