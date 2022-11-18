FROM ubuntu:20.04
LABEL Description="UiTHack23 mp3_player"
EXPOSE 6100

# Installation
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y socat

# User
RUN adduser --disabled-password --gecos "" mp3

COPY mp3_player /home/mp3
COPY flag.txt /home/mp3
RUN chmod 555 /home/mp3/mp3_player
RUN chmod 555 /home/mp3/flag.txt

USER mp3
WORKDIR /home/mp3

CMD socat TCP-LISTEN:6100,reuseaddr,fork EXEC:"/home/mp3/mp3_player",stderr
