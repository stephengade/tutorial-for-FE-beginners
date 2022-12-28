const Input = document.querySelector(".text-input")
const Button = document.querySelector(".todo-btn")
const Form = document.querySelector(".todo-form")
const List = document.querySelector(".todo-items ol")

// create a function to handle the adding of our todo

const addTodo = () => {

    function clearInput() {
      Form.reset();
    }

  let inputValue = Input.value;

 const listItem = document.createElement("li");

 listItem.classList.add("list-item");

 

 const listText = document.createTextNode(inputValue);

   listItem.appendChild(listText)

   List.appendChild(listItem);

   clearInput();

}


// add a trigger to fire the function

Button.addEventListener("click", addTodo)