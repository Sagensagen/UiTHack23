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


@app.route('/db', methods=['GET'])
def postComplaints():
    args = request.args
    if (args.get("sha256") != "789abf9dc37b3eb1d1ba7b61032429bc9023258c6bcd2bec07f658176194c9dc5860641ca9c4450a0bf3a0d3ab71f80e94be4cdda4b948574b8fbfcd7ed5a5de06ed2a9d79ea5cebcd502fa01bb06bc4564cb44582cf1e3f7fdbade36490a8730f5a70b6b37b4562f2b3447204eb0b6d3fd777daf93bf10af5a5efcdd799b7c85a1641f8019fa0330b10ff4c28fb3e1d0c79f345d52efb504599d824d76adb008927d0c09f6b8aa6d63eb98f4e6226f34a76b166513be8e309d5f4f067faccb47c51ac744c23cd141354f419db0b91a3d4117ed610a6ce40e97a39928476498ea29f43e1b3578d329eb23275086fcc2d140d09bd10ad6d8d54c19ad54299b1bfc38799c35fc4f65d4417c4d3778b7a772b94448293a1d4a7ecc0ab0144ed33798531a975a4a10dca35fbed13ea0dd605e7b6aabb65d9f45b3b9b1d2c81ec3fbe"):
        return """
        <h1>901 NO FLAG HERE</h1>
        <br>
        """

    conn = sqlite3.connect('complaints.db')
    c = conn.cursor()
    c.execute("SELECT * FROM complaints")
    data = c.fetchall()
    c.execute("DELETE FROM complaints")
    conn.commit()
    conn.close()
    response = jsonify(data)

    return response


@app.route('/admin', methods=['GET'])
def adminDashabord():
    args = request.args
    if (args.get("sha256") != "789abf9dc37b3eb1d1ba7b61032429bc9023258c6bcd2bec07f658176194c9dc5860641ca9c4450a0bf3a0d3ab71f80e94be4cdda4b948574b8fbfcd7ed5a5de06ed2a9d79ea5cebcd502fa01bb06bc4564cb44582cf1e3f7fdbade36490a8730f5a70b6b37b4562f2b3447204eb0b6d3fd777daf93bf10af5a5efcdd799b7c85a1641f8019fa0330b10ff4c28fb3e1d0c79f345d52efb504599d824d76adb008927d0c09f6b8aa6d63eb98f4e6226f34a76b166513be8e309d5f4f067faccb47c51ac744c23cd141354f419db0b91a3d4117ed610a6ce40e97a39928476498ea29f43e1b3578d329eb23275086fcc2d140d09bd10ad6d8d54c19ad54299b1bfc38799c35fc4f65d4417c4d3778b7a772b94448293a1d4a7ecc0ab0144ed33798531a975a4a10dca35fbed13ea0dd605e7b6aabb65d9f45b3b9b1d2c81ec3fbe"):
        return """
        <h1>901 NO FLAG HERE</h1>
        <br>
        """
    else:
        return render_template('index.html')


if __name__ == "__main__":
    if not (os.path.exists('complaints.db')):
        conn = sqlite3.connect('complaints.db')
        c = conn.cursor()
        c.execute('''
                  CREATE TABLE IF NOT EXISTS complaints
                    ( email text, complaint text)
                  ''')
        conn.commit()
        conn.close()

    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
