FROM node:10.19.0
LABEL Description="UiTHack23 Admin Login"
EXPOSE 5100

# Installation
RUN apt-get update && apt-get upgrade -y

# User
RUN adduser --disabled-password --gecos "" proto_admin

COPY ["app.js", "package-lock.json", "package.json", "utils.js", "/home/proto_admin/"]
COPY ["views/", "/home/proto_admin/views/"]

USER proto_admin
WORKDIR /home/proto_admin

RUN npm install --production
CMD ["node", "app.js"]
