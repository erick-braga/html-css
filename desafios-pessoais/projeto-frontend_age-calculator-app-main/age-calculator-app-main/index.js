/* let day = Number(document.getElementById("iday").value);
let month = Number(document.getElementById("imonth").value);
let year = Number(document.getElementById("iyear").value); */

let agora = new Date();
let ano = agora.getFullYear();

let label = document.getElementsByClassName("label");

console.log(ano)

let day = document.getElementById("iday");
let month = document.getElementById("imonth");
let year = document.getElementById("iyear");

let d = document.getElementById("d");
let m = document.getElementById("m");
let y = document.getElementById("y");

function Show() {


    if (day.value.length == 0 || month.value.length == 0 || year.value.length == 0) {
        day.style.borderColor = "hsl(0, 100%, 67%)";
        month.style.borderColor = "hsl(0, 100%, 67%)";
        year.style.borderColor = "hsl(0, 100%, 67%)";

        label.style.color = "hsl(0, 100%, 67%)";
    }
    else {
        iy = ano - Number(year.value);
        im = 12 - Number(month.value)
        id = 365 - Number(day.value)

        d.innerHTML = id
        m.innerHTML = im
        y.innerHTML = iy
    }


}
