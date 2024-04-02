FROM node:16-alpine as build-stage

# Accept build-time variables
ARG REACT_APP_BACKEND_URL

# Set the environment variable so it's available during the build
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

WORKDIR /app

COPY package*.json yarn.lock* ./

RUN npm install

COPY ./ ./

# The environment variable is now accessible for the React build script
RUN npm run build
# Stage 2: Serve the React application from Nginx
FROM nginx:stable-alpine as production-stage

# Copy the build artifacts from the build stage to the nginx server
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
