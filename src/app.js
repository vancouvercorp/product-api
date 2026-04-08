/**
 * Product API — Application Entry Point
 * 
 * Initializes Express server, registers middleware,
 * and mounts feature module routes.
 */

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { requestLogger } = require('./middleware/logger');
const { errorHandler } = require('./middleware/errorHandler');
const { rateLimiter } = require('./middleware/rateLimiter');
const config = require('./config');

const app = express();

// ── Global Middleware ──────────────────────────────────────
app.use(helmet());
app.use(cors(config.cors));
app.use(express.json({ limit: '10mb' }));
app.use(requestLogger);
app.use(rateLimiter);

// ── Health Check ───────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── API Routes ─────────────────────────────────────────────
// TODO: Mount feature module routes here
// app.use('/api/v1/products', require('./modules/products/routes'));
// app.use('/api/v1/users', require('./modules/users/routes'));
// app.use('/api/v1/orders', require('./modules/orders/routes'));

// ── Error Handling ─────────────────────────────────────────
app.use(errorHandler);

// ── Server Bootstrap ───────────────────────────────────────
const PORT = config.port || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`[Product API] Server running on port ${PORT} — env: ${config.env}`);
  });
}

module.exports = app;
