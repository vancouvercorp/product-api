/**
 * Application Configuration
 * 
 * Centralizes all environment-based configuration.
 * Validates required variables on startup.
 */

require('dotenv').config();

const requiredVars = ['DATABASE_URL', 'REDIS_URL', 'JWT_SECRET'];

const missing = requiredVars.filter(v => !process.env[v]);
if (missing.length && process.env.NODE_ENV !== 'test') {
  console.warn(`[config] Warning: missing env vars: ${missing.join(', ')}`);
}

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/product_api',
    pool: {
      min: parseInt(process.env.DB_POOL_MIN, 10) || 2,
      max: parseInt(process.env.DB_POOL_MAX, 10) || 10,
    },
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    ttl: parseInt(process.env.REDIS_TTL, 10) || 3600,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'dev-secret-change-me',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  },
};
