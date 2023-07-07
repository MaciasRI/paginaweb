var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let dibujar = document.getElementById("dibujar");
crearBarra(dibujar);
let paciencia = document.getElementById("paciencia");
crearBarra(paciencia);
let videojuegos = document.getElementById("videojuegos");
crearBarra(videojuegos);
let natacion = document.getElementById("natacion");
crearBarra(natacion);
let ciclismo = document.getElementById("ciclismo");
crearBarra(ciclismo);
let futbol = document.getElementById("futbol");
crearBarra(futbol);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervaldibujar = setInterval(function(){
            pintarBarra(dibujar, 13, 0, intervaldibujar);
        },100);
        const intervalpaciencia = setInterval(function(){
            pintarBarra(paciencia, 11, 1, intervalpaciencia);
        },100);
        const intervalvideojiegos = setInterval(function(){
            pintarBarra(videojuegos, 14, 2, intervalvideojiegos);
        },100);
        const intervalnatacion = setInterval(function(){
            pintarBarra(natacion, 14, 3, intervalnatacion);
        },100);
        const intervalciclismo = setInterval(function(){
            pintarBarra(ciclismo, 15, 4, intervalciclismo);
        },100);
        const intervalfutbol = setInterval(function(){
            pintarBarra(futbol, 10, 5, intervalfutbol);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#2f0bf8";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}