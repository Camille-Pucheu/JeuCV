'use strict'


/************************************************************************
************************ Mes variables et Objets ************************
************************************************************************/

let compteur = 0;
let identifiantIntervalFlecheRouge;
let mouvementFleche = 1;

const textesIntroduction = [
    'Viens découvrir le CV de Camille au travers d\'un petit jeu',
    'Mais si jamais le temps te manque...',
    'Tu peux accéder au CV de Camille en bas au gauche de l\'écran',
    ];

const mesElementsCibles = {
    boutonIconDIntroduction : document.getElementById('introduction').children[1],
    zoneTextDIntroduction : document.getElementById('introduction').firstElementChild,
};

/********************************************************************
*************************** Mes Fonctions ***************************
********************************************************************/


const creationFlechRouge = function () {
    var flecheRouge = document.createElement('img');
    flecheRouge.id = 'flecheRouge';
    flecheRouge.alt = "Flèche rouge pointant le lien du CV en format pdf";
    flecheRouge.src = "Images/Flèche_Rouge.png";
    flecheRouge.style.left = "80px";
    flecheRouge.style.bottom = "90px";
    document.getElementById('cv').appendChild(flecheRouge);
};
let deplacementFleche = function() {
	const leftFlecheRouge = parseFloat(document.getElementById('flecheRouge').style.left);
    const bottomFlecheRouge = parseFloat(document.getElementById('flecheRouge').style.bottom);
	if (leftFlecheRouge >= 130 || leftFlecheRouge < 80) {
		mouvementFleche = -mouvementFleche;
	};
	document.getElementById('flecheRouge').style.left = leftFlecheRouge + mouvementFleche + "px";
    document.getElementById('flecheRouge').style.bottom = bottomFlecheRouge + mouvementFleche + "px";
};


/*******************************************************************
************************** Mes Evènements **************************
*******************************************************************/


/* Cet évenement gère la fenêtre d'introduction */
mesElementsCibles.boutonIconDIntroduction.addEventListener('click',function(){
    mesElementsCibles.zoneTextDIntroduction.innerHTML = textesIntroduction[compteur];
    compteur++;
    if (compteur == 3) {
        mesElementsCibles.boutonIconDIntroduction.src = "Images/Pikachu_Icon_Fermeture.png";
        creationFlechRouge();
        identifiantIntervalFlecheRouge = setInterval(deplacementFleche,8);
    } else if (compteur > 3) {
        document.getElementById('introduction').style.display = 'none';
        document.getElementById('flecheRouge').style.display = 'none';
        clearInterval(identifiantIntervalFlecheRouge);
    };
});