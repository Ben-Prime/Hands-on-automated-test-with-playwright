# Use an official Playwright base image (Node.js with browsers and dependencies)
# It's recommended to pin to a specific version for reproducibility
FROM mcr.microsoft.com/playwright:v1.60.0-noble-amd64
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to install dependencies
# This leverages Docker's caching, so dependencies are only reinstalled if these files change
COPY package*.json ./
# Install project dependencies
RUN npm install
# Copy the rest of your Playwright project files into the container
COPY . .
# Install Playwright browsers
RUN npx playwright install chrome
# Command to run Playwright tests when the container starts
# You can adjust this based on your specific needs
CMD ["npx", "playwright", "test", "--update-snapshots"]
# command to build docker image: docker build -t playwright-tests .
# comand to run the playwright test in an isolated container: docker run --rm -it --ipc=host playwright-tests
# to access reports use command: docker run --rm -v "${PWD}/playwright-report:/app/playwright-report" playwright-tests