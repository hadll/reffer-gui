function sendToPython() {
    var { PythonShell } = require('python-shell');
    let options = {
      mode: 'text',
      args: [input1.value,input2.value]
    };
    PythonShell.run('./test.py', options, function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: ', results);
      result.innerHTML = results.join("<br>");
    });
  
  }
// function toggleTheme(){
//   switcher=document.getElementById("switcher")
//   if (switcher.className==="theme-dark"){
//     switcher.className="theme-light"
//     switcher.src="Images/theme1.png"

//   } else if (theme==="theme-light"){
//     switcher.src="Images/theme0.png"
//     switcher.className="theme-dark"
//   }
// }
window.onload = function() {
    document.getElementById("btn").addEventListener("click", sendToPython);
    // document.getElementById("switcher").addEventListener("click", toggleTheme);
}