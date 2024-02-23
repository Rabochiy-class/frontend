# ----------------------------
# Stage 1: Build the application
# ----------------------------
FROM node:lts-alpine as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy project files and folders to the current working directory (i.e. "app" folder)
COPY . .

# Build the application
RUN npm run build

# ----------------------------
# Stage 2: Serve the application with nginx
# ----------------------------
FROM nginx:stable-alpine as production-stage

# Copy the built files from the build-stage to the default nginx public folder
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to be accessible from the outside of the Docker container
EXPOSE 80

# When the container starts, nginx starts as well
CMD ["nginx", "-g", "daemon off;"]