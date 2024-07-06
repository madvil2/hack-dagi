# Use the official Node.js 18 image as the base image
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install app dependencies using Yarn
RUN yarn install

# Copy the rest of the app source code to the working directory
COPY . .

# Ensure assets directory is copied correctly
COPY ./src/assets ./src/assets

# Build the app
RUN yarn build

# Install serve to serve the app
RUN yarn global add serve

# Serve the app with a simple server
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 5000
