ARCHITECTURE

## CLIENT
NextJS Front End hosted on Vercel
Makes API calls to backend hosted on heroku

## BACKEND
NodeJS backend with Express Server that exposes API endpoints
Hosted on Heroku
Google OAuth is configured for prod and dev environments
MongoDB Atlas is setup with two separate clusters - one in dev and one in production
Heroku has production env variables setup (mongo, google oauth, etc.)
keys.config file has conditional to check the NODE_ENV
- if it's production, it grabs production keys from prod.js, which just references process.env.XXX files
- if it's development, it grabs keys from dev.js
