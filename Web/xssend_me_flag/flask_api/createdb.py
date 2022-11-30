import sqlite3

conn = sqlite3.connect('complaints.db')
c = conn.cursor()

c.execute('''
          CREATE TABLE IF NOT EXISTS complaints
            ( email text, complaint text)
          ''')


conn.commit()
conn.close()
