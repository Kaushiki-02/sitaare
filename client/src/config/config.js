// Configuration file for API endpoints and environment variables
const config = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://hohserver-production.up.railway.app',
  HOH_BASE_URL: process.env.REACT_APP_HOH_BASE_URL || 'http://localhost:3000',
  
  
  // API Endpoints
  API_ENDPOINTS: {
    CREATE_ORDER: '/api/donate/create-order',
  } 
  };

export default config; 