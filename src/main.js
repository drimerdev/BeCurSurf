const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load your HTML file or URL into the browser window
  mainWindow.loadFile('./src/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Event triggered when Electron has finished initializing
app.whenReady().then(createWindow);

// Event triggered when all windows are closed
app.on('window-all-closed', function () {
  // On macOS, close the app only if there are no windows open
  if (process.platform !== 'darwin') app.quit();
});

// Event triggered when the app is activated (e.g., clicked on the dock on macOS)
app.on('activate', function () {
  // Create a new window if none are open when the app is activated
  if (mainWindow === null) createWindow();
});
