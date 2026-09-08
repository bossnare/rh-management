# 1. Base image
FROM node:20

# 2. App directory
WORKDIR /app

# 3. Copy files for install only
COPY package.json pnpm-lock.yaml ./

# 4. Install dependencies (dev inclusive)
RUN npm install -g pnpm@latest && pnpm install

# 5. Copy reste du code (tsy asiana node_modules raha ao @ .dockerignore)
COPY . .

# 6. Run dev server
CMD ["pnpm", "dev"]
