# Build React Server
FROM node:16-alpine 

WORKDIR /app
COPY . .

RUN npm ci 
RUN npm run build

# Start Production Server
FROM nginx:1.21.0-alpine as production

ENV NODE_ENV production
COPY nginx.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html
COPY /etc/letsencrypt/ /etc/letsencrypt/
# COPY --from=builder /app/build /home/ec2-user/williamsilberste.in/build
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]