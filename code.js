var vpre = document.getElementById("pre");
var vprimerp = document.getElementById("primer-p");
var vpresentacion = document.getElementById("presentacion");
var vftext = document.getElementById("ftext");
var vgtext = document.getElementById("gtext");

vpre.addEventListener("mouseover",cambio1);
function cambio1(){
    vpresentacion.style.backgroundColor = "#4f7b70";
    vprimerp.style.backgroundColor = "#FFE4D4";
    vprimerp.style.color = "black";
    vftext.style.fontStyle = "italic";
    vftext.style.color = "white";
    vftext.style.fontWeight = "800px";
    vgtext.style.fontWeight = "900px";
    vgtext.style.color = "black";
}

vpre.addEventListener("mouseout",cambio2);
function cambio2(){
    vpresentacion.style.backgroundColor = "#FFE4D4";
    vprimerp.style.backgroundColor = "#4f7b70";
    vprimerp.style.color = "white";
    vftext.style.fontStyle = "normal";
    vftext.style.color = "#333333";
    vgtext.style.color = "#333333";
}

var vtrtext1 = document.getElementById("trtext1");
var vtrtext2 = document.getElementById("trtext2");
var vtrtext3 = document.getElementById("trtext3");
var vtr1 = document.getElementById("tr1");
var vtr2 = document.getElementById("tr2");
var vtr3 = document.getElementById("tr3");
vtr1.addEventListener("click",change1);
vtr2.addEventListener("click",change2);
vtr3.addEventListener("click",change3);
function change1(){
    vtr1.style.backgroundColor = "#bd622c";
    vtrtext1.style.fontStyle = "italic";
    vtrtext1.style.textShadow = "4px 4px black";
}
function change2(){
    vtr2.style.backgroundColor = "#bd622c";
    vtrtext2.style.fontStyle = "italic";
    vtrtext2.style.textShadow = "4px 4px black";
}
function change3(){
    vtr3.style.backgroundColor = "#bd622c";
    vtrtext3.style.fontStyle = "italic";
    vtrtext3.style.textShadow = "4px 4px black";
}



var vhour1 = document.getElementById("hour1");
var vhour2 = document.getElementById("hour2");
var vbtnAumentar1 = document.getElementById("btnAumentar1");
var vbtnReducir1 = document.getElementById("btnReducir1");
var vbtnAumentar2 = document.getElementById("btnAumentar2");
var vbtnReducir2 = document.getElementById("btnReducir2");
var hora1 = Math.floor(Math.random()*25);
var hora2 = Math.floor(Math.random()*60);
horas();
horass();
function horas(){
    if (hora1<10){
        hora1 = "0"+hora1
    }
}
function horass(){
    if (hora2<10){
        hora2 = "0"+hora2
    }
}
vhour1.innerText = hora1;
vhour2.innerText = hora2;

vbtnAumentar1.addEventListener("click", ajustar1);
vbtnReducir1.addEventListener("click", ajustar2);

function ajustar1(){
    hora1++;
    if (hora1 == 25){
        hora1 = 01;
    }
    horas();
    vhour1.innerText = hora1;
}
function ajustar2(){
    hora1--;
    if (hora1 == 0){
        hora1 = 24;
    }
    horas();
    vhour1.innerText = hora1;
}


vbtnAumentar2.addEventListener("click", ajustar3);
vbtnReducir2.addEventListener("click", ajustar4);
function ajustar3(){
    hora2++;
    if (hora2 == 60){
        hora2 = 0;
    }
    horass();
    vhour2.innerText = hora2;
}
function ajustar4(){
    hora2--;
    if (hora2 == -1){
        hora2 = 59;
    }
    horass();
    vhour2.innerText = hora2;
}




var vimgmafalda = document.getElementById("imgmafalda");
var vmainfooter = document.getElementById("main-footer");
var positionx = Math.random()*800;
var positiony = Math.random()*25;
var rojo = Math.random()*152;
var azul = Math.random()*127;
var verde = Math.random()*201;
vimgmafalda.style.paddingTop = positiony + "px";
vimgmafalda.style.paddingLeft = positionx + "px";
vmainfooter.style.backgroundColor = "rgb(" + rojo + "," + azul + "," + verde + ")";

var vactorsq = document.getElementById("actorsq");
var vbtnAP = document.getElementById("btnAP");
var vbtnBF = document.getElementById("btnBF");
var vbtnDN = document.getElementById("btnDN");
var vbtnES = document.getElementById("btnES");
var vbtnJD = document.getElementById("btnJD");
var vbtnKN = document.getElementById("btnKN");
var vbtnJG = document.getElementById("btnJG");
var vbtnMS = document.getElementById("btnMS");
var vbtnJS = document.getElementById("btnJS");
var vbtnRM = document.getElementById("btnRM");
var vbtnRF = document.getElementById("btnRF");
var vbtnSS = document.getElementById("btnSS");

vbtnAP.addEventListener("click", name1);
function name1(){
    vactorsq.value = "Al Pacino";
}
vbtnBF.addEventListener("click", name2);
function name2(){
    vactorsq.value = "Bridget Fonda";
}
vbtnDN.addEventListener("click", name3);
function name3(){
    vactorsq.value = "Robert De Niro";
}
vbtnES.addEventListener("click", name4);
function name4(){
    vactorsq.value = "Emma Stone";
}
vbtnJD.addEventListener("click", name5);
function name5(){
    vactorsq.value = "James Dean";
}
vbtnKN.addEventListener("click", name6);
function name6(){
    vactorsq.value = "Kim Novak";
}
vbtnJG.addEventListener("click", name7);
function name7(){
    vactorsq.value = "Jonathan Groff";
}
vbtnMS.addEventListener("click", name8);
function name8(){
    vactorsq.value = "Meryl Streep";
}
vbtnJS.addEventListener("click", name9);
function name9(){
    vactorsq.value = "James Stewart";
}
vbtnRM.addEventListener("click", name10);
function name10(){
    vactorsq.value = "Rooney Mara";
}
vbtnRF.addEventListener("click", name11);
function name11(){
    vactorsq.value = "Robert Forster";
}
vbtnSS.addEventListener("click", name12);
function name12(){
    vactorsq.value = "Sharon Stone";
}