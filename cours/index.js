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

// Pour envoyer des données en POST, on envoie les informations en JSON (JSON.stringigy) dans le 'body'
// Pour la méthode DELETE, on doit passer en paramètre l'id dans l'url (ex: 'http://localhost:3000/posts/' + id)
const init2 = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "Bidule_78",
        age: "Yo les gens !"
    }),
    mode: "cors",
    credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
    fetch('http://localhost:3000/users', init2)
    .then(() => console.log("data envoyée")
    );
});

//-----------
// Asynchrone
//-----------

setTimeout(() => {
    // console.log("test");
}, 2000);

// Promise
fetch('monlien').then((res) => res)

// async/await
async function fetchData() {
    await fetch('monlien')
    // attend que le await soit exécuté avant de faire la suite

    await executeFonction();
}

const fetchData2 = async () => {
    await fetch('monlien')
    // attend que le await soit exécuté avant de faire la suite

    await executeFonction();
}