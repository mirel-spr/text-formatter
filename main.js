const electron = require('electron');
const { app, BrowserWindow } = require('electron');

const letterCombosULine = [ 'qu', 'ck', 'ff', 'ss', 'll', 'zz',
'ch', 'ar', 'sh', 'or', 'th', 'ur', 'ng', 'ow', 'ai', 'oi', 'ee',
'ear', 'igh', 'air', 'oa', 'ure', 'oo', 'er', 'oy', 'ou', 'ay' ];

const wordsRed = [ 'the', 'to', 'I', 'go', 'no', 'in', 'he', 'she',
 'we', 'me', 'be', 'was', 'my', 'you', 'her', 'they', 'all', 'are',
  'said', 'so', 'do', 'have', 'like', 'some', 'come', 'were',
	 'there', 'little', 'one', 'when', 'out', 'what', 'Peter',
	  'Jane', 'water', 'here' ];

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

function applyFormattingRules() {
  console.log('called!');
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
