const electron = require("electron").remote;

const animejs = require("animejs");

const closeWindow = electron.getCurrentWindow().close;

const animation = animejs({
    targets: "#biene",
    rotate: "360",
    duration: 1000,
    endDelay: 0,
    autoplay: false,
});
const animationRun = () => {
    animation.restart();
};

const init = () => {
    let versionel = document.getElementById("versionandcopyright");
    versionel.innerText =
        "Version " + electron.app.getVersion() + " von Mark Oude Elberink";
    console.log(process);
};
init();