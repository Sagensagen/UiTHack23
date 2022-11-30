from flask import Flask, request, jsonify, Response, render_template
import sqlite3
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


@app.route('/complaint', methods=['POST'])
def getComplaints():

    data = request.get_json()
    print(data['email'])
    conn = sqlite3.connect('complaints.db')
    c = conn.cursor()
    c.execute("INSERT INTO complaints VALUES (?, ?)",
              (data['email'], data['complaint']))
    conn.commit()
    conn.close()

    resp = Response("Complaint added successfully")

    return resp


@app.route('/', methods=['GET'])
def postComplaints():
    ip = request.remote_addr
    # if (ip != '127.0.0.1'):
    #     print("UNAUTHORIZED  IP")
    #     return 200
    conn = sqlite3.connect('complaints.db')
    c = conn.cursor()
    c.execute("SELECT * FROM complaints")
    data = c.fetchall()
    conn.close()
    response = jsonify(data)
    return response


@app.route('/admin', methods=['GET'])
def adminDashabord():
    # ip = request.remote_addr
    # if (ip != '127.0.0.1'):
    #     print("UNAUTHORIZED  IP")
    #     return 200
    return render_template('index.html')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
