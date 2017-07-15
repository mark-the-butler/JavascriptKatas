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
    
    strandToArray.map(function(x) {
        rnaStrand = getOpposite(x);
        return rnaStrand.toString();
    });

    return rnaStrand;
};



module.exports = DnaTranscriber;
