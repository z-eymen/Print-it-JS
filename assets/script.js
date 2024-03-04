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

// Les variables nécessaires pour le carrousel

//Calculer de nombre d'élements pour le carrousel
let totalSlides = slides.length -1; 

//Position de départ du carrousel
let totalDot = 0; 

//Emplacement des images
let srcImage = "./assets/images/slideshow/";

//On definit les éléments de carrousel
const bannerImg  = document.querySelector(".banner-img");
const bannerText = document.querySelector(".banner-text");
const arrowLeft  = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots 		 = document.querySelector(".dots");

//Le script est lancé , on fait afficher les flêches
arrowLeft.classList.remove("hidden");
arrowRight.classList.remove("hidden");

//Mise en Place des dots de sélection
for(let ads = 0; ads <= totalSlides; ads++) {
	dots.innerHTML += '<span id="dot' + ads + '"class = "dot" title = "Image' + (ads + 1) +'" ></span>';
}


//On place dans une liste tous les élements ayant la class dot
const dotList = document.querySelectorAll(".dot");
/*
On crée un cercle plein pour le point qui est actif 
et on vide aux cercles  pour les autres points
*/
const addSelected = () => {
	for(let ads = 0; ads <= totalSlides; ads++ ) {
		if ( ads === totalDot) {
			dotList[ads].classList.add("dot_selected");
		}else{
			dotList[ads].classList.remove("dot_selected");
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


//Définir l'image initiale du Carrousel avec du texte
updateSlider(totalDot);

/*
Dans la liste des éléments "dot", nous obtenons l'identifiant trouvé 
dans la target et obtenons uniquement la dernière valeur qui est le numéro du "dot".
*/

dots.addEventListener("click", (e) => {
	if (e.target.id != "" && e.target.id != null ) {
		totalDot = parseInt(e.target.id.substring(3));
	}
	updateSlider(totalDot);
});

// Passer au slide précédente avec la flèche

arrowLeft.addEventListener("click", () => {
	if (totalDot <= 0 ) {
		totalDot = totalSlides;
	}else{
		totalDot --;
	}
	updateSlider(totalDot);
});


//Passer au slide suivant avec la flèche

arrowRight.addEventListener("click" , () => {
	if (totalDot >= totalSlides) {
		totalDot = 0; 
	}else{
		totalDot ++;
	}
	updateSlider(totalDot);
});

}



