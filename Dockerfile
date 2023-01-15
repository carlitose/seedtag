# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application files
COPY dist/ ./dist

# Expose the port that the application will run on
EXPOSE 8888

# Start the application
CMD ["node", "dist/app.js"]