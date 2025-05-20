# Use official Node.js LTS image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies and build
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built app and only production deps
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/components ./components
COPY --from=builder /app/styles ./styles

EXPOSE 3000
CMD ["npm", "start"]
