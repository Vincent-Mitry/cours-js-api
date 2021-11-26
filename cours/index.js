// XMLHttpRequest

function reqListener(){
    // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open('get', 'data.txt', true);
req.open('get', 'https://api.blablagues.net/?rub=blagues', true);
req.send();

//-------
// FETCH
//-------

// fetch("monlien", "objet d'options")
//     .then((response) => {
    // response
//     })
//     .catch((err) => console.log(err));

fetch("data.txt")
    .then((res) => res.text())
    // .then((data) => console.log(data));

fetch("data.json")
    .then((res) => res.json())
    // .then((data) => console.log(data["workbench.colorTheme"]));

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
};

// fetch("data.json", init)
//     .then((res) => console.log(res));

// CRUD => Create (POST), read (GET), update (PUT), Delete (DELETE)

// Installation du Json Server
// npm -> gestionnaire de dépendances pour Node JS
// installation : npm init -y
// npm i -g json-server
// faire tourner le serveur: json-server --w <nom-du-fichier>
// Le serveur va travailler avec "db.json" comme si c'était une BDD distante