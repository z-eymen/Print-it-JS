//Différer le lancement du script => ne se lance qu'une fois que tout le HTML a été chargé

if (document.readyState === "complete") {
	monScript();
}else{
	document.addEventListener("DOMContentLoaded", function () {
		monScript();
	});
}

function monScript() {
	console.log("HTML ready!..");


const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Calcul du nombre d'élements pour le slider
let numberElement = slides.length -1; 

//Position de départ du slider
let numDot = 0; 

//Emplacement des images
let srcImage = "./assets/images/slideshow/";

//On pointe sur les élements suivants
const bannerImg  = document.querySelector(".banner-img");
const bannerText = document.querySelector(".banner-text");
const arrowLeft  = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots 		 = document.querySelector(".dots");

//Le script est lancé , on fait afficher les flêches
arrowLeft.classList.remove("hidden");
arrowRight.classList.remove("hidden");

//Mise en Place des Pointes de sélection
for(let pas = 0; pas <= numberElement; pas++) {
	dots.innerHTML += '<span id="dot' + pas + '"class = "dot" title = "Image' + (pas + 1) +'" ></span>';
}


//On place dans une liste tous les élements ayant la class dot
const dotList = document.querySelectorAll(".dot");
/*
On met en place un cercle plein pour le point qui est actif 
et on repasse à un cercle vide pour les autres points
*/
const addSelected = () => {
	for(let pas = 0; pas <= numberElement; pas++ ) {
		if ( pas === numDot) {
			dotList[pas].classList.add("dot_selected");
		}else{
			dotList[pas].classList.remove("dot_selected");
		}
	}
};


//Selection du Dot actif en chargement de l'image avec le texte
const updateSlider = (arg) => {
	bannerImg.src 		 = srcImage + slides[arg]["image"];
	bannerImg.alt 		 = "Banner Print-it- " + slides[arg]["image"];
	bannerText.innerHTML = slides[arg]["tagLine"];
	addSelected(); 
}


//Mise en place de l'image de départ du slider avec le texte
updateSlider(numDot);

/*
on récupère l'id qui est dans target dans la liste des élements "dot"
et on ne prend que la valeur finale qui est le numero du dot
*/

dots.addEventListener("click", (e) => {
	if (e.target.id != "" && e.target.id != null ) {
		numDot = parseInt(e.target.id.substring(3));
	}
	updateSlider(numDot);
});

//Controle de la flèche  gauche

arrowLeft.addEventListener("click", () => {
	if (numDot <= 0 ) {
		numDot = numberElement;
	}else{
		numDot --;
	}
	updateSlider(numDot);
});


//Controle de la flèche droit

arrowRight.addEventListener("click" , () => {
	if (numDot >= numberElement) {
		numDot = 0; 
	}else{
		numDot ++;
	}
	updateSlider(numDot);
});

}



