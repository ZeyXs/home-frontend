# Stage 1: Build the React app with Vite
FROM node:alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json if applicable
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built app using NGINX
FROM nginx:alpine

# Copy the built app from the previous stage to NGINX directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
