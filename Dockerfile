# Use the official Node.js image
FROM node:alpine3.12


WORKDIR /app/
# Install dependencies
COPY . .
RUN npm install

# Copy the rest of the application code





CMD ["node", "index.js"]
