# Stage 1: Build the React application
FROM node:16-alpine as build-stage

WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock files
COPY package*.json yarn.lock* ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY ./ ./

# Build your React app (including TypeScript compilation)
RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:stable-alpine as production-stage

# Copy the build artifacts from the build stage to the nginx server
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
