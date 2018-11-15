# Demo

Modified from: https://github.com/SouravJohar/python-app-with-electron-gui
Video: https://youtu.be/627VBkAhKTc

## Dependenices

* Python
* electron.js
* NodeJS
* MySQL Server
* Node dependencies
  * python-shell
  * sweetalert

## Getting Started:

    * Make sure you have `electron.js` - download it by typing `npm install electron -g`. This is will install Electron.js and set up your PATH. You should only have to do this once on your machine.
    * Install the node dependencies
    * You will have to get your mySQL server up and running. Change the information in the `engine/connect_to_database.py` to match your MySQL server.


## Running the Program:

* Run start.bat (Windows) or start.command (Mac)
* Alternatively you can manually run via `npm start main.js` inside the `gui/` directory.

## Known Issues:

* start file cannot cd out of gui folder
