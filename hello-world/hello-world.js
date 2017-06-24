var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    if(input === ""){
        return "Hello, World!";
    }

    return `Hello, ${input}!`;
};

module.exports = HelloWorld;
