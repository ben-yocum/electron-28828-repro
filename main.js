const {app, BrowserWindow} = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow();

  mainWindow.loadFile('dummy.pdf');

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.print();
  });
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
