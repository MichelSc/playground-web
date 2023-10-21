console.log('Michel test site: script loaded but changed');


function handleClick(e) {
    e.preventDefault();
    const now = new Date();
    console.log(`${now.toISOString()}: onclick`);
  }
  function handleTouchStart(e) {
    const now = new Date();
    const targets = e.targetTouches;
    console.log(`${now.toISOString()}: ontouchstart`);
    if ( targets ){
        for ( target of targets){
            console.log(`.. target ${target.target.localName}, ${target.target.id}`)
        }
        if ( target.target.localName==='input'){
            target.target.checked = !target.target.checked;
        }
    }
  }
  function handleTouchEnd(e) {
    const now = new Date();
    console.log(`${now.toISOString()}: ontouchend`);
  }
    
const button = document.querySelector("#michelbutton");
const container = document.querySelector("#container1");
container.addEventListener("click", handleClick);
container.addEventListener("touchstart", handleTouchStart);
container.addEventListener("touchend", handleTouchEnd);
