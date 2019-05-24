
var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var imgCard1 = null;
var imgCard2 = null;


$(document).ready(initialize);

function initialize() {
    console.log('Initialized!');
    $('.card').click(handleCardClick);

}


function handleCardClick(event) {
    console.log('clicked!');
    console.log('event.target is:', event.target);
    $(event.target).addClass('hidden');


    if (firstCardClicked === null) {
        firstCardClicked = $(event.currentTarget);
        console.log('event.target:', $(event.currentTarget)); //prev()


        imgCard1 = firstCardClicked.find('.front').css('background-image');
        console.log('imgCard1 CSS img url:', imgCard1);



    }
     else if (secondCardClicked === null) {
        secondCardClicked = $(event.currentTarget);
        imgCard2 = secondCardClicked.find('.front').css('background-image');
        console.log('imgCard2 CSS img url:', imgCard2);
        if ( imgCard1 === imgCard2 ) {
            console.log('it Matches!!!!!!!!!!!!!');
            matches++;
            firstCardClicked = null;
            secondCardClicked = null;

        }
        else if (imgCard1 !== imgCard2) {
            setTimeout(flipCardsBack, 1500);
        }

    }

}

function flipCardsBack() {
    firstCardClicked.find('.back').removeClass('hidden');
    secondCardClicked.find('.back').removeClass('hidden');
    firstCardClicked = null;
    secondCardClicked = null;
}

