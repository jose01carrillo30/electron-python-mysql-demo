import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="rootpassword",
    database="paweg_demo"
)
cursor = mydb.cursor()  # we use this object to run execute querries and get results
