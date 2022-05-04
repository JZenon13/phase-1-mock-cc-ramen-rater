const ramenUrl = "http://localhost:3000/ramens";
fetch(ramenUrl)
  .then((response) => response.json())
  .then((ramenArrObj) => renderRamen(ramenArrObj));

//fetch

//DOM Selectors
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const ramenNameBox = document.querySelector("#ramen-detail > h2");
const ramenRestName = document.querySelector("#ramen-detail > h3");
const ramenRatingBox = document.querySelector("#rating-display");
const ramenCommentBox = document.querySelector("#comment-display");
const ramenImageBox = document.querySelector("#ramen-detail > img");
const form = document.getElementById("new-ramen");
//Event Listeners

//Render Functions
const renderRamen = (ramenArrObj) => {
  ramenArrObj.forEach((ramen) => {
    const ramenImg = document.createElement("img");
    ramenImg.src = ramen.image;
    ramenMenu.append(ramenImg);
    ramenImg.addEventListener("click", handleRamenClick);
    function handleRamenClick(e) {
      const ramenImageBox = e.target["#ramen-detail"];
      console.log(e);
    }
  });
};

//Callback functions
