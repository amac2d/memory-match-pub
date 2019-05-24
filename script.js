
var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var imgCard1 = null;
var imgCard2 = null;
var max_matches = 9;


$(document).ready(initialize);

function initialize() {
    console.log('Initialized!');
    $('.card').click(handleCardClick);

    // Get the modal
    var modal = document.getElementById("myModal");

// Get the button that opens the modal
    var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

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
     if (matches === max_matches) {
         console.log('You won!!!');
         $('#myModal').css('display', 'block');
     }

}

function flipCardsBack() {
    firstCardClicked.find('.back').removeClass('hidden');
    secondCardClicked.find('.back').removeClass('hidden');
    firstCardClicked = null;
    secondCardClicked = null;
}


