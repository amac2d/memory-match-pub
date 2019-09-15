
var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var max_matches = 9;
var attempts = 0;
var games_played = null;


$(document).ready(initialize);

function initialize() {
    shuffleCards();
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
        }
        else {
            secondCardClicked = $(event.currentTarget);
            var imgCard1 = firstCardClicked.find('.front').css('background-image');
            var imgCard2 = secondCardClicked.find('.front').css('background-image');
            if (imgCard1 === imgCard2) {
                matches++;
                firstCardClicked = null;
                secondCardClicked = null;
            }
            else {
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
    $('main *').remove();
    shuffleCards();
    closeModal();
}

function shuffleCards() {
    // var frontCards = ['andy-card front', 'andy-card front', 'bill-card front', 'bill-card front', 'brett-card front',
    //                   'brett-card front', 'cody-card front', 'cody-card front', 'dan-card front', 'dan-card front',
    //                   'scott-card front', 'scott-card front', 'timD-card front', 'timD-card front', 'timH-card front',
    //                   'timH-card front', 'tj-card front', 'tj-card front'];

    var frontCards = ['eg6-card front', 'eg6-card front', 'ek9-card front', 'ek9-card front', 'enkei92-card front', 
                      'enkei92-card front', 'miata-card front', 'miata-card front', 'r32-card front', 'r32-card front', 
                      'r34-card front', 'r34-card front', 'rpf1-card front', 'rpf1-card front', 's2k-card front', 
                      's2k-card front', 's13-card front', 's13-card front'];

    var shuffledFrontCards = frontCards.sort(function(a, b){return 0.5 - Math.random()});
    var mainElement = $('main');

    for (var indexCardContainer = 0 ; indexCardContainer < 3 ; indexCardContainer++) {
        var divCardContainer = $('<div>').addClass('cardContainer');

        for (var indexCards = 0 ; indexCards < 6 ; indexCards++){
            var divCard = $('<div>').addClass('card');
            var divFrontCard = $('<div>').addClass(shuffledFrontCards.pop());
            var divBackCard = $('<div>').addClass('lfz-card back');
            divCard.append(divFrontCard, divBackCard);
            divCardContainer.append(divCard);
        }
        mainElement.append(divCardContainer);
    }
    $('.card').bind('click', handleCardClick);
}
