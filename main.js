const electron = require('electron');
const { app, BrowserWindow } = require('electron');
const ipc = electron.ipcRenderer;

const letterCombosULine = [ 'qu', 'ck', 'ff', 'ss', 'll', 'zz',
'ch', 'ar', 'sh', 'or', 'th', 'ur', 'ng', 'ow', 'ai', 'oi', 'ee',
'ear', 'igh', 'air', 'oa', 'ure', 'oo', 'er', 'oy', 'ou', 'ay' ];

const redWords = [ 'the', 'to', 'i', 'go', 'no', 'in', 'he', 'she',
 'we', 'me', 'be', 'was', 'my', 'you', 'her', 'they', 'all', 'are',
  'said', 'so', 'do', 'have', 'like', 'some', 'come', 'were',
	 'there', 'little', 'one', 'when', 'out', 'what', 'peter',
	  'jane', 'water', 'here' ];

const lettersUDot = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z' ];

function createWindow() {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});
	win.show();
	win.loadFile('index.html');

	win.on('closed', () => {
		win = null;
	});
}

// function applyFormattingRules() {
//   myConsole.log('called!');
// };

app.on('ready', createWindow);

let nodeConsole = require('console');
let myConsole = new nodeConsole.Console(process.stdout, process.stderr);
myConsole.log('It works!!!!!');

// const formattingBtn = document.getElementByName('applyRules');
// formattingBtn.addEventListener('click', function () {
//   alert('clicked!');
//   applyFormattingRules();
// });

// const con = require('electron').remote.getGlobal('console');
// con.log('This is output to main process console.');

// const updateBtn = document.getElementById('updateBtn');
//
// updateBtn.addEventListener('click', function () {
//   ipc.send('update-notify-value', document.getElementById('notifyVal').value);
// });

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
