import json
from datetime import datetime
import os
from flask import Flask, request, jsonify
from flask_apscheduler import APScheduler

START = -1
END = -1

app = Flask(__name__)

password = []
password_correct = ["2", "4", "6", "8", "10"]


def clear_password():
    # Clear password every second'
    global START
    global END
    START = -1
    END = -1

    if len(password) > 0:
        password.clear()


@app.route('/', methods=['GET'])
def attempt_connection():

    global START

    data = request.args.get('digit')

    # Get end time
    if START != -1:
        global END
        now = datetime.now()
        END = now.second
        password.append(data)
        if (END - START) < 1 and password == password_correct:
            START = -1
            END = -1
            password.clear()
            return jsonify({'key': 'UiTHack23{that-was-really-fast-god-damn}'})
        elif (END - START) >= 1:
            START = -1
            END = -1
            password.clear()
            return 'TOO SLOW, RESTARTING\n'
        else:
            now = datetime.now()
            START = now.second
            return 'HURRY\n'

    # Get start time
    else:
        password.clear()
        now = datetime.now()
        START = now.second
        password.append(data)
        return 'STARTING, HURRY!\n'


if (__name__ == "__main__"):
    scheduler = APScheduler()
    scheduler.add_job(func=clear_password,
                      trigger='interval', id='job', seconds=1)
    scheduler.start()
    port = int(os.environ.get('PORT', 5000))

    app.run(debug=True, host='0.0.0.0', port=port)
