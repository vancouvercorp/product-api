# Product API

Core REST API service for TechCorp product platform.

## Overview

This service handles all product-related business logic, including:
- Product catalog management
- User authentication and authorization
- Order processing
- Inventory tracking

## Tech Stack

- **Runtime:** Node.js 20 LTS
- **Framework:** Express.js
- **Database:** PostgreSQL 15
- **Cache:** Redis 7
- **Testing:** Jest + Supertest

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- PostgreSQL >= 15
- Redis >= 7

### Installation

```bash
git clone https://github.com/techcorp/product-api.git
cd product-api
npm install
cp .env.example .env
# Edit .env with your local configuration
npm run db:migrate
npm run dev
```

### Running Tests

```bash
npm test
npm run test:coverage
```

## Project Structure

```
product-api/
├── src/
│   ├── config/          # Configuration management
│   ├── middleware/       # Express middleware
│   ├── modules/         # Feature modules (controllers, services, models)
│   ├── utils/           # Shared utilities
│   └── app.js           # Application entry point
├── tests/               # Test suites
├── migrations/          # Database migrations
└── package.json
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

Proprietary — TechCorp Inc.
