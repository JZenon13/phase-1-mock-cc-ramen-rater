//select ramen-menu div
//fetch ramens data from server
//iterate over ramers data, and for each ramen create an image
//create
//update src attribute
//append to #ramen-menu div

const ramenMenu = document.queryCommandValue("#ramen-menu");
const baseUrl = "http://localhost:3000";

fetch(baseUrl + "/ramens")
  .then((response) => response.json())
  .then((ramensData) => renderRamens(ramensData));

function renderRamens(ramens) {
  ramens.forEach(appendRamenImage);
}

//add event listener to each image in the div
// have a callback function that will update ramen-detail
/////select name, restaurant, image, rating, and comment tags in ramen detail div
/////wheres does the ramen data come from?
/////update all tags with correct information
function updateRamenDetails(e) {
  let ramen = e.target.details;
  const name = document.querySelector(".name");
  name.innerText = ramen.name;
  const image = document.querySelector(".detail-image");
  image.src = ramen.image;
  const restaurant = document.querySelector(".restaurant");
  restaurant.innerText = ramen.restaurant;
  const rating = document.querySelector("#rating-display");
  rating.innerText = ramen.rating;
  const comment = document.querySelector("#comment-display");
  comment.innerText = ramen.comment;
}
function appendRamenImage(ramens) {
  ramens.forEach((ramen) => {
    const img = document.createElement("img"); ///this iterates over ramen data
    img.src = ramen.image;
    img.addEventListener("click", updateRamenDetails); //you're using the already exiting for each to update ramen detail in deliverable two
    img.details = ramen;
    ramenMenu.append(img);
  });
}

//add a submit event listener to the new ramen form
// callback function that will add the ramen to the ramen-menu div
//create image and add to ramen menu div

const ramenForm = document.querySelector("#new-ramen");
ramenForm.addEventListener("submit", createRamen);

function createRamen(e) {
  e.preventDefault();
  const name = document.querySelector("#new-name");
  const restaurant = document.querySelector("#new-restaurant");
  const image = document.querySelector("#new-image"); ///all images selected
  const rating = document.querySelector("#new-rating");
  const comment = document.querySelector("#new-comment");
  const ramen = { name, restaurant, image, rating, comment };
  appendRamenImage(ramen);
}
