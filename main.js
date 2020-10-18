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
        icon: "build/icon.ico",
    });
    mainWindow.loadFile("app/index.html");
};

app.on("ready", createWindow);