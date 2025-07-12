// Configuration file for API endpoints and environment variables
const config = {
  // API Base URL - change this based on your environment
  API_BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  
  // API Endpoints
  API_ENDPOINTS: {
    CREATE_ORDER: '/api/donate/create-order',
    VERIFY_PAYMENT: '/api/donate/verify-payment',
    GET_DONATIONS: '/api/donate/all',
    GET_STATS: '/api/donate/stats',
    GET_PAYMENT: '/api/donate/payment',
  },
  
  // Razorpay Configuration
  RAZORPAY: {
    CURRENCY: 'INR',
    NAME: 'Project Sitaare',
    DESCRIPTION: 'Donation for Project Sitaare',
    THEME_COLOR: '#3B82F6',
  },
  
  // Form Validation
  VALIDATION: {
    MIN_AMOUNT: 1,
    MAX_AMOUNT: 1000000,
  }
};

export default config; 