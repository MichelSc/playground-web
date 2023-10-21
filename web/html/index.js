console.log('Michel test site: script loaded but changed');


function handleClick(e) {
  console.log('button clicked');
}

const button = document.querySelector("#michelbutton");
const container = document.querySelector("#container");
button.addEventListener("click", handleClick);
