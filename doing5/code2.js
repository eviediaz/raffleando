var order = []
order[0]= "doing5/La La Land.mp4"; 
order[1]= "doing5/The third man.mp4";
order[2]= "doing5/Good Fellas.mp4";
order[3]= "doing5/Taxi Driver.mp4";
order[4]= "doing5/Citizen Kane.mp4";
var position = 0;

var vmuvi = document.getElementById("muvi");
var origen = vmuvi.getElementsByTagName("source")[0];
var vbtnPlay = document.getElementById("btnPlay");
var vbtnPause = document.getElementById("btnPause");
var vbtnStop = document.getElementById("btnStop");
var vsect = document.getElementById("sect");
var vbtnPass = document.getElementById("btnPass");

origen.src = order[position];
vmuvi.load();
console.log(position);

vbtnPlay.addEventListener("click",play);
vbtnPause.addEventListener("click", pausa);
vbtnStop.addEventListener("click", stop);
vbtnPass.addEventListener("click",pasar);
vmuvi.addEventListener("timeupdate", fresh);
vmuvi.addEventListener("ended",change);

function play(){
    vmuvi.play();
} 
function fresh(){
    if(vmuvi.duration - vmuvi.currentTime < 3){
        vsect.innerText = "En unos momentos, se reproducirá el siguiente vídeo";
    }
    else{
    var porcentaje = Math.floor(vmuvi.currentTime/vmuvi.duration * 100);
    vsect.innerText = Math.floor(vmuvi.currentTime) + " de " + Math.floor(vmuvi.duration) + " - " + Math.floor(porcentaje) + "%";
    }
}
function pausa(){
    vmuvi.pause();
}
function stop(){
    vmuvi.pause();
    vmuvi.currentTime = 0;
}
function change(){
    p();
    if(position==order.length){
        origen.src = order[0];
        position=0;
    }
}

function pasar(){
    p();
    if(position==order.length){
        origen.src = order[0];
        position=0;
    }
}

function p(){
    position++;
    origen.src = order[position];
    vmuvi.load();
    vmuvi.play();
}

