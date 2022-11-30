## Build

`docker build -t crontab . --no-cache`

## Run container

`docker run -it crontab`

Will start a cronjob that requests api/admin every minute
through puppeteer headless browser. This will trigger all potenatial
xss scripts located in database.
