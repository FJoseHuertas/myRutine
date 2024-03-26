let eventoClick = [
    {
        "imgLogo": "img/logo-sena-verde.png",
        "titulo": "Hello!",
        "parrafo": "It is nice to meet you. My name is Francisco Huertas. I am 28 years old. I am a student of Engineering Physics at the University of Cauca. I am from Nariño. I live in Popayán, Cauca, with my girlfriend, and we have a white cat. Its name is Crystal. I like watching series and movies. I like listening to music. Thanks.",
        "imgFondo": "img/logo-sena-verde.png",
    },
    {
        "imgLogo": "img/reloj1.png",
        "titulo": "What time is it?",
        "parrafo": "It's twenty to six. It is my time to wake up. I check my Twitter, and e-mail. I get up, and I give food to our cat.",
        "imgFondo": "img/imagen1.jpg",
        
    },
    {
        "imgLogo": "img/reloj1.png",
        "titulo": "It is early.",
        "parrafo": " Make myself a cup of coffee, and then I go to the bathroom to take a shower and brush my teeth while my coffee cools down. I like my coffee warm.",
        "imgFondo": "img/imagen2.jpg",
    },
    {
        "imgLogo": "img/reloj3.png",
        "titulo": "It is late! ",
        "parrafo": "When I am dressed I drink my coffe with bread that I bought the day before. It's six fourty-five.",
        "imgFondo": "img/imagen3.jpg",
    },
    {
        "imgLogo": "img/reloj4.png",
        "titulo": "I go to University.",
        "parrafo": "I take the motorcycle taxi to go to University. I usually leave home at 6:45 and arrive at the university around 7:00 am.",
        "imgFondo": "img/imagen4.jpg",
    },
    {
        "imgLogo": "img/reloj5.png",
        "titulo": "I am come back!",
        "parrafo": "I learn two subjects in the morning, then I go home around 10:00. When I get home, I usually clean the apartment and talk with my girlfriend, then we cook lunch.",
        "imgFondo": "img/imagen5.jpg",
    },
    {
        "imgLogo": "img/reloj5nn.png",
        "titulo": "It is time of lunch!",
        "parrafo": "We have lunch, while we watch a chapter of our favorite serie of the moment.",
        "imgFondo": "img/imagen7.jpg",
    },
    {
        "imgLogo": "img/reloj7.png",
        "titulo": "It is time of nap.",
        "parrafo": "Then of lunch I take a siesta.",
        "imgFondo": "img/imagen8.gif",
    },
    {
        "imgLogo": "img/reloj9.png",
        "titulo": "It's snack time",
        "parrafo": "We like having coffee with bread araund at 4:20 pm and I buy bread for the day of morning.",
        "imgFondo": "img/imagen9.jpg",
    },
    {
        "imgLogo": "img/reloj10.png",
        "titulo": "Good afternoon, good evening and good night.",
        "parrafo": "We prepare dinner, then we eat and watch one more episode of our favorite series. Sometimes, we spend time on Instagram before going to bed. I usually go to bed around 11:00 PM.",
        "imgFondo": "img/imagenFinal.jpg",
    }
]

let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let texto = document.getElementById('texto');
let imgLogo = document.getElementById("imgLogo");
let imgFondo = document.getElementById("imgFondo");
let diapositiva = 0;

atras.addEventListener("click", function(){
    diapositiva -= 1;
    if (diapositiva == -1){
        diapositiva = eventoClick.length - 1;
    }
    texto.innerHTML = `<h2>${eventoClick[diapositiva].titulo}</h2><p>${eventoClick[diapositiva].parrafo}</p>`
    imgLogo.innerHTML = `<h1> <img src="${eventoClick[diapositiva].imgLogo}" alt="logo" class="imagenLogo" loading="lazy"> </h1>`
    imgFondo.innerHTML = `<img src="${eventoClick[diapositiva].imgFondo}" alt="image1" loading="lazy">`
    posicionCarrusel(); 
})


adelante.addEventListener("click", function(){
    
    if (diapositiva == eventoClick.length){
        diapositiva = 0;
    }
    
    texto.innerHTML = `<h2>${eventoClick[diapositiva].titulo}</h2><p>${eventoClick[diapositiva].parrafo}</p>`
    imgLogo.innerHTML = `<h1> <img src="${eventoClick[diapositiva].imgLogo}" alt="logo" class="imagenLogo" loading="lazy"> </h1>`
    imgFondo.innerHTML = `<img src="${eventoClick[diapositiva].imgFondo}" alt="image1" loading="lazy">` 
    posicionCarrusel();
    diapositiva += 1;
})

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <eventoClick.length; i++){
        if(i == diapositiva){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}

