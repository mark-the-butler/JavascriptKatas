var DnaTranscriber = function() {
    this.dnaDictionary = [
            {key:"G",value:"C"},
            {key:"C",value:"G"},
            {key:"T",value:"A"},
            {key:"A",value:"U"}
        ];

    this.rnaStrand = "";
};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
    dnaStrand.split(" ").map(function(x) {
        this.dnaDictionary.forEach(function(element){
            if (element.key === x) {
                this.rnaStrand += element.value;
            }
        });
    });

    return this.rnaStrand;
};



module.exports = DnaTranscriber;