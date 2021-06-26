'use strict'

let compteur = 0;
const textesPresentation = [
    'Viens découvrir le CV de Camille au travers de petits jeux',
    'Mais si jamais le temps te manque...',
    'Tu peux accéder au CV de Camille en bas au gauche de l\'écran',
    ];

const mesElementsCibles = {
    boutonIconDePresentation : document.getElementById('presentation').children[1],
    zoneTextDePresentation : document.getElementById('presentation').firstElementChild,
};


const creationFlechRouge = function () {
    var flecheRouge = document.createElement('img');
    flecheRouge.id = 'flecheRouge';
    flecheRouge.alt = "Flèche rouge pointant le lien du CV en format pdf";
    flecheRouge.src = "Images/Flèche_Rouge.png";
    flecheRouge.style.left = "80px";
    flecheRouge.style.bottom = "90px";
    document.getElementById('cv').appendChild(flecheRouge);
};
let identifiantIntervalFlecheRouge;
let mouvementFleche = 1;
let deplacementFleche = function() {
	const leftFlecheRouge = parseFloat(document.getElementById('flecheRouge').style.left);
    const bottomFlecheRouge = parseFloat(document.getElementById('flecheRouge').style.bottom);
	if (leftFlecheRouge >= 130 || leftFlecheRouge < 80) {
		mouvementFleche = -mouvementFleche;
	};
	document.getElementById('flecheRouge').style.left = leftFlecheRouge + mouvementFleche + "px";
    document.getElementById('flecheRouge').style.bottom = bottomFlecheRouge + mouvementFleche + "px";
};



mesElementsCibles.boutonIconDePresentation.addEventListener('click',function(){
    mesElementsCibles.zoneTextDePresentation.innerHTML = textesPresentation[compteur];
    compteur++;
    if (compteur == 3) {
        mesElementsCibles.boutonIconDePresentation.src = "Images/Pikachu_Icon_Fermeture.png";
        creationFlechRouge();
        identifiantIntervalFlecheRouge = setInterval(deplacementFleche,8);
    } else if (compteur > 3) {
        document.getElementById('presentation').style.display = 'none';
        document.getElementById('flecheRouge').style.display = 'none';
        clearInterval(identifiantIntervalFlecheRouge);
    };
});


