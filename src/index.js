// // write your code here
// const ramenMenu = document.getElementById("ramen-menu");
// const ramenDetail = document.getElementById("ramen-detail");
// const ramenUrl = "http://localhost:3000/ramens";

// function menuSource() {
//   fetch(ramenUrl)
//     .then((response) => response.json())
//     .then((ramenImgs) => (obj = ramenImgs))
//     .then(() => console.log(obj));
// }
// menuSource();
// // See all ramen images in the `div` with the id of `ramen-menu`. When the page
// // loads, request the data from the server to get all the ramen objects. Then,
// // display the image for each of the ramen using an `img` tag inside the
// // `#ramen-menu` div.

// function loadingPage() {
//   document.addEventListener("DOMContentLoaded", ramenMenuImg);
// }

// function ramenMenuImg(ramen) {
//   ramen.append(ramenMenu);
// }
//////////////////////////////////////////////////////new try////////////
// fetch all the ramens
// create img tag
// put ramen image in the image tag
// append img to div

const ramenUrl = "http://localhost:3000/ramens";

//
function fetchRamens() {
  fetch(ramenUrl)
    .then((response) => response.json())
    .then((arrRamenObj) => renderAllRamens(arrRamenObj));
}

//DOM Selectors
const ramenMenu = document.getElementById("ramen-menu");
const details = document.getElementById("ramen-detail");
const detailName = document.querySelector(".name");
const detailRestaurant = document.querySelector(".restaurant");
const detailRating = document.getElementById("rating-display");
const detailComment = document.getElementById("comment-display");
const form = document.getElementById("new-ramen");
//Event listeners
form.addEventListener("submit", handleRamen);
// render functions
function renderAllRamens(arrRamenObj) {
  arrRamenObj.forEach((ramenObj) => renderOneRamen(ramenObj));
}

//callbacks
function renderOneRamen(arrRamenObj) {
  const img = document.createElement("img");
  img.src = ramenObj.image;
  ramenMenu.append(img);
  img.addEventListener("click", (e) => handClick(e, ramenObj));
}
function handClick(e, ramenObj) {
  detailName.textContent = ramenObj.detailName;
  detailRestaurant.textContent = ramenObj.detailRestaurant;
  detailRating.textContent = ramenObj.rating;
  detailContent.textContent = ramenObj.comment;
}
function handleRamen(e) {
  e.preventDefault();
  const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  };
  renderOneRamen(newRamen);
}
