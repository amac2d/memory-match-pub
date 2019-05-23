
$(document).ready(initialize);

function initialize() {
    console.log('Initialized!');
    $('.lfz-card').click(handleCardClick);

}


function handleCardClick(event) {
    console.log('clicked!');
    console.log('this is:', this);
    $(this).addClass('hidden');

}