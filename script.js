const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');
const soundNames = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open Hi-Hat",
  Z: "Kick and Hat",
  X: "Kick",
  C: "Closed Hi-Hat"
};

// Créer une fonction pour jouer les sons

function playSound(key) {
    const audio = document.getElementById(key);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        display.textContent = soundNames[key];
    } else {
        display.textContent = `No sound assigned to: ${key}`;
    }
    console.log(`Playing sound for key: ${key}`);
}

// Gérer les clics de souris

drumPads.forEach((pad) => {

  pad.addEventListener("click", function() {


    const key = pad.querySelector("audio").id;

    playSound(key);

  });

});

// Gérer les touches du clavier

document.addEventListener("keydown", function(event) {

  const key = event.key.toUpperCase();

  const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  if (validKeys.includes(key)) {

    playSound(key);

  }

});