// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogs from "./data.js";

let currentDog = [];

const dogsNamesArr = dogs.map((el) => el.name);
dogsNamesArr.push("");

function getNewDog() {
  const doggy = dogsNamesArr.shift();
  return doggy
    ? (currentDog = new Dog(dogs.filter((el) => el.name === doggy)[0]))
    : {};
}

function renderNoUsers() {
  document.getElementById("user").style.backgroundImage = "none";
  document.getElementById("user").style.backgroundColor = "gray";
  document.getElementById("user").innerHTML = `<h1>No more users</h1>`;
}

function render() {
  getNewDog();
  document.getElementById("user").innerHTML = currentDog.setDogHtml();
  if (dogsNamesArr.length === 0) setTimeout(renderNoUsers(), 1500);
}

render();

function like() {
  if (
    !currentDog.hasBeenSwiped &&
    !currentDog.hasBeenLiked &&
    dogsNamesArr.length !== 0
  ) {
    document.getElementsByClassName("like")[0].classList.remove("hidden");
    currentDog.hasBeenLiked = true;
    setTimeout(() => render(), 1500);
  }
}

function dislike() {
  if (
    !currentDog.hasBeenSwiped &&
    !currentDog.hasBeenLiked &&
    dogsNamesArr.length !== 0
  ) {
    document.getElementsByClassName("nope")[0].classList.remove("hidden");
    currentDog.hasBeenSwiped = true;
    setTimeout(() => render(), 1500);
  }
}

document.getElementById("like").addEventListener("click", like);
document.getElementById("dislike").addEventListener("click", dislike);
