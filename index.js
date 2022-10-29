function sendToPython() {
    var { PythonShell } = require('python-shell');
  
    let options = {
      mode: 'text',
      args: [input1.value,input2.value]
    };
  
    PythonShell.run('./pyfiles/meeb.py', options, function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: ', results);
      result.textContent = results[0];
    });
  
  }
window.onload = function() {
    document.getElementById("btn").addEventListener("click", sendToPython);
}