const electron = require('electron');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 1020, 
    height: 720,
    backgroundColor: '#171820',
    show: false,
    icon: path.join(__dirname, '/assets/Plaak-Wallet-Splash.png')
  });
  console.log(path.join(__dirname, '/build/index.html'));
  mainWindow.loadURL(`file://${path.join(__dirname, '/build/index.html')}`);

  app.setAboutPanelOptions({
    applicationName: "plaak Desktop Wallet",
    applicationVersion: "0.1.0",
  })
  mainWindow.once('ready-to-show', () => {
     mainWindow.show()
 })
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});