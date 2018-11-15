function show_database() {
  var ps = require("python-shell")
  var path = require("path")

  var text_in = document.getElementById("showDatabaseField").value
  document.getElementById("showDatabaseField").value = "";  // clears entered text

  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [text_in]
  }
  
  ps.PythonShell.run('showdatabases.py', options, function (err, results) {
    if (err) throw err;
    // format text
    if (results[0] == "databases") {
      textout = "Databases on host:\n"
      for(i=1;i<results.length;i++) {
        textout = textout + results[i] + "\n"
      }
    }
    if (results[0] == "tables") {
      textout = "Tables on database:\n"
      for(i=1;i<results.length;i++) {
        textout = textout + results[i] + "\n"
      }
    }
    if (results[0] == "error") {
      textout = "Error:\n"
      for(i=1;i<results.length;i++) {
        textout = textout + results[i] + "\n"
      }
    }
    swal(textout);
  });  
}
function add_shit() {
  var ps = require("python-shell")
  var path = require("path")

  var shit = document.getElementById("addpage").value
  document.getElementById("addpage").value = "";

  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [shit]
  }
  
  ps.PythonShell.run('add_.py', options, function (err, results) {
    if (err) throw err;
    textout = ""
    for(i=0;i<results.length;i++) {
      textout = textout + results[i] + "\n"
    }
    swal(textout);
  });  
}
