const Feature = document.querySelector(".features");

const FeatureList = document.querySelector(".list__item");

const Overlay = document.querySelector(".overlay");



// show feature function

const showFeature = (e) => {
  e.preventDefault();

  if(FeatureList.style.display === "none") {
    FeatureList.style.display = "block";
    FeatureList.style.zIndex = 10;
    Overlay.style.display = "block";

  } else {
    FeatureList.style.display = "none";
    Overlay.style.display = "none";
  }

}


// create an event listener

Feature.addEventListener("mouseover", showFeature)