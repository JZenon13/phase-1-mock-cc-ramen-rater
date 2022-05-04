document.addEventListener("DOMContentLoaded", () => {});
const ramenURL = "http://localhost:3000/ramens";

fetch(ramenURL)
  .then((response) => response.json())
  .then((ramenArray) => selectRamen(ramenArray));
//fetch

//DOM selectors
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const ramenName = document.querySelector("#ramen-detail > h2");
const ramenRest = document.querySelector("#ramen-detail > h3");

const ramenRating = document.querySelector("#rating-display");
const ramenComment = document.querySelector("#comment-display");
//form selectors
const form = document.querySelector("#new-ramen");

//event listeners
form.addEventListener("submit", addNewRamen);
//render functions

function selectRamen(ramenArray) {
  ramenArray.forEach(renderNewRamen);
}

function handleClick(e) {
  const ramenImage = document.querySelector(".detail-image");
  ramenImage.src = e.target.details.image;
  ramenRest.textContent = e.target.details.restaurant;
  ramenName.textContent = e.target.details.name;
  ramenRating.textContent = e.target.details.rating;
  ramenComment.textContent = e.target.details.comment;
}

//callback functions

function renderNewRamen(ramen) {
  let imgTag = document.createElement("img");
  imgTag.src = ramen.image;
  imgTag.details = ramen;
  imgTag.addEventListener("click", handleClick);
  ramenMenu.append(imgTag);
}

function addNewRamen(e) {
  e.preventDefault();

  const newName = document.querySelector("#new-name").value;
  const newRestaurant = document.querySelector("#new-restaurant").value;
  const newImage = document.querySelector("#new-image").value;
  const newRating = document.querySelector("#new-rating").value;
  const newComment = document.querySelector("#new-comment").value;

  let newRamenArr = { newName, newRestaurant, newImage, newRating, newComment };
  renderNewRamen(newRamenArr);
}
// newName =
//   newRestaurant =
//   newImage =
//   newRating =
//   newComment =
