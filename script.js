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

        var player1 = $('.player1');
        // var player2=$('.player2');
        checkDiagonal(player1);
        // checkDiagonal(player2);

        switchPlayers();

        function checkDiagonal(player) {
            var diagonalCounter =0;
            console.log("checkDiagonal fired");
            for(var k=0; k<player.length; k++) {
                for(var i=0; i<diagVict.length; i++) {
                    for(var j=0; j<diagVict.length; j++) {
                        if(player.eq(k).hasClass(diagVict[i][j])) {
                            diagonalCounter++;
                            console.log(diagonalCounter);
                        } else {
                            diagonalCounter =0;
                        }
                    }
                    if(diagonalCounter==4) {
                        console.log("Yuppi!");
                    }
                }
            }
        }

        function checkForVictory(elem) {
            var counter =0;
            // console.log('check for victory fired');
            for (var i =0; i<=elem.length; i++) {

                if(elem.eq(i).hasClass(currentPlayer)) {
                    // console.log(counter);
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


$('#restart').on('click', function () {
    location.reload();
});


$('#instructions').on('click', function () {
    $('#overlay').css('display', 'block');
    $('.manual').css('display', 'block');
});

$('#close-manual').on('click', function () {
    $('#overlay').css('display', 'none');
    $('.manual').css('display', 'none');
});


var diagVict = [
    [0,7,14,21],
    [1,8,15,22],
    [2,9,16,23],
    [3,8,13,18],
    [4,9,14,19],
    [5,10,15,20],
    [6,13,20,27],
    [7,14,21,28],
    [8,15,22,29],
    [9,14,19,24],
    [10,15,20,25],
    [11,16,21,26],
    [12,19,26,33],
    [13,20,27,34],
    [14,21,28,35],
    [15,20,25,30],
    [16,21,26,31],
    [17,22,27,32],
    [18,25,32,39],
    [19,26,33,40],
    [20,27,34,41],
    [21,26,31,36],
    [22,27,32,37],
    [23,28,33,38]
];

var hole = $('.hole');


(function addClass() {

    for (var i=0; i<hole.length; i++) {
        hole.eq(i).addClass(''+i);
    }
})();
