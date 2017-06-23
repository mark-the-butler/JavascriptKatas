var Hamming = function() {
};

Hamming.prototype.compute = function(input1, input2){
    var count = 0;

    if (input1.length == input2.length){
        for(var i = 0; i < input1.length; i++){
            if(input1[i] != input2[i]){
                count++;
            }
        }
        return count;
    }
    throw new Error('DNA strands must be of equal length.');    
};

module.exports = Hamming;