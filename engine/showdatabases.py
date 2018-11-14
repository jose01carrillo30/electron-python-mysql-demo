import sys
import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="rootpassword"
)
mycursor = mydb.cursor()
mycursor.execute("SHOW DATABASES")
myresult = mycursor.fetchall()

for x in myresult:
  print(x)
sys.stdout.flush()
