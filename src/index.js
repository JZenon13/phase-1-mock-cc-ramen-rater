// write your code here
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const ramenUrl = "http://localhost:3000/ramens";

function menuSource() {
  fetch(ramenUrl)
    .then((response) => response.json())
    .then((ramenImgs) => (obj = ramenImgs))
    .then(() => console.log(obj));
}
menuSource();
// See all ramen images in the `div` with the id of `ramen-menu`. When the page
// loads, request the data from the server to get all the ramen objects. Then,
// display the image for each of the ramen using an `img` tag inside the
// `#ramen-menu` div.

// function loadingPage() {
//   document.addEventListener("DOMContentLoaded", ramenMenuImg);
// }

// function ramenMenuImg(ramen) {
//   ramen.append(ramenMenu);
// }
