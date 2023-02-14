//**FUNCTION #1 setTitle */

const $title = document.getElementById('title')
function setTitle(HelloWorld) {
    $title.textContent = HelloWorld
}
console.log ($title)

//**FUNCTION #2 setDescription */

const $parragraph = document.getElementById('parragraph')
function setDescription(newText) {
    $parragraph.textContent = newText
}

//**FUNCTION #3 setBackgroundColor */

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
//**FUNCTION #4 setFontColor */

function setFontColor(newColor) {
    document.body.style.color = newColor;
}

//**FUNCTION #5 setTheme */

const $body = document.getElementById('body')

function setTheme() {
   $body.classList.toggle('dark-theme');
   $body.classList.toggle('light-theme')
    
}

