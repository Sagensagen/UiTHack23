FROM ubuntu:20.04
LABEL Description="UiTHack23 Wizardry"
EXPOSE 6200

# Installation
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y socat

# User
RUN adduser --disabled-password --gecos "" wizard

RUN chown -R root:root /home/wizard
COPY spell /home/wizard
COPY flag.txt /home/wizard
RUN chmod 755 /home/wizard/spell
RUN chmod 755 /home/wizard/flag.txt

USER wizard
WORKDIR /home/wizard

CMD socat TCP-LISTEN:6200,reuseaddr,fork EXEC:"/home/wizard/spell",stderr
