
var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var max_matches = 9;
var attempts = null;
var games_played = null;


$(document).ready(initialize);

function initialize() {
    console.log('Initialized!');
    $('.card').bind('click', handleCardClick);

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


    $('#resetButton').click(resetStats);

}


function handleCardClick(event) {
    $(event.currentTarget).find('.back').addClass('hidden');



    if (firstCardClicked === null) {
        firstCardClicked = $(event.currentTarget);
    }
     else if (secondCardClicked === null) { //just make it an else statement
        secondCardClicked = $(event.currentTarget);
        var imgCard1 = firstCardClicked.find('.front').css('background-image');
        var imgCard2 = secondCardClicked.find('.front').css('background-image');
        if ( imgCard1 === imgCard2 ) {
            matches++;
            firstCardClicked = null;
            secondCardClicked = null;
        }
        else if (imgCard1 !== imgCard2) {
            $('.card').unbind();
            setTimeout(flipCardsBack, 1500);
            attempts++;
        }
        displayStats();
    }
     if (matches === max_matches) {
         $('#myModal').css('display', 'block');
     }

}

function flipCardsBack() {
    firstCardClicked.find('.back').removeClass('hidden');
    secondCardClicked.find('.back').removeClass('hidden');
    firstCardClicked = null;
    secondCardClicked = null;
    $('.card').bind('click', handleCardClick);
}

function calculateAccuracy() {
    var percentAccuracy = matches / (matches + attempts) * 100;
    if (percentAccuracy) {
        return parseInt(percentAccuracy);
    }
    else return 0;
}

function displayStats() {
    var accuracy = calculateAccuracy();
    $('.attempts').text(attempts);
    $('.accuracy').text(accuracy + '%');
    if (games_played) {
        $('.gamesPlayed').text(games_played);
    }
}

function resetStats() {
    firstCardClicked = null;
    secondCardClicked = null;
    matches = null;
    attempts = 0;
    games_played++;
    displayStats();
    $('.back').removeClass('hidden');

    $('#myModal').hide();

}
