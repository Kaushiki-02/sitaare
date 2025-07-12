import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaNewspaper,
  FaDesktop,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaEye,
  FaArrowRight,
  FaStar,
  FaAward,
  FaHeart,
  FaBookOpen,
  FaCamera,
  FaPlay,
  FaExternalLinkAlt,
  FaTimes
} from 'react-icons/fa';
import SectionDivider from '../components/SectionDivider';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};
const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};
const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
};

const NewsAndEvents = () => {
  const [activeTab, setActiveTab] = useState('media');
  const [mediaType, setMediaType] = useState('print');
  const [selectedNews, setSelectedNews] = useState(null);

  const printMedia = [
    {
      id: 1,
      title: "Project Sitaare Transforms Lives of 500+ Children Through Education",
      publication: "Gujarat Samachar",
      date: "January 15, 2025",
      excerpt: "Project Sitaare's innovative approach to child education has reached over 500 underprivileged children across Gujarat, providing them with quality education and life skills...",
      image: "/api/placeholder/400/300",
      category: "Education Impact",
      icon: <FaBookOpen className="w-4 h-4" />,
      fullContent: {
        headline: "Project Sitaare's Educational Revolution Reaches 500+ Children",
        details: [
          "Project Sitaare has successfully implemented its comprehensive education program across 15 locations in Gujarat, directly impacting over 500 underprivileged children.",
          "The program focuses on holistic development including academic learning, life skills, and personality development.",
          "Qualified teachers and volunteers work together to provide personalized attention to each child based on their learning needs.",
          "The initiative includes provision of educational materials, uniforms, and nutritious meals to ensure children can focus on learning.",
          "Regular assessments show 85% improvement in academic performance among participating children.",
          "Parents and community members actively participate in the program, creating a supportive learning environment.",
          "The program has also established mobile learning units to reach children in remote areas.",
          "Success stories include children who have moved from basic literacy to advanced learning levels within months."
        ]
      }
    },
    {
      id: 2,
      title: "Project Sitaare's Skill Development Program Empowers Rural Youth",
      publication: "Times of India",
      date: "December 20, 2024",
      excerpt: "The skill development initiative under Project Sitaare has trained over 200 rural youth in various vocational skills, helping them secure employment...",
      image: "/api/placeholder/400/300",
      category: "Skill Development",
      icon: <FaAward className="w-4 h-4" />,
      fullContent: {
        headline: "Rural Youth Empowerment Through Skill Development",
        details: [
          "Project Sitaare's skill development program has successfully trained over 200 rural youth in various vocational skills including computer literacy, tailoring, and handicrafts.",
          "The program partners with local industries to provide job placement assistance to trained candidates.",
          "80% of program participants have secured employment or started their own small businesses within six months of completion.",
          "Training modules are designed to meet local market demands and industry requirements.",
          "The program includes financial literacy and entrepreneurship training to promote self-employment.",
          "Success stories include youth who have established successful small businesses in their communities.",
          "Regular follow-up sessions ensure sustained support for program graduates.",
          "The initiative has created a positive impact on local economies through increased employment."
        ]
      }
    },
    {
      id: 3,
      title: "Community Health Initiative Serves 1000+ Families",
      publication: "Indian Express",
      date: "November 10, 2024",
      excerpt: "Project Sitaare's community health program has provided healthcare services to over 1000 families in rural areas, including free medical checkups and health awareness...",
      image: "/api/placeholder/400/300",
      category: "Healthcare",
      icon: <FaHeart className="w-4 h-4" />,
      fullContent: {
        headline: "Comprehensive Healthcare Reaches Rural Communities",
        details: [
          "Project Sitaare's community health initiative has served over 1000 families across rural Gujarat through mobile health camps.",
          "The program provides free medical consultations, basic treatments, and essential medicines.",
          "Regular health awareness sessions educate communities about preventive healthcare and hygiene practices.",
          "The initiative includes maternal and child health programs with focus on nutrition and vaccination.",
          "Trained health workers conduct door-to-door visits for follow-up care and health monitoring.",
          "The program has significantly reduced common health issues in target communities.",
          "Partnerships with local healthcare providers ensure continuity of care for serious cases.",
          "Health records are maintained for each family to track progress and provide personalized care."
        ]
      }
    }
  ];

  const digitalMedia = [
    {
      id: 1,
      title: "Project Sitaare Featured in National Education Documentary",
      platform: "YouTube - Education India",
      date: "January 20, 2025",
      views: "125K views",
      duration: "12:30",
      excerpt: "A comprehensive documentary showcasing Project Sitaare's innovative teaching methods and success stories from various centers...",
      thumbnail: "/api/placeholder/400/300",
      category: "Documentary",
      icon: <FaPlay className="w-4 h-4" />,
      link: "https://youtube.com/watch?v=example"
    },
    {
      id: 2,
      title: "Social Media Campaign Highlights Child Success Stories",
      platform: "Instagram - @projectsitaare",
      date: "January 10, 2025",
      engagement: "50K+ interactions",
      reach: "200K+ reach",
      excerpt: "Viral social media campaign featuring transformation stories of children who have benefited from Project Sitaare's programs...",
      thumbnail: "/api/placeholder/400/300",
      category: "Social Media",
      icon: <FaCamera className="w-4 h-4" />,
      link: "https://instagram.com/projectsitaare"
    },
    {
      id: 3,
      title: "Online Fundraising Campaign Raises ₹10 Lakhs",
      platform: "Multiple Digital Platforms",
      date: "December 15, 2024",
      amount: "₹10,00,000",
      donors: "500+ donors",
      excerpt: "Successful crowdfunding campaign that raised funds for expanding Project Sitaare's reach to 5 new locations...",
      thumbnail: "/api/placeholder/400/300",
      category: "Fundraising",
      icon: <FaStar className="w-4 h-4" />,
      link: "https://example.com/fundraising"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Project Sitaare Education Fair 2025",
      date: "March 25, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Sardar Patel Stadium, Ahmedabad",
      type: "Educational Event",
      status: "Registration Open",
      expectedAttendees: "2000+",
      description: "A grand celebration of education featuring student performances, exhibitions, and awards ceremony recognizing outstanding achievements.",
      highlights: [
        "Student performances and cultural programs",
        "Educational exhibitions and displays",
        "Awards ceremony for top performers",
        "Interactive workshops for parents",
        "Scholarship announcements"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Teacher Training Workshop Series",
      date: "April 5-7, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Multiple Centers across Gujarat",
      type: "Professional Development",
      status: "Applications Open",
      expectedAttendees: "150+",
      description: "Three-day intensive training program for teachers and volunteers to enhance teaching methodologies and child psychology understanding.",
      highlights: [
        "Modern teaching techniques",
        "Child psychology sessions",
        "Technology integration in education",
        "Assessment methods",
        "Certificate distribution"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Community Health Camp",
      date: "May 15, 2025",
      time: "8:00 AM - 2:00 PM",
      location: "Rural Areas, Vadodara District",
      type: "Health Initiative",
      status: "Open to All",
      expectedAttendees: "500+",
      description: "Free health screening and awareness camp for rural communities with medical consultations and health education.",
      highlights: [
        "Free health checkups",
        "Medicine distribution",
        "Health awareness sessions",
        "Vaccination drive",
        "Nutritional counseling"
      ],
      image: "/api/placeholder/400/300"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Project Sitaare Foundation Day Celebration",
      date: "December 10, 2024",
      location: "Vadodara",
      attendees: "800+",
      description: "Grand celebration marking 3 years of Project Sitaare with cultural programs, success story presentations, and community felicitation.",
      achievements: [
        "Celebrated 3 years of impact",
        "Recognized 50+ outstanding students",
        "Cultural performances by children",
        "Community leader felicitation",
        "Future roadmap presentation"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Children's Day Special Event",
      date: "November 14, 2024",
      location: "All Project Sitaare Centers",
      attendees: "1200+",
      description: "Special celebration across all centers with fun activities, games, and distribution of educational materials and gifts.",
      achievements: [
        "Celebrated across 15 centers",
        "Distributed 500+ educational kits",
        "Organized sports competitions",
        "Cultural program presentations",
        "Nutritious meal distribution"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Skill Development Graduation Ceremony",
      date: "October 25, 2024",
      location: "Ahmedabad",
      attendees: "300+",
      description: "Graduation ceremony for 100+ youth who completed various skill development programs under Project Sitaare.",
      achievements: [
        "100+ youth graduated",
        "85% job placement rate",
        "Industry partner participation",
        "Certificate distribution",
        "Success story sharing"
      ],
      image: "/api/placeholder/400/300"
    }
  ];

  const NewsModal = ({ news, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
          >
            <FaEye size={24} />
          </button>
          
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-pink-600 text-white rounded-full text-sm">
                {news.category}
              </span>
              <span className="text-sm text-gray-500">{news.publication}</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{news.date}</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {news.fullContent.headline}
            </h2>
            
            <div className="mb-6">
              <img
                src={news.image}
                alt={news.title}
                className="rounded-lg w-full h-auto max-h-[400px] object-cover"
              />
            </div>
            
            <div className="space-y-4">
              {news.fullContent.details.map((detail, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 text-darkText"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90 z-10 w-full h-full"></div>
        <div className="relative z-20 w-full text-center py-14 lg:py-20">
            <motion.div variants={fadeIn} className="mb-5">
              <FaStar className="text-5xl text-primaryLight mx-auto mb-5" />
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-5 leading-tight">
              News & Events
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl lg:text-2xl text-primaryLight mb-6 max-w-4xl mx-auto leading-relaxed">
              Stay updated with Project Sitaare's latest media coverage, success stories, and upcoming events
            </motion.p>
            {/* Move Tab Navigation here */}
            <motion.div variants={fadeIn} className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveTab('media')}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'media'
                  ? 'bg-light text-primary shadow-lg border-b-4 border-primaryLight'
                  : 'bg-light/20 text-light hover:bg-light/30 backdrop-blur-sm'
              }`}
            >
              <FaNewspaper size={20} />
              Media 
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'events'
                  ? 'bg-light text-primary shadow-lg border-b-4 border-primaryLight'
                  : 'bg-light/20 text-light hover:bg-light/30 backdrop-blur-sm'
              }`}
            >
              <FaCalendarAlt size={20} />
              Events
            </button>
          </motion.div>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-primaryLight">
                <FaUsers className="text-2xl" />
                <span className="text-lg font-semibold">500+ Children Impacted</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-primaryLight"></div>
              <div className="flex items-center gap-2 text-primaryLight">
                <FaAward className="text-2xl" />
                <span className="text-lg font-semibold">Award-Winning Initiatives</span>
              </div>
            </motion.div>
        </div>
      </div>
      {/* Main Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Tab Navigation */}
          {/* Media Coverage Section */}
          {activeTab === 'media' && (
            <motion.div variants={slideInLeft} className="space-y-8">
              {/* Media Type Selector */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setMediaType('print')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    mediaType === 'print'
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-light text-gray-600 hover:bg-gray-50 border'
                  }`}
                >
                  <FaNewspaper size={18} />
                  Print Media
                </button>
                <button
                  onClick={() => setMediaType('digital')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    mediaType === 'digital'
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-light text-gray-600 hover:bg-gray-50 border'
                  }`}
                >
                  <FaDesktop size={18} />
                  Digital Media
                </button>
              </div>
              {/* Print Media */}
              {mediaType === 'print' && (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-primary px-8 py-6">
                    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                      <FaNewspaper size={32} />
                      Print Media Coverage
                    </h2>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {printMedia.map((article) => (
                        <motion.div
                          key={article.id}
                          variants={cardHover}
                          whileHover="hover"
                          className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-light text-primary rounded-full text-xs font-semibold flex items-center gap-1">
                                {article.icon}
                                {article.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                              {article.title}
                            </h3>
                            <div className="text-sm text-gray-500 mb-3">
                              {article.publication} • {article.date}
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {article.excerpt}
                            </p>
                            <button
                              onClick={() => setSelectedNews(article)}
                              className="inline-flex items-center gap-2 text-primary hover:text-primaryLight font-semibold"
                            >
                              Read More
                              <FaArrowRight size={16} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* Digital Media */}
              {mediaType === 'digital' && (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-primary px-8 py-6">
                    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                      <FaDesktop size={32} />
                      Digital Media Coverage
                    </h2>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {digitalMedia.map((item) => (
                        <motion.div
                          key={item.id}
                          variants={cardHover}
                          whileHover="hover"
                          className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <div className="relative">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-48 object-cover"
                            />
                            {item.duration && (
                              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                                {item.duration}
                              </div>
                            )}
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-light text-primary rounded-full text-xs font-semibold flex items-center gap-1">
                                {item.icon}
                                {item.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                              {item.title}
                            </h3>
                            <div className="text-sm text-gray-500 mb-3">
                              {item.platform} • {item.date}
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                              {item.views && <span>{item.views} • </span>}
                              {item.engagement && <span>{item.engagement} • </span>}
                              {item.reach && <span>{item.reach}</span>}
                              {item.amount && <span>{item.amount} • {item.donors}</span>}
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {item.excerpt}
                            </p>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-primary hover:text-primaryLight font-semibold"
                            >
                              View Content
                              <FaExternalLinkAlt size={16} />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
          {/* Section Divider between Media and Events */}
          <SectionDivider />
          {/* Events Section */}
          {activeTab === 'events' && (
            <motion.div variants={slideInRight} className="space-y-12">
              {/* Upcoming Events */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary px-8 py-6">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <FaCalendarAlt size={32} />
                    Upcoming Events
                  </h2>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        variants={cardHover}
                        whileHover="hover"
                        className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full min-h-[600px]"
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <div className="flex flex-col flex-1 p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-light text-primary rounded-full text-xs font-semibold">
                              {event.type}
                            </span>
                            <span className="px-3 py-1 bg-light text-primary rounded-full text-xs font-semibold">
                              {event.status}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold mb-3 text-gray-800">
                            {event.title}
                          </h3>
                          <div className="space-y-2 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <FaCalendarAlt size={16} />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaClock size={16} />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt size={16} />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaUsers size={16} />
                              <span>Expected: {event.expectedAttendees}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {event.description}
                          </p>
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {event.highlights.slice(0, 3).map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <FaStar size={12} className="text-yellow-500 mt-1 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-auto">
                            <button className="w-full bg-primary hover:bg-primaryLight text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                              Register Now
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Past Events */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary px-8 py-6">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <FaCalendarAlt size={32} />
                    Past Events
                  </h2>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    {pastEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        variants={cardHover}
                        whileHover="hover"
                        className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <h3 className="text-xl font-bold mb-3 text-gray-800">
                              {event.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <FaCalendarAlt size={16} />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FaMapMarkerAlt size={16} />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FaUsers size={16} />
                                <span>Attendees: {event.attendees}</span>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                              {event.description}
                            </p>
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {event.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <FaAward size={12} className="text-primaryLight mt-1 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <button className="inline-flex items-center gap-2 text-primary hover:text-primaryLight font-semibold">
                              <FaEye size={16} />
                              View Gallery
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
              aria-label="Close"
            >
              <FaTimes size={24} />
            </button>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">
                  {selectedNews.category}
                </span>
                <span className="text-sm text-gray-500">{selectedNews.publication}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{selectedNews.date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {selectedNews.fullContent.headline}
              </h2>
              <div className="mb-6">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="rounded-lg w-full h-auto max-h-[400px] object-cover"
                />
              </div>
              <div className="space-y-4">
                {selectedNews.fullContent.details.map((detail, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default NewsAndEvents;