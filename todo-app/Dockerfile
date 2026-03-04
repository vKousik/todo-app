# Step 1: Build the Vue app
FROM node:20 AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the Vue app
RUN npm run build


# Step 2: Serve using Nginx
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]