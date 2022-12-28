const BTN = document.querySelector(".form-btn");
const BODY = document.querySelector(".form-parent");
const CONTENT = document.querySelector(".content");

// create function

const handleSubmit = () => {

    if ( BTN.style.backgroundColor === "red" ) {
  BTN.style.backgroundColor = "green";
  BTN.innerText = "Sending now... 👌"
    } else {
        BTN.style.backgroundColor = "red";
  BTN.innerText = "SEND"
    }


  if (BODY.style.backgroundColor === "black") {
    BODY.style.backgroundColor = "white";
    CONTENT.style.color = "black";
  } else {
    BODY.style.backgroundColor = "black"
    CONTENT.style.color = "white";
  }

}


// add event Listen

BTN.addEventListener("click", handleSubmit)