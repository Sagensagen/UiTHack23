> # Web - Petes ancient machine
> > Web - 100?pts
>
> Pete has an ancient machine stored in his parents basement which both his parents have neglected over time.
> The password is known and is a 5 digit code (2, 4, 6, 8, 10). Pete, however, is having trouble getting on > to the machine and has found that the password resets after a short time. Find a way to enter the 5 digit > code as fast as possible.
>
> The flag will be the same format as this one:
> `UiTHack23{this_could_be_a_key}`.
>
> URL http://motherload.td.org.uit.no:8012/?digit=<some_digit>
> Make GET request


## Writeup
Create a for loop and make a curl get request chancing the some_digit for each iteration.

`UiTHack23{that-was-really-fast-god-damn}`
