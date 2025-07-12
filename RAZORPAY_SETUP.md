# Razorpay Integration Setup Guide

This guide will help you complete the Razorpay payment gateway integration for Project Sitaare.

## Prerequisites

1. **Razorpay Account**: Sign up at [razorpay.com](https://razorpay.com)
2. **Node.js and npm**: Ensure you have Node.js installed
3. **MongoDB**: Make sure MongoDB is running locally or you have a cloud MongoDB instance

## Step 1: Environment Configuration

Create a `.env` file in the `server` directory with the following variables:

```env
# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here

# Database Configuration
MONGO_URI=mongodb://localhost:27017/sitaare

# Server Configuration
PORT=5000
JWT_SECRET=your_jwt_secret_here
```

### Getting Razorpay Credentials:

1. Log in to your Razorpay Dashboard
2. Go to **Settings** → **API Keys**
3. Generate a new API key pair
4. Copy the **Key ID** and **Key Secret** to your `.env` file

**Note**: Use test credentials for development and live credentials for production.

## Step 2: Install Dependencies

### Backend Dependencies
The Razorpay package is already installed. If not, run:
```bash
cd server
npm install razorpay
```

### Frontend Dependencies
Install the Razorpay SDK (optional, as we're using CDN):
```bash
cd client
npm install razorpay
```

## Step 3: Database Setup

The donation model is already configured. Ensure MongoDB is running and the connection is established.

## Step 4: Testing the Integration

### 1. Start the Backend Server
```bash
cd server
npm start
```

### 2. Start the Frontend Application
```bash
cd client
npm start
```

### 3. Test Payment Flow
1. Navigate to the donation form
2. Enter donation details
3. Click "Donate Now"
4. Complete the payment using Razorpay test cards

## Test Card Details

Use these test cards for testing:

| Card Number | Expiry | CVV | Name |
|-------------|--------|-----|------|
| 4111 1111 1111 1111 | 12/25 | 123 | Any Name |
| 5555 5555 5555 4444 | 12/25 | 123 | Any Name |

## API Endpoints

### Create Order
- **POST** `/api/donate/create-order`
- **Body**: `{ amount, donorName, donorEmail, donorPhone, description, anonymous }`

### Verify Payment
- **POST** `/api/donate/verify-payment`
- **Body**: `{ razorpay_order_id, razorpay_payment_id, razorpay_signature, donationId }`

### Get All Donations
- **GET** `/api/donate/all`

### Get Donation Statistics
- **GET** `/api/donate/stats`

## Features Implemented

✅ **Backend Integration**
- Order creation
- Payment verification
- Database storage
- Error handling

✅ **Frontend Integration**
- Donation form with donor details
- Anonymous donation option
- Payment processing
- Success/error handling

✅ **Security Features**
- Payment signature verification
- Environment variable protection
- Input validation

✅ **Database Features**
- Donation record storage
- Payment status tracking
- Statistics calculation

## Production Deployment

### 1. Environment Variables
- Use live Razorpay credentials
- Set proper MongoDB connection string
- Configure CORS for your domain

### 2. Frontend Configuration
Update `client/src/config/config.js`:
```javascript
API_BASE_URL: 'https://your-backend-domain.com'
```

### 3. Security Considerations
- Use HTTPS in production
- Implement rate limiting
- Add proper logging
- Set up monitoring

## Troubleshooting

### Common Issues

1. **"Order creation failed"**
   - Check Razorpay credentials
   - Verify environment variables
   - Check server logs

2. **"Payment verification failed"**
   - Ensure signature verification is working
   - Check if payment was actually completed

3. **CORS Errors**
   - Update CORS configuration in `server/app.js`
   - Add your frontend domain to allowed origins

4. **Database Connection Issues**
   - Verify MongoDB is running
   - Check connection string
   - Ensure database exists

### Debug Mode

Enable debug logging by adding to your `.env`:
```env
DEBUG=razorpay:*
```

## Support

For Razorpay-specific issues, refer to:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)

For project-specific issues, check the server logs and browser console for detailed error messages. 