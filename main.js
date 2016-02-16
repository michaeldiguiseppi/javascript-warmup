function countXsAndOs (string) {
    var splitStr = string.toLowerCase().split('');
    var xArray = [];
    var oArray = [];
    splitStr.forEach(function ( letter ) {
        if (letter === 'x') {
            xArray.push( letter );
        } else if (letter === 'o') {
            oArray.push( letter );
        }
    });

    if ((xArray.length % 2 === 0) && (oArray.length % 2 === 0)) {
        return true;
    } else {
        return false;
    }


};


countXsAndOs('xxooyuox');