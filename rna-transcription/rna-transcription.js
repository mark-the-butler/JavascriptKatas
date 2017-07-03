var DnaTranscriber = function() {
};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
    if (dnaStrand === "G") {
        return "C";
    }

    return "G";
};

module.exports = DnaTranscriber;