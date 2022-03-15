var vbox1 = document.getElementById("box1");
var vbox2 = document.getElementById("box2");
var vbox3 = document.getElementById("box3");
var vbox4 = document.getElementById("box4");
var vpuzzle = document.getElementsByClassName("puzzle");

vbox2.addEventListener("dragover", (ac) => allowdrop(ac));
vbox2.addEventListener("drop", (ac) => drop2(ac));

vbox1.addEventListener("dragover", (ac) => allowdrop(ac));
vbox1.addEventListener("drop", (ac) => drop1(ac));

vbox3.addEventListener("dragover", (ac) => allowdrop(ac));
vbox3.addEventListener("drop", (ac) => drop3(ac));

vbox4.addEventListener("dragover", (ac) => allowdrop(ac));
vbox4.addEventListener("drop", (ac) => drop4(ac));

for(i=0; i<vpuzzle.length; i++){
    vpuzzle[i].setAttribute("draggable", "true");
    vpuzzle[i].addEventListener("dragstart", (ac) => starthold(ac));
}

function starthold(ac){
    ac.dataTransfer.setData("idpuzzle",ac.target.id);
    console.log(ac.target.id)
}

function allowdrop(ac){
    console.log("arrastrando");
    ac.preventDefault();
}

function drop2(ac){
    ac.preventDefault();
    var data = ac.dataTransfer.getData("idpuzzle");
    vbox2.appendChild(document.getElementById(data));
    console.log(vbox2.childElementCount);
}

function drop1(ac){
    ac.preventDefault();
    var data = ac.dataTransfer.getData("idpuzzle");
    vbox1.appendChild(document.getElementById(data));
    console.log(vbox1.childElementCount);
}

function drop3(ac){
    ac.preventDefault();
    var data = ac.dataTransfer.getData("idpuzzle");
    vbox3.appendChild(document.getElementById(data));
    console.log(vbox3.childElementCount);
}

function drop4(ac){
    ac.preventDefault();
    var data = ac.dataTransfer.getData("idpuzzle");
    vbox4.appendChild(document.getElementById(data));
    console.log(vbox4.childElementCount);
}
