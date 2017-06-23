var Year = function(input) {
    this.value = input; 
};

Year.prototype.isLeap = function() {
    if(this.value % 4 != 0) return false;

    if(this.value % 100 == 0) return this.value % 400 == 0;

    return true;
};

module.exports = Year;
