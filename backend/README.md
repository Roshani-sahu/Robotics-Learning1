# Course Selling Platform Backend

A production-ready backend for a course selling platform with Firebase Authentication, MongoDB, and Razorpay payments.

## Features

- **Firebase Authentication**: Email/password with email verification
- **Single Device Login**: Prevents multiple device access
- **Secure Course Access**: Private links with temporary tokens
- **Razorpay Integration**: Order creation, payment verification, webhooks
- **Rate Limiting**: Protection against abuse
- **Security**: Token verification, signature validation, IDOR prevention

## Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Admin SDK
- **Payments**: Razorpay
- **Security**: Helmet, CORS, Rate Limiting

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Configuration
Create `.env` file with:
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb://localhost:27017/course-platform
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
JWT_SECRET=your-super-secret-jwt-key
COURSE_ACCESS_EXPIRY=3600
```

### 3. Firebase Setup
1. Create Firebase project
2. Enable Authentication with Email/Password
3. Generate service account key
4. Add credentials to `.env`

### 4. Razorpay Setup
1. Create Razorpay account
2. Get API keys from dashboard
3. Configure webhook endpoint: `POST /api/payments/webhook`

### 5. MongoDB Setup
```bash
# Install MongoDB locally or use MongoDB Atlas
mongosh
use course-platform
```

### 6. Start Server
```bash
npm run dev  # Development
npm start    # Production
```

## API Documentation

### Authentication

#### POST /api/auth/login
Login with Firebase token and device ID
```json
{
  "deviceId": "unique-device-identifier"
}
```
Headers: `Authorization: Bearer <firebase-token>`

#### POST /api/auth/logout
Logout and invalidate session
Headers: `Authorization: Bearer <firebase-token>`, `x-device-id: <device-id>`

#### GET /api/auth/profile
Get user profile
Headers: `Authorization: Bearer <firebase-token>`, `x-device-id: <device-id>`

### Courses

#### GET /api/courses
Get all active courses (public)

#### GET /api/courses/:courseId
Get specific course details (public)

#### GET /api/courses/:courseId/access
Get course access link (requires purchase)
Headers: `Authorization: Bearer <firebase-token>`, `x-device-id: <device-id>`

#### GET /api/courses/:courseId/check-access
Check if user has access to course
Headers: `Authorization: Bearer <firebase-token>`, `x-device-id: <device-id>`

### Payments

#### POST /api/payments/create-order
Create Razorpay order
```json
{
  "courseId": "course-object-id"
}
```
Headers: `Authorization: Bearer <firebase-token>`, `x-device-id: <device-id>`

#### POST /api/payments/verify
Verify payment
```json
{
  "orderId": "order_xxxxx",
  "paymentId": "pay_xxxxx",
  "signature": "signature_string"
}
```
Headers: `Authorization: Bearer <firebase-token>`, `x-device-id: <device-id>`

#### GET /api/payments/purchases
Get user's purchased courses
Headers: `Authorization: Bearer <firebase-token>`, `x-device-id: <device-id>`

#### POST /api/payments/webhook
Razorpay webhook endpoint (internal)

## Security Features

### Authentication
- Firebase ID token verification
- Email verification requirement
- Single device login enforcement
- Session management with device tracking

### Payment Security
- Razorpay signature verification
- Webhook signature validation
- Order-payment matching
- Duplicate purchase prevention

### Rate Limiting
- Auth endpoints: 5 requests/15min
- Payment endpoints: 3 requests/1min
- General endpoints: 100 requests/15min

### Data Protection
- Private course links never exposed
- Temporary access tokens
- IDOR prevention
- Input validation

## Database Schema

### Course
```javascript
{
  title: String,
  description: String,
  price: Number,
  instructor: String,
  duration: String,
  level: String,
  thumbnail: String,
  accessLink: String, // Hidden from queries
  isActive: Boolean
}
```

### Purchase
```javascript
{
  firebaseUID: String,
  courseId: ObjectId,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  amount: Number,
  status: String,
  purchaseDate: Date
}
```

### UserSession
```javascript
{
  firebaseUID: String,
  deviceId: String,
  isActive: Boolean,
  lastActivity: Date
}
```

## Error Handling

All endpoints return consistent error responses:
```json
{
  "error": "Error message"
}
```

Common HTTP status codes:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `429`: Too Many Requests
- `500`: Internal Server Error

## Production Deployment

1. Set `NODE_ENV=production`
2. Use MongoDB Atlas for database
3. Configure proper CORS origins
4. Set up SSL/TLS certificates
5. Use process manager (PM2)
6. Configure reverse proxy (Nginx)
7. Set up monitoring and logging

## Testing

Use tools like Postman or curl to test endpoints:

```bash
# Health check
curl http://localhost:5000/health

# Get courses
curl http://localhost:5000/api/courses

# Login (requires Firebase token)
curl -X POST http://localhost:5000/api/auth/login \
  -H "Authorization: Bearer <firebase-token>" \
  -H "Content-Type: application/json" \
  -d '{"deviceId": "test-device"}'
```

## Support

For issues and questions:
1. Check environment variables
2. Verify Firebase configuration
3. Confirm Razorpay setup
4. Check MongoDB connection
5. Review server logs