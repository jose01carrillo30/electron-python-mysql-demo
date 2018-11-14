function do_shit() {
  var ps = require("python-shell")
  var path = require("path")

  var shit = document.getElementById("echopage").value
  document.getElementById("echopage").value = "";

  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [shit]
  }
  
  ps.PythonShell.run('showdatabases.py', options, function (err, results) {
    if (err) throw err;
    swal(results[0]);
  });  
}
