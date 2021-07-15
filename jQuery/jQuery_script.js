

    /************ Animations de l'intro ************/

$(function(){
    $(document).ready(function(){
        $('#introduction').fadeIn(2000)
    })

})
    

    /******* Animation : Jeu des 5 différences *******/



/* Fonction qui anime le déplacement des objets cachés */
const deplacementObjetsCachés = function (cible,valeurLeft,valeurRight) {
    cible.animate({
            left: valeurLeft,
            top: valeurRight,
        },2000);
};

/* animations au click sur les objets cachés */
const $etiquette = $('#etiquettes');

$('#pichuLoupe').click(function(){
    let $positionLoupeX = parseFloat($('#pichuLoupe').css("left"));
    let $positionLoupeY = parseFloat($('#pichuLoupe').css("top"));
    let $largeurFenetre = ($(window).width()) / 2;
    let $hauteurFenetre = ($(window).height()) / 2;
    const $evoli = $('#differencesCachees>div:nth-child(1)');
    const $troncDArbre = $('#differencesCachees>div:nth-child(2)');
    const $nenufleur = $('#differencesCachees>div:nth-child(3)');
    const $petitePousse = $('#differencesCachees>div:nth-child(4)');
    const $simularbre = $('#differencesCachees>div:nth-child(5)');
    // evoli
    if ($positionLoupeX > ($largeurFenetre + 433) && $positionLoupeX < ($largeurFenetre + 440) && $positionLoupeY < ($hauteurFenetre + 217) && $positionLoupeY > ($hauteurFenetre + 198)) {
        if ($evoli.css('left') != '440px' && $etiquette.css('display') == 'none') {
            scoreActuel = augmenteScore();
            deplacementObjetsCachés($evoli,'440px','-85px');
            balanceTonSwitch();
        }
    }
    // tronc d'arbre 
    if ($positionLoupeX > ($largeurFenetre + 166) && $positionLoupeX < ($largeurFenetre + 186) && $positionLoupeY < ($hauteurFenetre - 25) && $positionLoupeY > ($hauteurFenetre - 45)) {
        if ($troncDArbre.css('left') != '390px' && $etiquette.css('display') == 'none') {
            scoreActuel = augmenteScore();
            deplacementObjetsCachés($troncDArbre,'390px','-50px');
            balanceTonSwitch();
        }        
    }
    // nénufleur
    if ($positionLoupeX > ($largeurFenetre + 311) && $positionLoupeX < ($largeurFenetre + 331) && $positionLoupeY < ($hauteurFenetre - 45) && $positionLoupeY > ($hauteurFenetre - 65)) {
        if ($nenufleur.css('left') != '381px' && $etiquette.css('display') == 'none') {
            scoreActuel = augmenteScore();
            deplacementObjetsCachés($nenufleur,'381px','-81px');
            balanceTonSwitch();
        }        
    }
    // petite pousse
    if ($positionLoupeX > ($largeurFenetre + 10) && $positionLoupeX < ($largeurFenetre + 34) && $positionLoupeY < ($hauteurFenetre + 34) && $positionLoupeY > ($hauteurFenetre + 10)) {
        if ($petitePousse.css('left') != '410px' && $etiquette.css('display') == 'none') {
            scoreActuel = augmenteScore();
            deplacementObjetsCachés($petitePousse,'410px','-105px');
            balanceTonSwitch();
        }        
    }
    // simularbre
    if ($positionLoupeX > ($largeurFenetre + 225) && $positionLoupeX < ($largeurFenetre + 245) && $positionLoupeY < ($largeurFenetre + 84) && $positionLoupeY > ($hauteurFenetre + 68)) {
        if ($simularbre.css('left') != '430px' && $etiquette.css('display') == 'none') {
            scoreActuel = augmenteScore();
            deplacementObjetsCachés($simularbre,'430px','-55px');
            balanceTonSwitch();
        }        
    }
    /* Astuce des if
    Mettre on console.log de $positionLoupeX, $positionLoupeY, $largeurFenetre, $largeurFenetre.
    Positionner la loupe au dessus de l'objet désiré, cliquer pour receuillir les console.log et indiquer les positions comme suit:
    objet positionné à l'intérieur de la loupe au max à DROITE désiré : 
        console.log($positionLoupeX)-console.log($largeurFenetre) = resultat et mettre dans le if ($positionLoupeX > ($largeurFenetre + resultat))
    objet positionné à l'intérieur de la loupe au max à GAUCHE désiré : 
        console.log($positionLoupeX)-console.log($largeurFenetre) = resultat et mettre dans le if ($positionLoupeX < ($largeurFenetre + resultat))
    objet positionné à l'intérieur de la loupe au max en HAUT désiré : 
        console.log($positionLoupeX)-console.log($largeurFenetre) = resultat et mettre dans le if ($positionLoupeY < ($largeurFenetre + resultat))
    objet positionné à l'intérieur de la loupe au max en BAS désiré : 
        console.log($positionLoupeX)-console.log($largeurFenetre) = resultat et mettre dans le if ($positionLoupeY > ($largeurFenetre + resultat))
    */
})

    /************** Gestion du score et du dévérouillage des balls **************/


let scoreActuel;
let identifiantInterval;
const $score = $('#score span');
const $paragrapheEtiquette = $('#etiquettes p');
const $divJeuDesDifférences = $('#jeuDesDifferences');

/* Gestion du score */
const augmenteScore = function (){
    let valeurScore = parseInt($score.html());
    $score.html(valeurScore + 1);
    return $score.html();
};

/* Gestion des étiquettes de jeu */
const affichageEtiquetteBravo = function (indiceTableau,indiceBall){
    const textesScore = [
        'Bravo, tu viens de débloquer la section Formation!',
        'Bravo, tu viens de débloquer la section Expérience!',
        'Bravo, tu viens de débloquer la section Compétences!',
        'Bravo, tu viens de débloquer la section Centres d\'Intérêt!',
        'Bravo, tu viens de finir le jeu et de débloquer la section Coordonnées!',
        ]
    $paragrapheEtiquette.html(textesScore[indiceTableau]);
    $etiquette.css('display','block');
    $etiquette.animate({opacity:'1'},500);
    declenchementDeverrouillage(indiceBall);
    $divJeuDesDifférences.css('opacity','0.75');
}

/* Fonction de déclenchement du dévérrouillage */
const declenchementDeverrouillage = function (indiceBall) {
    $('#etiquettes img').click(function (){
        /* le if est pour gérer la fin du jeu */
        if (indiceBall == 1) {
            $divJeuDesDifférences.css('opacity','0.75');
        } else {
            $divJeuDesDifférences.css('opacity','1');
        }
        $etiquette.animate({opacity:'0'},500).fadeOut(1);
        setTimeout(function(){
            deverouillageDeBall(indiceBall);
            indiceBall = 0;
        },800);
    })
}

/* Animation de dévérrouillage */
const deverouillageDeBall = function (indiceBall) {
    const $pokeballImage = $('#pokeballCV>div:nth-child(' + indiceBall + ')>img');
    $pokeballImage.css('bottom','3456px');
    identifiantInterval = setInterval(function(){
        let y = parseFloat($pokeballImage.css('bottom'));
        if (y >= 3968) {
            clearInterval(identifiantInterval);
            $pokeballImage.css('bottom','386px');
            $pokeballImage.css('filter','drop-shadow(2px 2px 5px black)');
            $pokeballImage.attr('id','activee' + indiceBall);
        } else {
            $pokeballImage.css('bottom', y + 128 + 'px');
        }
    },120);
}


/* Gestion du dévérouillage selon le score */
const balanceTonSwitch = function() {
    switch (parseInt(scoreActuel)) {
        case 1:
            affichageEtiquetteBravo(0,5);
            break;
        case 2:
            affichageEtiquetteBravo(1,4);
            break;
        case 3:
            affichageEtiquetteBravo(2,3);
            break;
        case 4:
            affichageEtiquetteBravo(3,2);
            break;
        case 5:
            affichageEtiquetteBravo(4,1);
            break;
    }
}


const $toutesLesBalls = $('.spriteBall');

/* Animation d'ouverture des balls*/
const ouvertureDeBall = function (indiceBall,identifiant) {
    const $pokeballImage = $('#pokeballCV>div:nth-child(' + indiceBall + ')>img');
    if ($pokeballImage.attr('id') == ('activee' + indiceBall)) {
        $toutesLesBalls.addClass("unselectable");
        $pokeballImage.attr('id','enCours')
        identifiant = setInterval(function(){
            let y = parseFloat($pokeballImage.css('bottom'));
            if (y >= 1792) {
                clearInterval(identifiant);
                $pokeballImage.css('bottom','386px');
                $pokeballImage.attr('id','ouverte' + indiceBall);
                $toutesLesBalls.removeClass("unselectable");
            } else {
                $pokeballImage.css('bottom', y + 128 + 'px');
            }
        },120);
    }
}

/* Animation de fermeture des balls*/
const fermetureDeBall = function (indiceBall,identifiant) {
    const $pokeballImage = $('#pokeballCV>div:nth-child(' + indiceBall + ')>img');
    if ($pokeballImage.attr('id') == ('ouverte' + indiceBall)) {
        $toutesLesBalls.addClass("unselectable");
        $pokeballImage.attr('id','enCours')
        $pokeballImage.css('bottom','3330px');
        identifiant = setInterval(function(){
            let y = parseFloat($pokeballImage.css('bottom'));
            if (y <= 1922) {
                $pokeballImage.css('bottom', y + 128 + 'px');
                clearInterval(identifiant);
                setTimeout(function(){
                    $pokeballImage.css('bottom','386px');
                },120)
                $pokeballImage.attr('id','activee' + indiceBall);
                $toutesLesBalls.removeClass("unselectable");
            } else {
                $pokeballImage.css('bottom', y - 128 + 'px');
            }
        },120);
    }
}



    /****** Gère les ouvertures/fermetures des pokeballCV ******/


for (let i=0; i < 6 ; i++) {
    const $pokeball = $('#pokeballCV>div:nth-child(' + i + ')>img');
    const $sectionCV = $('#pokeCV>section:nth-child(' + i + ')');
    $pokeball.click(function (){
        if ($pokeball.attr('id') == ('activee' + i)) {
            ouvertureDeBall(i,identifiantInterval);
            $sectionCV.css('display','block');
            switch (i) {
                case 1:
                    ouvertureAquali();
                    break;
                case 2:
                    ouvertureVoltali();
                    break;
                case 3:
                    ouvertureNoctali();
                    break;
                case 4:
                    ouverturePyroli();
                    break;
                case 5:
                    ouvertureMentali();
                    break;
            }
            $sectionCV.animate({
                right: calculMilieuLargeur,
                bottom: calculMilieuHauteur,
            },1000)
        } 
        if ($pokeball.attr('id') == ('ouverte' + i)) {
            switch (i) {
                case 1:
                    fermetureAquali();
                    break;
                case 2:
                    fermetureVoltali();
                    break;
                case 3:
                    fermetureNoctali();
                    break;
                case 4:
                    fermeturePyroli();
                    break;
                case 5:
                    fermetureMentali();
                    break;
            }
            $sectionCV.animate({
                right: '0px',
                bottom: '0px',
            },1000)
            $sectionCV.delay(1000).fadeOut(1)
            fermetureDeBall(i,identifiantInterval);
        }
    })
}


/* Fonctions de déplacement des étiquette à l'OUVERTURE des balls */
const ouvertureAquali = function (){
    $('#pokeCV>section:nth-child(1)>div').animate({
        bottom: '121px',
        opacity: '1',
        right: '31px',
    },1000)
    $('#pokeCV>section:nth-child(1)>div>div').animate({
        height: '220px',
        width: '370px',
    },1000)
    $('#pokeCV>section:nth-child(1) img').animate({
        bottom: '-8px',
        right: '-55px',
        width: '185px',
    },1000)
    $('#pokeCV>section:nth-child(1) h2,#pokeCV>section:nth-child(1) address').delay(800).fadeIn(1000)
}
const ouvertureVoltali = function (){
    $('#pokeCV>section:nth-child(2)>div').animate({
        bottom: '-14px',
        opacity: '1',
        right: '31px',
    },1000)
    $('#pokeCV>section:nth-child(2)>div>div').animate({
        height: '490px',
        width: '370px',
    },1000)
    $('#pokeCV>section:nth-child(2) img').animate({
        bottom: '-8px',
        right: '-66px',
        width: '185px',
    },1000)
    $('#pokeCV>section:nth-child(2) h2,#pokeCV>section:nth-child(2) h3,#pokeCV>section:nth-child(2) ul').delay(800).fadeIn(1000)
}
const ouvertureNoctali = function () {
    $('#pokeCV>section:nth-child(3)>div').animate({
        bottom: '94px',
        opacity: '1',
        right: '31px',
    },1000)
    $('#pokeCV>section:nth-child(3)>div>div').animate({
        height: '275px',
        width: '370px',
    },1000)
    $('#pokeCV>section:nth-child(3) img').animate({
        bottom: '-14px',
        right: '325px',
        width: '185px',
    },1000)
    $('#pokeCV>section:nth-child(3) h2,#pokeCV>section:nth-child(3) ul').delay(800).fadeIn(1000)
}
const ouverturePyroli = function (){
    $('#pokeCV>section:nth-child(4)>div').animate({
        bottom: '11px',
        opacity: '1',
        right: '-49px',
    },1000)
    $('#pokeCV>section:nth-child(4)>div>div').animate({
        height: '440px',
        width: '530px',
    },1000)
    $('#pokeCV>section:nth-child(4) img').animate({
        bottom: '370px',
        right: '-25px',
        width: '185px',
    },1000)
    $('#pokeCV>section:nth-child(4) h2,#pokeCV>section:nth-child(4) h3,#pokeCV>section:nth-child(4) h4,#pokeCV>section:nth-child(4) p').delay(800).fadeIn(1000)
}
const ouvertureMentali = function (){
    $('#pokeCV>section:nth-child(5)>div').animate({
        bottom: '-55px',
        opacity: '1',
        right: '-101px',
    },1000)
    $('#pokeCV>section:nth-child(5)>div>div').animate({
        height: '565px',
        width: '635px',
    },1000)
    $('#pokeCV>section:nth-child(5) img').animate({
        bottom: '470px',
        right: '10px',
        width: '185px',
    },1000)
    $('#pokeCV>section:nth-child(5) h2,#pokeCV>section:nth-child(5) h3,#pokeCV>section:nth-child(5) h4,#pokeCV>section:nth-child(5) address,#pokeCV>section:nth-child(5) p').delay(800).fadeIn(1000)
}

/* Fonctions de déplacement des étiquette à la FERMETURE des balls */
const fermetureAquali = function (){
    $('#pokeCV>section:nth-child(1)>div').animate({
        bottom: '378px',
        opacity: '0',
        right: '40px',
    },1000)
    $('#pokeCV>section:nth-child(1)>div>div').animate({
        height: '0px',
        width: '0px',
    },1000)
    $('#pokeCV>section:nth-child(1) img').animate({
        bottom: '9px',
        right: '27px',
        width: '20px',
    },1000)
    $('#pokeCV>section:nth-child(1) h2,#pokeCV>section:nth-child(1) address').fadeOut(500)
}
const fermetureVoltali = function (){
    $('#pokeCV>section:nth-child(2)>div').animate({
        bottom: '297px',
        opacity: '0',
        right: '40px',
    },1000)
    $('#pokeCV>section:nth-child(2)>div>div').animate({
        height: '0px',
        width: '0px',
    },1000)
    $('#pokeCV>section:nth-child(2) img').animate({
        bottom: '11px',
        right: '26px',
        width: '20px',
    },1000)
    $('#pokeCV>section:nth-child(2) h2,#pokeCV>section:nth-child(2) h3,#pokeCV>section:nth-child(2) ul').fadeOut(500)
}
const fermetureNoctali = function (){
    $('#pokeCV>section:nth-child(3)>div').animate({
        bottom: '218px',
        opacity: '0',
        right: '40px',
    },1000)
    $('#pokeCV>section:nth-child(3)>div>div').animate({
        height: '0px',
        width: '0px',
    },1000)
    $('#pokeCV>section:nth-child(3) img').animate({
        bottom: '9px',
        right: '25px',
        width: '20px',
    },1000)
    $('#pokeCV>section:nth-child(3) h2,#pokeCV>section:nth-child(3) ul').fadeOut(500)
}
const fermeturePyroli = function (){
    $('#pokeCV>section:nth-child(4)>div').animate({
        bottom: '137px',
        opacity: '0',
        right: '40px',
    },1000)
    $('#pokeCV>section:nth-child(4)>div>div').animate({
        height: '0px',
        width: '0px',
    },1000)
    $('#pokeCV>section:nth-child(4) img').animate({
        bottom: '11px',
        right: '25px',
        width: '20px',
    },1000)
    $('#pokeCV>section:nth-child(4) h2,#pokeCV>section:nth-child(4) h3,#pokeCV>section:nth-child(4) h4,#pokeCV>section:nth-child(4) p').fadeOut(500)
}
const fermetureMentali = function (){
    $('#pokeCV>section:nth-child(5)>div').animate({
        bottom: '58px',
        opacity: '0',
        right: '40px',
    },1000)
    $('#pokeCV>section:nth-child(5)>div>div').animate({
        height: '0px',
        width: '0px',
    },1000)
    $('#pokeCV>section:nth-child(5) img').animate({
        bottom: '11px',
        right: '27px',
        width: '20px',
    },1000)
    $('#pokeCV>section:nth-child(5) h2,#pokeCV>section:nth-child(5) h3,#pokeCV>section:nth-child(5) h4,#pokeCV>section:nth-child(5) address,#pokeCV>section:nth-child(5) p').fadeOut(500)
}


/*** Fonction pour gérer le centrage des étiquettes du CV ***/
let valeurLargeur = parseFloat($('#pokeCV').css('width'));
let valeurHauteur = parseFloat($('#pokeCV').css('height'));
let calculMilieuLargeur = ((valeurLargeur/2) - 250) + "px";
let calculMilieuHauteur = ((valeurHauteur/2) - 250) + "px";

$(window).resize(function(){
    valeurLargeur = parseFloat($('#pokeCV').css('width'));
    valeurHauteur = parseFloat($('#pokeCV').css('height'));
    calculMilieuLargeur = ((valeurLargeur/2) - 250) + "px";
    calculMilieuHauteur = ((valeurHauteur/2) - 250) + "px";
    for (let i=0; i < 6 ; i++) {
        const $sectionCV = $('#pokeCV>section:nth-child(' + i + ')');
        if ($sectionCV.css('display') != 'none') {
            $sectionCV.css({
                right: calculMilieuLargeur,
                bottom: calculMilieuHauteur,
            })
        }
    }
    
})