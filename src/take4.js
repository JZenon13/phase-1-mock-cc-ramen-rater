document.addEventListener("DOMContentLoaded", renderObj);

const ramensURL = "http://localhost:3000/ramens";

//fetch
fetch(ramensURL)
  .then((response) => response.json())
  .then((arrObj) => renderObj(arrObj));

//add event listeners
//DOM selecters
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const ramenImg = document.querySelector(".detail-image");
const ramenName = document.querySelector(".name");
const ramenRestaurant = document.querySelector(".restaurant");
const form = document.getElementById("new-ramen");
//callback functions

//render functions
function renderObj(arrObj) {
  arrObj.forEach((obj) => renderImg(obj));
}
function renderImg(obj) {
  const imgTag = document.createElement("img");
  imgTag.src = obj.image;
  ramenMenu.append(imgTag);

  const detailedClick = imgTag.addEventListener("click", (e) =>
    clickHandler(e, obj)
  );
  function clickHandler(e, obj) {
    ramenImg.src = obj.image;
    ramenName.innerText = obj.name;
    ramenRestaurant.innerText = obj.restaurant;
  }
}

const submitBtnHandler = form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  newRamenName = document.querySelector("#new-name");
  newRamenRest = document.querySelector("#new-restaurant");
  newRamenImage = document.querySelector("#new-image");
  newRamenRating = document.querySelector("#new-rating");
  newRamenComment = document.querySelector("#new-comment");
  let newRamenObj = {
    newRamenComment,
    newRamenImage,
    newRamenName,
    newRamenRating,
    newRamenRest,
  };
  renderImg(newRamenObj);
}
