var slotToBeClicked = $('.column').find('.row0').find('.hole');
var currentPlayer = 'player1';
var winner = 'winner';
// var holes = $('.hole');

function switchPlayers() {
    if (currentPlayer == 'player1') {
        currentPlayer = 'player2';
        $('#pl2').css('font-size', '1.5em');
        $('#pl1').css('font-size', '1.3em');
    } else {
        currentPlayer = 'player1';
        $('#pl1').css('font-size', '1.5em');
        $('#pl2').css('font-size', '1.3em');
    }
}


// add event to the whole column;
// Anchoring the click event
slotToBeClicked
// button like-behaviour of the first row;
    .on('mousedown', function(e) {
        $(e.target).css('border', '3px tomato solid');
        // $(e.target).css('box-shadow', 'none');
        e.preventDefault;
    })
    .on('mouseup', function(e) {
        $(e.target).css('border', 'none');
        // $(e.target).css('box-shadow', '-2px -2px lightgrey');
        e.preventDefault;
        e.stopPropagation();
    })
    .on('click', function (e) {
        var clickedColumn = $(e.currentTarget).closest('.column');
        for (var i = 5; i >= 0; i--) {
            if (!clickedColumn.find('.hole').eq(i).hasClass('player1') && !clickedColumn.find('.hole').eq(i).hasClass('player2')) {
                clickedColumn.find('.hole').eq(i).addClass(currentPlayer);
                if($('.hole').hasClass('player1') || $('.hole').hasClass('player2')){
                    $('.player1').css('box-shadow', 'none');
                    $('.player2').css('box-shadow', 'none');
                }
                break;
            }
        }

        var slotsInRow =$('.row' +i).find('.hole');
        var slotsInCol = clickedColumn.find('.hole');

        checkForVictory(slotsInCol);
        checkForVictory(slotsInRow);
        switchPlayers();

        function checkForVictory(elem) {
            var counter =0;
            console.log('check for victory fired');
            console.log(elem);

            for (var i =0; i<=elem.length; i++) {

                if(elem.eq(i).hasClass(currentPlayer)) {
                    console.log(counter);
                    counter++;
                    $("." + currentPlayer).addClass('winner');
                } else {
                    counter =0;
                    $("." + currentPlayer).removeClass('winner');
                }
                if(counter ==4) {
                    console.log('You re the winner!!!');

                    victoryBlink(currentPlayer);
                    setTimeout(victoryFlip, 1000);
                    setTimeout(victoryBoard,3000);

                }

            }
        }

    // end of click event
    });

function victoryBlink(winner) {
    console.log('The winner is:' + winner);
    console.log(winner);
    $('.winner').css('transition-duration', '2s');
    $('.winner').css('animation', 'blinker 1s linear infinite');
    $('.winner').css('width', '45px');
    $('.winner').css('height', '45px');
}

function victoryFlip () {
    $('#board').css('transform', 'rotateY(360deg)');
    // $('#board').css('transform', 'rotateX(1800deg)');
    $('#board').css('transition', 'transform 2s linear');
}

function victoryBoard() {
    $('#overlay').css('display', 'block');
    $('#congrats').css('display', 'block');
    $('#congrats').css('transition-duration', '1s');
    if (currentPlayer == 'player1') {
        $('#input-winner').html('Player 2');
        $('#input-winner').css('color', 'red');
        $('#input-winner').css('text-shadow','1px 1px blue'); 
    } else {
        $('#input-winner').html('Player 1');
        $('#input-winner').css('color', 'blue');
        $('#input-winner').css('text-shadow','1px 1px red');
    }

}

$('#instructions').on('click', function () {
    $('#overlay').css('display', 'block');
    $('.manual').css('display', 'block');
});

$('#close-manual').on('click', function () {
    $('#overlay').css('display', 'none');
    $('.manual').css('display', 'none');
});
