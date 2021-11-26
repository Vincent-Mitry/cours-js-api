// https://api.blablagues.net/?rub=blagues
const header = document.getElementById("header");
const content = document.getElementById("content");

function getJoke(){
    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((json) => {
        const data = json.data.content;

        header.textContent = data.text_head;
        content.textContent = data.text !== "" 
        ? data.text 
        : data.text_hidden;
    });
}

getJoke();

document.body.addEventListener('click', getJoke);