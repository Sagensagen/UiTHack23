FROM ubuntu:20.04
LABEL Description="UiTHack23 ollivanders"
EXPOSE 6300

# Installation
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y socat

# User
RUN adduser --disabled-password --gecos "" ollivander

RUN chown -R root:root /home/ollivander
COPY ollivanders /home/ollivander
COPY flag.txt /home/ollivander
RUN chmod 755 /home/ollivander/ollivanders
RUN chmod 755 /home/ollivander/flag.txt

USER ollivander
WORKDIR /home/ollivander

CMD socat TCP-LISTEN:6300,reuseaddr,fork EXEC:"/home/ollivander/ollivanders",stderr
