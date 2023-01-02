FROM ubuntu:20.04
LABEL Description="UiTHack23 tamagotchi"
EXPOSE 6400

# Installation
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y socat

# User
RUN adduser --disabled-password --gecos "" tamagotchi

RUN chown -R root:root /home/tamagotchi
COPY tamagotchi /home/tamagotchi
COPY flag.txt /home/tamagotchi
RUN chmod 755 /home/tamagotchi/tamagotchi
RUN chmod 755 /home/tamagotchi/flag.txt

USER tamagotchi
WORKDIR /home/tamagotchi

CMD socat TCP-LISTEN:6400,reuseaddr,fork EXEC:"/home/tamagotchi/tamagotchi",stderr
