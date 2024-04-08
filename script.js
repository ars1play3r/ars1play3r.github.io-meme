//reloj
const reloj = document.getElementById("reloj");

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  reloj.textContent = `Hora: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
// Call updateClock once to initialize the clock
updateClock();

//meme generator
const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
