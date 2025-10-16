# HNG Stage Zero Backend

A Node.js/Express API that returns user information along with a random cat fact.

## Features

- **RESTful API** with user information endpoint
- **Cat Facts Integration** - Fetches random cat facts from external API
- **Rate Limiting** - Protects against abuse (100 requests per 15 minutes)
- **CORS Enabled** - Allows cross-origin requests
- **ISO 8601 Timestamps** - Standard date/time format

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **Express Rate Limit** - API rate limiting
- **Dotenv** - Environment variable management

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/HNG-stage-zero-backend.git
cd HNG-stage-zero-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file (optional):

```bash
PORT=4000
```

4. Start the server:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

## API Endpoints

### GET `/me`

Returns user information with a random cat fact.

**Response Example:**

```json
{
  "status": "success",
  "user": {
    "email": "taiwosamuel8364@gmail.com",
    "name": "Taiwo Samuel Oluwatayo",
    "stack": "Node.js, MongoDB, Expressjs"
  },
  "timeStamp": "2025-10-16T14:30:45.123Z",
  "fact": "Cats have 32 muscles in each ear."
}
```

**Status Codes:**

- `200` - Success
- `500` - Server Error
- `429` - Too Many Requests (rate limit exceeded)

## Rate Limiting

- **Window:** 15 minutes
- **Max Requests:** 100 per IP address
- **Response:** 429 status with message when exceeded

## Environment Variables

| Variable | Description | Default |
| -------- | ----------- | ------- |
| `PORT`   | Server port | `4000`  |

## Project Structure

```
HNG-stage-zero-backend/
├── server.js          # Main application file
├── fact.js            # Cat fact API integration
├── package.json       # Dependencies and scripts
├── .env              # Environment variables (not committed)
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```

## Dependencies

```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "express-rate-limit": "^6.7.0",
  "dotenv": "^16.0.3"
}
```

## Deployment

This project can be deployed on:

- Cyclic.sh
- Fly.io
- Koyeb
- Railway (if free tier available)

### Deployment Steps (Cyclic):

1. Push code to GitHub
2. Visit [cyclic.sh](https://cyclic.sh)
3. Connect your GitHub repository
4. Deploy automatically

## Local Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

Visit `http://localhost:4000/me` to test locally.

## Error Handling

The API includes error handling for:

- Failed external API requests
- Rate limit violations
- Server errors

## Author

**Taiwo Samuel Oluwatayo**

- Email: taiwosamuel8364@gmail.com
- Stack: Node.js, MongoDB, Express.js

## License

MIT

## Contributing

This is a stage zero project for HNG Internship.

## Acknowledgments

- Cat facts provided by [Cat Fact Ninja API](https://catfact.ninja/)
- Built as part of HNG Internship Stage Zero

---

**Live API:** [Your Cyclic URL here after deployment]
