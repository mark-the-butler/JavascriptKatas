var DnaTranscriber = function() {
    this.dnaDictionary = [
            {key:"G",value:"C"},
            {key:"C",value:"G"},
            {key:"T",value:"A"},
            {key:"A",value:"U"}
        ];

    this.rnaStrand = "";
};

DnaTranscriber.prototype.getDnaStrand = function(strand) {
    this.dnaDictionary.forEach(function(element){
        if (element.key === strand) {
            this.rnaStrand += element.value;
        }
    });
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
    dnaStrand.split(" ").forEach(function(strand) {
        getDnaStrand(this);
    });

    return this.rnaStrand;
};



module.exports = DnaTranscriber;