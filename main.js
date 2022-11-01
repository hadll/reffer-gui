const {app, BrowserWindow} = require('electron')
function createWindow () {
  window = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true, contextIsolation: false, enableRemoteModule: true}})
  window.loadFile('index.html')
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})

