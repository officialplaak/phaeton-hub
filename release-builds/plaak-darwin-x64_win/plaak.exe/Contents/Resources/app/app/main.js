const electron = require('electron');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var Menu_opt = electron.Menu;
let mainWindow;

function createWindow() {
   let {width, height} = require('electron').screen.getPrimaryDisplay().size
  mainWindow = new BrowserWindow({
    width: width, 
    height: height,
    backgroundColor: '#171820',
    show: false,
    icon: path.join(__dirname, '/assets/Plaak-Wallet-Splash.png')
  });
  //mainWindow.openDevTools();
  //console.log(path.join(__dirname, '/build/index.html'));
  mainWindow.loadURL(`file://${path.join(__dirname, '/build/index.html')}`);

  app.setAboutPanelOptions({
    applicationName: "plaak Desktop Wallet",
    applicationVersion: "0.1.0",
  })
  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize();
    mainWindow.setResizable(false);
     mainWindow.show();
 })
  mainWindow.on('closed', () => mainWindow = null);

  var template = Menu_opt.buildFromTemplate([{
        label: "Plaak Desktop Wallet",
        submenu: [
            { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
            { type: "separator" },
            { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
        ]}, {
        label: "Edit",
        submenu: [
            { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
            { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
            { type: "separator" },
            { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
            { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
            { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
            { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
        ]}
    ]);

    Menu_opt.setApplicationMenu(template);

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