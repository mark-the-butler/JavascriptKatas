var DnaTranscriber = function() {
    this.dnaDictionary = [
            {key:"G",value:"C"},
            {key:"C",value:"G"},
            {key:"T",value:"A"},
            {key:"A",value:"U"}
        ];

    this.rnaStrand = "";
};

function getOpposite(letter) {
    for(var i = 0; i < this.dnaDictionary.length; i++) {
        if(this.dnaDictionary[i].key == letter) {
            return this.dnaDictionary[i].value;
        }
    }
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
    dnaStrand.split(" ").map(function(x) {
        this.rnaStrand += getOpposite(x);
    });

    return this.rnaStrand;
};



module.exports = DnaTranscriber;


// Look at creating a function that gets the opposite of the letter that is passed in.