from http.client import HTTPConnection
import json
import time

origin = "motherload.td.org.uit.no:8001"

headers = {"Content-Type": "application/json"}


def press_button(id: dict, button: str):
    conn = HTTPConnection(origin)
    conn.request("POST", f"/button/{button}", json.dumps(id), headers)
    conn.getresponse()


def get_msg(id: dict):
    conn = HTTPConnection(origin)
    id = id["message_id"]
    conn.request("GET", f"/message/{id}")
    resp = conn.getresponse()
    return resp.read()


def send_msg(id: dict):
    conn = HTTPConnection(origin)
    id = id["message_id"]
    conn.request("POST", f"/message/{id}/send")
    resp = conn.getresponse()
    return resp.read()


conn = HTTPConnection(origin)
conn.request("GET", "/message/new")
resp = conn.getresponse()
id = json.loads(resp.read())

# select 'u'
press_button(id, '8')
press_button(id, '8')
press_button(id, '8')


# select 'i'
press_button(id, '4')
press_button(id, '4')
press_button(id, '4')
press_button(id, '4')

# select 't'
press_button(id, '8')
press_button(id, '8')

# select 'h'
press_button(id, '4')
press_button(id, '4')
press_button(id, '4')

# select 'a'
press_button(id, '2')
press_button(id, '2')

time.sleep(0.5)

# select 'c'
press_button(id, '2')
press_button(id, '2')
press_button(id, '2')
press_button(id, '2')


# select 'k'
press_button(id, '5')
press_button(id, '5')
press_button(id, '5')


# select '2'
press_button(id, '2')

# select '3'
press_button(id, '3')


# select ' '
press_button(id, '0')
press_button(id, '0')

# select 'f'
press_button(id, '3')
press_button(id, '3')
press_button(id, '3')
press_button(id, '3')


# select 'l'
press_button(id, '5')
press_button(id, '5')
press_button(id, '5')
press_button(id, '5')

# select 'a'
press_button(id, '2')
press_button(id, '2')

# select 'g'
press_button(id, '4')
press_button(id, '4')


time.sleep(0.5)

flag = send_msg(id)
print(flag)
