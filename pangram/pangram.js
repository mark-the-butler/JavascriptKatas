var Pangram = function(sentence) {
    this.sentenceToTest = sentence
};

Pangram.prototype.isPangram = function() {
    var sentenceAsArray = this.sentenceToTest.replace(/\s/g,'').split("");

    return sentenceAsArray;
};

module.exports = Pangram;