var slotToBeClicked = $('.column').find('.row0').find('.hole');
var currentPlayer = 'player1';
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
                } else {
                    counter =0;
                }
                if(counter ==4) {
                    alert('You re the winner!!!');
                    console.log(currentPlayer);
                }

            }
        }

    // end of click event
    });

$('#instructions').on('click', function () {
    $('#overlay').css('display', 'block');
    $('.manual').css('display', 'block');
});

$('#close-manual').on('click', function () {
    $('#overlay').css('display', 'none');
    $('.manual').css('display', 'none');
});
