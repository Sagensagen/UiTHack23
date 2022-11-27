FROM python:3.10.8-slim-buster

WORKDIR .

COPY . .
RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python3.10", "oracle.py"]