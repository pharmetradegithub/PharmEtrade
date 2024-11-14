FROM node:20 as build
WORKDIR /app
ARG HTTP_PROXY
ARG HTTPS_PROXY
ENV HTTP_PROXY=${HTTP_PROXY}
ENV HTTPS_PROXY=${HTTPS_PROXY}
COPY package*.json ./
RUN npm config set proxy ${HTTP_PROXY} && \
  npm config set https-proxy ${HTTPS_PROXY}
RUN npm install
COPY . .
RUN npm run build
FROM node:18 as production
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]