// function countXsAndOs (string) {
//     var splitStr = string.toLowerCase().split('');
//     var xArray = [];
//     var oArray = [];
//     splitStr.forEach(function ( letter ) {
//         if (letter === 'x') {
//             xArray.push( letter );
//         } else if (letter === 'o') {
//             oArray.push( letter );
//         }
//     });

//     if ((xArray.length % 2 === 0) && (oArray.length % 2 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// };


// countXsAndOs('xxooyuox');




function filterXOs (str, arr) {
    return arr.filter(function ( letter ) {
        return letter === str;
    });
}

function compareXsAndOs (str) {
    var splitStr = str.toLowerCase().split('');
    var xArray = filterXOs('x', splitStr);
    var oArray = filterXOs('o', splitStr);

    if (!(xArray.length % 2) && !(oArray.length % 2)) {
        return true;
    } else {
        return false;
    }
}



compareXsAndOs('xxxooOOxOx');