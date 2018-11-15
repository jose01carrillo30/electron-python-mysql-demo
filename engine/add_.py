import sys
import connect_to_database as db
db.cursor.execute("SHOW DATABASES")
myresult = db.cursor.fetchall()

for x in myresult:
  print(x)
sys.stdout.flush()
