let input = document.getElementById("name");

let name = document.getElementById("res-name");

input.addEventListener("change", function(e){
name.innerHTML = event.target.value;
});

let gender = document.getElementById("gender");

let genderText = document.getElementById("res-gender");

gender.addEventListener("change", function(e){
genderText.innerHTML = event.target.value;
});

document.getElementById("result").addEventListener('mousemove', function(event) {
let x = event.offsetX; // Coordonnée X de la souris dans l'élément
let y = event.offsetY; // Coordonnée Y de la souris dans l'élément
document.getElementById("mouse-x").innerHTML = x;
document.getElementById("mouse-y").innerHTML = y;
});
