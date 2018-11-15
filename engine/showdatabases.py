import sys
import mysql.connector
import connect_to_database as db
if sys.argv[1] == "" or len(sys.argv) <= 1:
  db.cursor.execute("SHOW DATABASES")
  myresult = db.cursor.fetchall()
  print("databases")
else:
  try:
    db.cursor.execute("USE "+ sys.argv[1])
  except:
    myresult = ["No database found with name of '%s'"%sys.argv[1]]
    print("error")
  else:
    db.cursor.execute("SHOW TABLES")
    myresult = db.cursor.fetchall()
    print("tables")

for x in myresult:
  print(x)
sys.stdout.flush()
