const playPause = document.querySelector(".play-pause");
const spectrum = document.querySelector(".spectrum");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
var x = document.getElementById("myAudio");

// playPause.addEventListener("click", function () {
//   alert("ok");
// });

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

x.volume = 0.5;

swal("Play the Music?", {
  buttons: {
    yes: {
      text: "Yes",
      value: "yes",
    },
    no: {
      text: "No",
      value: "no",
    },
  },
}).then((value) => {
  switch (value) {
    case "yes":
      x.play();
      playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
      break;

    default:
      playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
      spectrum.pause();
  }
});

const vol = document.querySelector(".vol-slider");

vol.addEventListener("input", function () {
  x.volume = vol.value / 100;
});

playPause.addEventListener("click", function () {
  if (playPause.innerHTML == '<i class="fa-solid fa-pause"></i>') {
    x.pause();
    spectrum.pause();
    playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
  } else {
    x.play();
    spectrum.play();
    playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
});

let i = 0;

forward.addEventListener("click", function () {
  i += 1;
  x.pause();
  console.log(i);

  if (i == 1) {
    x.src = "assets/Playboi Carti Feel Like God (Instrumental With Hook).mp3";
  } else if (i == 2) {
    x.src = "assets/Mr.Kitty - After Dark (1).mp3";
  } else if (i == 3) {
    x.src = "https://audio.jukehost.co.uk/txqb64opWsLAOTOIqzP8U6GWRsOBwiAI"; // Teel Em Instrumental
  } else if (i == 4) {
    x.src = "https://audio.jukehost.co.uk/0QCIOj59VTp11qOOL1qNG38OAKWOx7a6"; // yeat money so big
  } else if (i == 5) {
    x.src = "https://audio.jukehost.co.uk/lZ4csTTWPmC5D21A4Jo9yAZHhujnAKbt"; // kslv disaster
  } else if (i == 6) {
    x.src = "https://audio.jukehost.co.uk/o3bSHbye6FfC80yus2SCW26FAz0AIja3"; // dvrst close eyes
  } else if (i == 7) {
    x.src = "https://audio.jukehost.co.uk/2sA0y366lpNmPV5wKdtYeq85tSOyrSCC"; // henson sahara
  } else if (i == 8) {
    x.src = "https://audio.jukehost.co.uk/flJ9QVDVenl9NFvEPJrGrLVUUob50JpK"; // lemuel j sianipar ponk
  } else if (i == 9) {
    x.src = "https://audio.jukehost.co.uk/qHHUKfP0tuTRwyZAkrw6L7UHyeL2C80O"; // 0% angel
  }

  x.play();

  if (i > 9) {
    i = 9;
  }
});

backward.addEventListener("click", function () {
  i = i - 1;
  x.pause();
  console.log(i);
  if (i == 0) {
    x.src = "assets/playboi carti - meh banakula remix.mp3";
  } else if (i == 1) {
    x.src = "assets/Playboi Carti Feel Like God (Instrumental With Hook).mp3";
  } else if (i == 2) {
    x.src = "assets/Mr.Kitty - After Dark (1).mp3";
  } else if (i == 3) {
    x.src = "https://audio.jukehost.co.uk/txqb64opWsLAOTOIqzP8U6GWRsOBwiAI"; // Teel Em Instrumental
  } else if (i == 4) {
    x.src = "https://audio.jukehost.co.uk/0QCIOj59VTp11qOOL1qNG38OAKWOx7a6"; // yeat money so big
  } else if (i == 5) {
    x.src = "https://audio.jukehost.co.uk/lZ4csTTWPmC5D21A4Jo9yAZHhujnAKbt"; // kslv disaster
  } else if (i == 6) {
    x.src = "https://audio.jukehost.co.uk/o3bSHbye6FfC80yus2SCW26FAz0AIja3"; // dvrst close eyes
  } else if (i == 7) {
    x.src = "https://audio.jukehost.co.uk/2sA0y366lpNmPV5wKdtYeq85tSOyrSCC"; // henson sahara
  } else if (i == 8) {
    x.src = "https://audio.jukehost.co.uk/flJ9QVDVenl9NFvEPJrGrLVUUob50JpK"; // lemuel j sianipar ponk
  } else if (i == 9) {
    x.src = "https://audio.jukehost.co.uk/qHHUKfP0tuTRwyZAkrw6L7UHyeL2C80O"; // 0% angel
  }

  x.play();

  if (i < 0) {
    i = 0;
  }
});
