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



// console.log(hole.eq(0).hasClass(diagV[0][0]));
// console.log(player1.eq(0).hasClass((diagV[0][0])));