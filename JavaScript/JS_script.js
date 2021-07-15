'use strict'


/************************************************************************
************************ Mes variables et Objets ************************
************************************************************************/

let compteur = 0;
let identifiantIntervalFlecheRouge,identifiantIntervalFlecheBleue,identifiantIntervalFlecheVerte,identifiantIntervalLoupe;
let mouvementFleche = 1;

const textesIntroduction = [
    'Viens découvrir le CV de Camille au travers d\'un petit jeu',
    'Mais si jamais le temps te manque...',
    'Tu peux accéder au CV de Camille en bas à gauche de l\'écran',
    'Sinon, tu pourras voir ton score en haut à droite',
    'Qui te déverrouillera des parties du CV de Camille',
    'À plus tard ! <3'
    ];

const mesElementsCibles = {
    boutonIconDIntroduction : document.getElementById('introduction').children[1],
    zoneTextDIntroduction : document.getElementById('introduction').firstElementChild,
    jeuDesDifferences : document.getElementById('jeuDesDifferences'),
    divElementsCachees : document.getElementById('differencesCachees'),
    divLoupe : document.getElementById('pichuLoupe'),
    score : document.getElementById('score').firstElementChild.firstElementChild.firstElementChild,
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

const creationFlechBleue = function () {
    var flecheBleue = document.createElement('img');
    flecheBleue.id = 'flecheBleue';
    flecheBleue.alt = "Flèche bleue pointant le score";
    flecheBleue.src = "Images/Flèche_Bleue.png";
    flecheBleue.style.right = "155px";
    flecheBleue.style.top = "75px";
    document.getElementById('score').appendChild(flecheBleue);
};

const creationFlechVerte = function () {
    var flecheVerte = document.createElement('img');
    flecheVerte.id = 'flecheVerte';
    flecheVerte.alt = "Flèche verte pointant les pokéballs";
    flecheVerte.src = "Images/Flèche_Verte.png";
    flecheVerte.style.right = "145px";
    flecheVerte.style.bottom = "253px";
    document.getElementById('pokeballCV').appendChild(flecheVerte);
};

const deplacementFlecheRouge = function() {
	const leftFlecheRouge = parseFloat(document.getElementById('flecheRouge').style.left);
    const bottomFlecheRouge = parseFloat(document.getElementById('flecheRouge').style.bottom);
	if (leftFlecheRouge >= 130 || leftFlecheRouge < 80) {
		mouvementFleche = -mouvementFleche;
	};
	document.getElementById('flecheRouge').style.left = leftFlecheRouge + mouvementFleche + "px";
    document.getElementById('flecheRouge').style.bottom = bottomFlecheRouge + mouvementFleche + "px";
};

const deplacementFlecheBleue = function() {
	const rightFlecheBleue = parseFloat(document.getElementById('flecheBleue').style.right);
    const topFlecheBleue = parseFloat(document.getElementById('flecheBleue').style.top);
	if (rightFlecheBleue >= 205 || rightFlecheBleue < 155) {
		mouvementFleche = -mouvementFleche;
	};
	document.getElementById('flecheBleue').style.right = rightFlecheBleue + mouvementFleche + "px";
    document.getElementById('flecheBleue').style.top = topFlecheBleue + mouvementFleche + "px";
};

const deplacementFlecheVerte = function() {
	const rightFlecheVerte = parseFloat(document.getElementById('flecheVerte').style.right);
    const bottomFlecheVerte = parseFloat(document.getElementById('flecheVerte').style.bottom);
	if (rightFlecheVerte >= 190 || rightFlecheVerte < 145) {
		mouvementFleche = -mouvementFleche;
	};
	document.getElementById('flecheVerte').style.right = rightFlecheVerte + mouvementFleche + "px";
    document.getElementById('flecheVerte').style.bottom = bottomFlecheVerte + (mouvementFleche/3) + "px";
};


const diminutionOpacity = function(cible) {
    let identifiant;
    cible.style.opacity = 1;
    identifiant = setInterval(function(){
        let cibleOpacity = parseFloat(cible.style.opacity);
        cible.style.opacity = cibleOpacity - 0.01;
        if(cibleOpacity == 0) {
            clearInterval(identifiant);
            cible.style.display = 'none';
        }
    },10);
}

const augmentationOpacity = function (cible) {
    let identifiant;
    cible.style.display = 'block';
    cible.style.opacity = 0;
    identifiant = setInterval(function(){
        let cibleOpacity = parseFloat(cible.style.opacity);
        cible.style.opacity = cibleOpacity + 0.01;
        if(cibleOpacity == 1) {
            clearInterval(identifiant);
        }
    },10);
}

/*******************************************************************
************************** Mes Evènements **************************
*******************************************************************/


/* Cet évenement gère la fenêtre d'introduction */
mesElementsCibles.boutonIconDIntroduction.addEventListener('click',function(){
    mesElementsCibles.zoneTextDIntroduction.innerHTML = textesIntroduction[compteur];
    compteur++;
    if (compteur == 3) {
        creationFlechRouge();
        identifiantIntervalFlecheRouge = setInterval(deplacementFlecheRouge,8);
    } 
    else if (compteur == 4) {
        document.getElementById('flecheRouge').style.display = 'none';
        clearInterval(identifiantIntervalFlecheRouge);
        creationFlechBleue();
        identifiantIntervalFlecheBleue = setInterval(deplacementFlecheBleue,8);
    }
    else if (compteur == 5) {
        document.getElementById('flecheBleue').style.display = 'none';
        clearInterval(identifiantIntervalFlecheBleue);
        creationFlechVerte();
        identifiantIntervalFlecheVerte = setInterval(deplacementFlecheVerte,8);
    }
    else if (compteur == 6) {
        document.getElementById('flecheVerte').style.display = 'none';
        clearInterval(identifiantIntervalFlecheVerte);
        mesElementsCibles.boutonIconDIntroduction.src = "Images/Pikachu_Icon_Fermeture.png";
    }
    else if (compteur > textesIntroduction.length) {
        mesElementsCibles.zoneTextDIntroduction.innerHTML = 'À plus tard ! <3';
        diminutionOpacity(document.getElementById('introduction'));
        augmentationOpacity(document.getElementById('jeuDesDifferences'));
        augmentationOpacity(mesElementsCibles.divLoupe);
    };
});


/* Animation du Pikachu du score */
document.getElementById('spritePikachu').style.right = "0px";
setInterval(function(){
    let x = parseFloat(document.getElementById('spritePikachu').style.right);
    if (x > 1150) {
        x = 0;
        document.getElementById('spritePikachu').style.right = x + 50 + "px";
    } else {
        document.getElementById('spritePikachu').style.right = x + 50 + "px";
    }
},130);


/*** Déplacement de la loupe ***/

let largeurFenetre = window.innerWidth;
let hauteurFenetre = window.innerHeight;
window.addEventListener('resize', function(){
    largeurFenetre = window.innerWidth;
    hauteurFenetre = window.innerHeight;
})

document.addEventListener('mousemove', function(info){
    if (mesElementsCibles.score.innerHTML == "5") {
            mesElementsCibles.divLoupe.style.display = 'none';
    } else {
        if ((info.x) < ((largeurFenetre/2) + 50)) {
            mesElementsCibles.divLoupe.style.left = ((largeurFenetre/2) + 10) + 'px';
        } else if ((info.x) > ((largeurFenetre/2) + 480) ) {
            mesElementsCibles.divLoupe.style.left = ((largeurFenetre/2) + 440) + 'px';
        } else {
            mesElementsCibles.divLoupe.style.left = (info.x - 40) + 'px';
        }
        if ((info.y) < ((hauteurFenetre/2) - 172)) {
            mesElementsCibles.divLoupe.style.top = ((hauteurFenetre/2) - 212) + 'px';
        } else if ((info.y) > ((hauteurFenetre/2) + 252)) {
            mesElementsCibles.divLoupe.style.top = ((hauteurFenetre/2) + 217) + 'px';
        } else {
            mesElementsCibles.divLoupe.style.top = (info.y - 40) + 'px';
        }
    }
});







