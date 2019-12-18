const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
const { ipcMain } = require('electron');
const ipc = require('electron').ipcMain;

let nodeConsole = require('console');
let myConsole = new nodeConsole.Console(process.stdout, process.stderr);

let win;

function createWindow() {
  win = new BrowserWindow( {
    width: 800,
    height: 600
  });

  win.loadURL(url.format ( {
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));
};

//Event handler for async incoming messages
ipcMain.on('asynchronous-message', (event, arg) => {
  myConsole.log(arg);

  //Event emitter for sending async messages
  event.sender.send('asynchronous-reply', 'async pong');
});

//Event handler for sync incoming messages
ipcMain.on('synchronous-message', (event, arg) => {
  myConsole.log(arg);

  //Synchronous event emission
  event.returnValue = 'sync pong';
});

app.on('ready', createWindow);

ipc.on('update-notify-value', function (event, arg) {
  win.webContents.send('targetPriceVal', arg);
});
