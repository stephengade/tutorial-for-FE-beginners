const Links = document.querySelector(".link_child");
const LinkChild = document.querySelector(".link_child ol");
const Buttons = document.querySelector(".button_child");
const Menu = document.querySelector(".hamburger");
const openMenu = document.querySelector(".open_menu");
const closeMenu = document.querySelector(".close_menu");
const Nav = document.querySelector(".Nav__bar")



// function to open menu
const toggleMenuOpen = () => {
   
    if(openMenu.style.display !== "none") {
        openMenu.style.display = "none";
        closeMenu.style.display = "block";


        Buttons.style.display = "block";
        Buttons.style.position = "absolute";
        Buttons.style.bottom = "100px";
      
        Buttons.style.right = "50%"
        Buttons.style.transform = "translate(50%, -50%)"





        Links.style.backgroundColor = "black";
        Links.style.display = "block";
        Links.style.position = "absolute";
        Links.style.width = "100%";
        Links.style.height = "100vh"
        Links.style.left = "0";
        Links.style.top = "50px";

        LinkChild.style.color = "white";
        LinkChild.style.display = "flex";
        LinkChild.style.flexDirection = "column";
        LinkChild.style.alignItems = "center";
        LinkChild.style.justifyContent = "center";

        LinkChild.style.marginTop = "100px";


     
        

      
    } else {
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
        Links.style.display = "none";
        Buttons.style.display = "none";
    }
    
}

Menu.addEventListener("click", toggleMenuOpen);