# Build React Server
FROM node:16-alpine 


# RUN npm ci 
# RUN npm run build

# Start Production Server
FROM nginx:1.21.0-alpine as production
WORKDIR /app
# COPY . .
ENV NODE_ENV production
COPY --from=builder /app/build /home/ec2-user/williamsilberste.in/build
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]