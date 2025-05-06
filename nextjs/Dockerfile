# Use official Node.js image
FROM node:20-alpine
RUN corepack enable

# Create app directory
WORKDIR /app

# Install deps
COPY package.json pnpm-lock.yaml ./
RUN corepack prepare --activate
RUN pnpm i

# Copy source
COPY . .

# Build and run
RUN npm run build
EXPOSE 3000
CMD [ "pnpm", "start" ]
