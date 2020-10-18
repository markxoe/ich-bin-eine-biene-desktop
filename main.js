const { app, BrowserWindow, Tray, Menu } = require("electron");
const path = require("path");
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
        frame: false,
        width: 250,
        height: 150,
        icon: "res/icon/ico-icon.ico",
    });
    mainWindow.loadFile("app/index.html");

    const tray = new Tray(getIcon());
    tray.setToolTip("Eine Biene fliegt daher");
    console.log(app.isPackaged);
};

const getIcon = () => {
    if (app.isPackaged) {
        //return process.resourcesPath + "icon/ico-icon.ico";
        return path.join(process.resourcesPath, "icon/ico-icon.ico");
    } else {
        return "res/icon/ico-icon.ico";
    }
};

app.on("ready", createWindow);