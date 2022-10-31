># Noob5 - Think out of the "box". 
>>    Noob5 - 400pts
>
>
>There might be ways around what you are not allowed on this server. A lot happens under the hood you know, running in silence, serving bigger purposes revealing a piece of cloth or similar material, typically oblong or square, attachable by one edge to a pole or rope and used as the symbol or emblem of a country or institution or as a decoration during public festivities.
>
>The username for this , is `noob5`.  
>The server name is `wwww.limewire.td.org.uit.no`.  
>Password is noob4's flag
>
>Tips:
>`ssh noob5@wwww.limewire.td.org.uit.no`




## Writeup
Find the nginx config, leaking something is hosted at /var/www/forbidden/index.html, but is restricted.
Use the prot Nginx has defined and `http://wwww.limewire.td.org.uit.no:8080/`
to find the flag online. 

```
UiTHack23{cant_grep_this}
```