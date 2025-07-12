# 🚀 Quick Start Guide - Razorpay Integration

Get your Razorpay integration running in 5 minutes!

## ⚡ Quick Setup

### 1. Get Razorpay Credentials
1. Go to [razorpay.com](https://razorpay.com) and sign up
2. Navigate to **Dashboard → Settings → API Keys**
3. Generate a new API key pair
4. Copy your **Key ID** and **Key Secret**

### 2. Run the Setup Script
```bash
node setup-razorpay.js
```
This will create your `.env` file automatically.

### 3. Start the Servers
```bash
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend  
cd client
npm start
```

### 4. Test the Integration
1. Open your browser to `http://localhost:3000/test-donation`
2. Fill out the donation form
3. Use test card: `4111 1111 1111 1111` (Exp: 12/25, CVV: 123)
4. Complete the payment

## 🧪 Test Cards

| Card Number | Expiry | CVV | Type |
|-------------|--------|-----|------|
| 4111 1111 1111 1111 | 12/25 | 123 | Visa |
| 5555 5555 5555 4444 | 12/25 | 123 | Mastercard |

## 🔧 Manual Setup (Alternative)

If you prefer manual setup:

1. **Create `.env` file** in `server/` directory:
```env
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
MONGO_URI=mongodb://localhost:27017/sitaare
PORT=5000
JWT_SECRET=your_jwt_secret
```

2. **Install dependencies** (if needed):
```bash
cd client && npm install razorpay
```

## 🎯 What's Ready

✅ **Backend API** - Complete payment processing  
✅ **Frontend Form** - Beautiful donation interface  
✅ **Database Storage** - All donations saved  
✅ **Payment Verification** - Secure signature checking  
✅ **Statistics Dashboard** - Real-time donation stats  
✅ **Test Environment** - Ready for testing  

## 🚨 Troubleshooting

### "Order creation failed"
- Check your Razorpay credentials in `.env`
- Ensure MongoDB is running
- Check server logs for details

### "Payment verification failed"  
- Verify payment was actually completed
- Check signature verification logic
- Review server logs

### CORS Errors
- Backend should be running on port 5000
- Frontend should be running on port 3000
- Check CORS configuration in `server/app.js`

## 📞 Support

- **Razorpay Docs**: [razorpay.com/docs](https://razorpay.com/docs)
- **Project Issues**: Check server logs and browser console
- **Test Environment**: Use `/test-donation` route for testing

---

**Next Steps**: After testing, integrate the donation form into your main pages and switch to live credentials for production! 