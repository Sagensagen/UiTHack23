FROM ubuntu:latest
MAINTAINER docker@ekito.fr

RUN apt-get update && apt-get -y install cron
RUN apt-get install cron -y
FROM python:3.9-slim-buster
WORKDIR /app
COPY ./requirements.txt /app
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8003
ENV FLASK_APP=api.py



ENTRYPOINT ["python"]
CMD ["api.py"]


# CMD ["flask", "run", "--host", "0.0.0.0"]