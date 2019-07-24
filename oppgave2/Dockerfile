FROM node

WORKDIR /app
COPY <dependencies> <workdir>
COPY <app> <workdir>
RUN <install dependencies>

EXPOSE <port>
CMD ["node", "app.js"]
