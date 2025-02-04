FROM node:18 AS build

WORKDIR /app

ARG HTTP_PROXY
ARG HTTPS_PROXY
ENV HTTP_PROXY=${HTTP_PROXY}
ENV HTTPS_PROXY=${HTTPS_PROXY}

ENV VITE_SQUARE_APP_ID=sq0idp-gB46fswzI1EYbiQKJqemGA
ENV VITE_API_BASE_URL=https://server.pharmetrade.com
COPY package*.json ./

RUN npm config set proxy ${HTTP_PROXY} && \
    npm config set https-proxy ${HTTPS_PROXY}

RUN npm install

COPY . .

RUN npm run build

FROM node:18 AS production

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
