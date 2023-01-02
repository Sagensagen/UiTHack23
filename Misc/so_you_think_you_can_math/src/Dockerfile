FROM python:3.8-slim-buster
LABEL Description="UiTHack23 so_you_think_you_can_math"
EXPOSE 8100

# Installation
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y socat

# User
RUN adduser --disabled-password --gecos "" math

RUN chown -R root:root /home/math
COPY server.py /home/math
COPY flag.txt /home/math
RUN chmod 755 /home/math/server.py
RUN chmod 755 /home/math/flag.txt

USER math
WORKDIR /home/math

CMD socat TCP-LISTEN:8100,reuseaddr,fork EXEC:"python3 server.py",stderr
