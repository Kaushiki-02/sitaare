#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Razorpay Integration Setup for Project Sitaare\n');

const questions = [
  {
    name: 'razorpayKeyId',
    message: 'Enter your Razorpay Key ID (starts with rzp_test_ or rzp_live_): ',
    validate: (input) => input.startsWith('rzp_') ? true : 'Key ID must start with rzp_'
  },
  {
    name: 'razorpayKeySecret',
    message: 'Enter your Razorpay Key Secret: ',
    validate: (input) => input.length > 0 ? true : 'Key Secret is required'
  },
  {
    name: 'mongoUri',
    message: 'Enter MongoDB connection URI (default: mongodb://localhost:27017/sitaare): ',
    default: 'mongodb://localhost:27017/sitaare'
  },
  {
    name: 'port',
    message: 'Enter server port (default: 5000): ',
    default: '5000'
  },
  {
    name: 'jwtSecret',
    message: 'Enter JWT secret (or press enter for auto-generated): ',
    default: () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
];

let answers = {};

function askQuestion(index) {
  if (index >= questions.length) {
    createEnvFile();
    return;
  }

  const question = questions[index];
  
  rl.question(question.message, (answer) => {
    const value = answer.trim() || question.default;
    
    if (question.validate) {
      const validation = question.validate(value);
      if (validation !== true) {
        console.log(`❌ ${validation}`);
        askQuestion(index);
        return;
      }
    }
    
    answers[question.name] = value;
    askQuestion(index + 1);
  });
}

function createEnvFile() {
  const envContent = `# Razorpay Configuration
RAZORPAY_KEY_ID=${answers.razorpayKeyId}
RAZORPAY_KEY_SECRET=${answers.razorpayKeySecret}

# Database Configuration
MONGO_URI=${answers.mongoUri}

# Server Configuration
PORT=${answers.port}
JWT_SECRET=${answers.jwtSecret}

# Optional: Enable debug logging
# DEBUG=razorpay:*
`;

  const envPath = path.join(__dirname, 'server', '.env');
  
  try {
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ Environment file created successfully!');
    console.log(`📁 Location: ${envPath}`);
    
    console.log('\n📋 Next Steps:');
    console.log('1. Start your MongoDB server');
    console.log('2. Run: cd server && npm start');
    console.log('3. Run: cd client && npm start');
    console.log('4. Test the donation form with Razorpay test cards');
    
    console.log('\n🧪 Test Cards:');
    console.log('Card: 4111 1111 1111 1111');
    console.log('Expiry: 12/25');
    console.log('CVV: 123');
    console.log('Name: Any Name');
    
  } catch (error) {
    console.error('❌ Error creating .env file:', error.message);
  }
  
  rl.close();
}

// Check if .env already exists
const envPath = path.join(__dirname, 'server', '.env');
if (fs.existsSync(envPath)) {
  rl.question('⚠️  .env file already exists. Overwrite? (y/N): ', (answer) => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      askQuestion(0);
    } else {
      console.log('Setup cancelled.');
      rl.close();
    }
  });
} else {
  askQuestion(0);
} 