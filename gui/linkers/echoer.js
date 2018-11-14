function do_shit() {
  var ps = require("python-shell")
  var path = require("path")

  var shit = document.getElementById("shit").value
  document.getElementById("shit").value = "";

  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [shit]
  }
  
  ps.PythonShell.run('showdatabases.py', options, function (err, results) {
    if (err) throw err;
    swal(results[0]);
  });  
}
