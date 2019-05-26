
var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var max_matches = 9;
var attempts = 0;
var games_played = null;


$(document).ready(initialize);

function initialize() {
    console.log('Initialized!');
    $('.card').bind('click', handleCardClick);
    $('#myBtn').bind('click', showResetModal);
    $('.close').bind('click', closeModal);
    $('#myModal').bind('click', closeModal);
    $('#resetButton').bind('click', resetStats);

}
function showWinModal() {
    $('#myModal').show();
    $('.modal-content').show();
    $('.modalTextContent').text('Congratulations, you\'ve won!!!');
}

function showResetModal() {
    $('#myModal').show();
    $('.modal-content').show();
    $('.modalTextContent').text('Would you like to reset?')
}
function closeModal() {
    $('#myModal').hide();
    $('.modal-content').hide();
}


function handleCardClick(event) {
    if ($(event.currentTarget).find('.back').css('display') === 'block') {
        $(event.currentTarget).find('.back').addClass('hidden');
        if (firstCardClicked === null) {
            firstCardClicked = $(event.currentTarget);
        } else if (secondCardClicked === null) { //just make it an else statement
            secondCardClicked = $(event.currentTarget);
            var imgCard1 = firstCardClicked.find('.front').css('background-image');
            var imgCard2 = secondCardClicked.find('.front').css('background-image');
            if (imgCard1 === imgCard2) {
                matches++;
                firstCardClicked = null;
                secondCardClicked = null;
            } else if (imgCard1 !== imgCard2) {
                $('.card').unbind();
                setTimeout(flipCardsBack, 1500);
                attempts++;
            }
            displayStats();
        }
        if (matches === max_matches) {
            showWinModal();
        }
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
    else {
        return 0;
    }
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
    closeModal();

}
