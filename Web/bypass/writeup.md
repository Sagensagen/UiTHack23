> # Web - Bypass
> > Web - 250pts
>
> I've hid the flag behind this super secure admin login prompt. Are you able to retrieve the flag?
> Login as admin to view the flag.
>
> motherload.td.org.uit.no:8007/

## Writeup
The source code running the server is vulnerable to a prototype poisoning attack at the __/flag__ endpoint.

We need to bypass the first if-check by not having the __admin__ property set to true in the post-request, but we then need the __admin__ property set to __true__ for the second if-check.

As the server uses `Object.assign` to create a new user-object we can send a post-request with json, with the `__proto__` property set with `"admin":true`, to make `Object.assign` set the __admin__ property to true for the object it creates. This does bypass the first if-check as it does not check for `"admin":true` inside the `__proto__` property.

#### Payload
Sending a json post-request with the following payload will retrieve the flag
```json
{
  "__proto__": {
    "admin":true
  }
}
```
This bypasses the first if-check, as the __admin__ property is not set, but when `Object.assign` copies the properties of the user object and the request-body object it sets the __admin__ property to __true__ for the new __userAuth__ object.

```
UiTHack23{h3y_d0nt_p01s0n_my_pr07otyp3}
```
