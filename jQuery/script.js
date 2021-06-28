

/******* Animation : Jeu des 5 différences *******/

const deplacementObjetsCachés = function (cible,valeurLeft,valeurRight) {
    cible.animate({
            left: valeurLeft,
            top: valeurRight,
        },2000);
};

const augmenteScore = function (){
    let valeurScore = parseInt($('#score span').html());
    $('#score span').html(valeurScore + 1);
};



$('#differencesCachees>div:nth-child(1)').click(function(){
    deplacementObjetsCachés($(this),'440px','-85px');
    augmenteScore();
})

$('#differencesCachees>div:nth-child(2)').click(function(){
    deplacementObjetsCachés($(this),'390px','-50px');
    augmenteScore();
})

$('#differencesCachees>div:nth-child(3)').click(function(){
    deplacementObjetsCachés($(this),'381px','-81px');
    augmenteScore();
})

$('#differencesCachees>div:nth-child(4)').click(function(){
    deplacementObjetsCachés($(this),'410px','-105px');
    augmenteScore();
})

$('#differencesCachees>div:nth-child(5)').click(function(){
    deplacementObjetsCachés($(this),'430px','-55px');
    augmenteScore();
})
