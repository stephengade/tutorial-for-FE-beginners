const MyLinks = document.querySelector("ol");
const Hamburger = document.querySelector(".menu");
const NavLink = document.querySelector(".links");


const ToggleMenu = () => {
  if (MyLinks.style.display === "none" ) {
      MyLinks.style.display = "block";
      Hamburger.innerText = "close";

  // add class to MyLinks for Css
    NavLink.classList.add("nav-container")
    MyLinks.classList.add("mobile-nav");    
  } else {
    MyLinks.style.display = "none";
    Hamburger.innerText = "menu";
    NavLink.classList.remove("nav-container")
    MyLinks.classList.remove("mobile-nav");  
  }
}

// addEventListener

Hamburger.addEventListener("mouseover", ToggleMenu)































