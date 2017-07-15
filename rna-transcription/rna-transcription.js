var DnaTranscriber = function() {
};

var dnaDictionary = [
            {key:"G",value:"C"},
            {key:"C",value:"G"},
            {key:"T",value:"A"},
            {key:"A",value:"U"}
        ];

var rnaStrand;

function getOpposite(letter) {
    for(var i = 0; i < dnaDictionary.length; i++) {
        if(dnaDictionary[i].key == letter) {
            return dnaDictionary[i].value;
        }
    }
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
    var strandToArray = dnaStrand.split("");
    
    rnaStrand = strandToArray.map(function(x) {
                   var oppositeLetters = getOpposite(x);
                   return oppositeLetters;
                });

    if (rnaStrand.join("").length !== dnaStrand.length) {
        throw new Error("Invalid input");
    }

    return rnaStrand.join("");
    
};



module.exports = DnaTranscriber;
