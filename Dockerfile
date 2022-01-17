# # From  node.js LTS version: 16
# FROM node:16 


# # Create app directory
# WORKDIR /app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY app/package*.json ./

# RUN npm ci --only=production
# # RUN npm install -- for dev use
# # If you are building your code for production
# # RUN npm ci --only=production

# EXPOSE 9991
# CMD [ "node", "server.js" ]


# cmdapi v0.1.0
# Dockerfile
# From  node.js LTS version: 16
FROM node:16 

WORKDIR /app

COPY app/package*.json ./ 
COPY app/*.js ./


# run install
RUN npm ci --only=production 
CMD [ "node", "server.js" ]
