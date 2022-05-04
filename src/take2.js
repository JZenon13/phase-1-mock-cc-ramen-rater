// 1 See all ramen images in the div with the id of ramen-menu.
// 1a) When the page loads, request the data from the server to get all the ramen objects.
// 1b) Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

window.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((data) => addImagesToDom(data));
});

const addImagesToDom = (arrOfobjs) => {
  const div = document.getElementById("ramen-menu");

  arrOfobjs.forEach((obj) => {
    const img = document.createElement("img");

    // debugger
    img.src = obj.image;
    img.id = obj.id;

    // #2 deliverable
    img.addEventListener("click", handleClick);
    div.append(img);
  });
};

// 2 Click on an image from the #ramen-menu div and see all ramen the info
// 2a) displayed ramen info inside the #ramen-detail div
// details: img ~ <img class="detail-image" /> &&  <h2 class="name"> && <h3 class="restaurant">I
// 2b)  insert comment here, <p id='comment-display'>
// 2c) and insert rating here, <span id='rating-display'>

const handleClick = (event) => {
  // debugger
  fetch(`http://localhost:3000/ramens/${event.target.id}`)
    .then((resp) => resp.json())
    .then((obj) => displayObjInfo(obj));
};

const displayObjInfo = (ramen) => {
  // #2a deliverable
  // ramen == {comment: "Do buy the hype.", id: 3, image: "./assets/ramen/nirvana.jpg", name: "Nirvana Shiromaru", rating: "7", restaurant: "Ippudo"}
  // debugger
  document.querySelector(".detail-image").src = ramen.image; // set img
  document.querySelector(".name").innerText = ramen.name; // set name
  document.querySelector(".restaurant").innerText = ramen.restaurant; // set restaurant

  document.getElementById("comment-display").innerText = ramen.comment; //2b add comments
  document.getElementById("rating-display").innerText = ramen.rating; //2c add Rating
};

// 3 Create a new ramen after submitting the new-ramen form.
// NOTE: The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page
// 3a) The new ramen should be added to the#ramen-menu div.

const handleSubmit = (e) => {
  e.preventDefault(); // STOP page from refreshing
  // create obj, to add 2 ramen div
  const newRamen = {
    id: document.getElementById("ramen-menu").childElementCount + 1, //DYNAMICALLY set ID
    image: document.getElementById("new-image").value, // OR form.querySelector('#new-image').value
  };

  // create obj, to add 2 ramen div & add to DB JSON (advanced  deliverable)
  // const newRamen = {
  //   comment: document.getElementById('new-comment').value, // OR form.querySelector('#new-comment').value
  //   id: document.getElementById( "ramen-menu").childElementCount + 1, //DYNAMICALLY set ID
  //   image: document.getElementById('new-image').value, // OR form.querySelector('#new-image').value
  //   name: document.getElementById('new-name').value, // OR form.querySelector('#new-name').value
  //   rating: document.getElementById('new-rating').value, // OR form.querySelector('#new-rating').value
  //   restaurant: document.getElementById('new-restaurant').value // OR form.querySelector('#new-restaurant').value
  // }
  // console.log(newRamen)

  // 3a
  const img = document.createElement("img");
  img.src = newRamen.image;
  img.id = newRamen.id;

  document.getElementById("ramen-menu").append(img);
};

// 3, must place BELOW creation b/c using CONST declerator to avoid error msg below:
// Uncaught ReferenceError: Cannot access 'handleSubmit' before initialization
const form = document.getElementById("new-ramen"); // grab form
form.addEventListener("submit", handleSubmit);
