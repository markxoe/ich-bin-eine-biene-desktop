const electron = require("electron").remote;

const animejs = require("animejs");

const closeWindow = electron.getCurrentWindow().close;

let counter = 0;

const animation = animejs({
    targets: "#biene",
    rotate: "360",
    duration: 1000,
    endDelay: 0,
    autoplay: false,
});
const animationRun = () => {
    counter++;
    theEasterEgg();
    animation.restart();

};

const theEasterEgg = () => {
    if (counter == 10) {
        console.log("hans")
        document.getElementById("ueberraschung").style.display = "block";
    }
    if (counter == 12) {
        document.getElementById("ueberraschung").style.display = "none";
    }
    if (counter == 15) {
        document.getElementById("heading").innerText = "Du bist eine Biene"
    }
}

const init = () => {
    let versionel = document.getElementById("versionandcopyright");
    versionel.innerText =
        "Version " + electron.app.getVersion() + " von Mark Oude Elberink";
};
init();