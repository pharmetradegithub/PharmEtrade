# Use Node.js 20 as the base image for building the application
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app

# Define build arguments for proxy configuration
ARG HTTP_PROXY
ARG HTTPS_PROXY

# Set environment variables for proxy configuration
ENV HTTP_PROXY=${HTTP_PROXY}
ENV HTTPS_PROXY=${HTTPS_PROXY}

# Copy package files into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the working directory
COPY . .

# Build the application
RUN npm run build

# Use Node.js 20 as the base image for the production environment
FROM node:20 AS production

# Set the working directory inside the container
WORKDIR /app

# Install the "serve" package globally
RUN npm install -g serve

# Copy the built application from the build stage
COPY --from=build /app/dist ./dist

# Expose the application port
EXPOSE 5173

# Define the command to run the application
CMD ["serve", "-s", "dist", "-l", "5173"]