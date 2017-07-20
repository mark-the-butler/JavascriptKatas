var Pangram = require('./pangram');

describe('Pangram()', function()  {

  xit('empty sentence', function() {
    var pangram = new Pangram('');
    expect(pangram.isPangram()).toBe(false);
  });

  it('Pangram should have a property mapped to passed in sentence', function() {
    var sentence = "the quick brown fox jumps over the lazy dog";
    var pangram = new Pangram(sentence);
    expect(pangram.sentenceToTest).toEqual(sentence);
  });

  xit('pangram with only lower case', function()  {
    var pangram = new Pangram("the quick brown fox jumps over the lazy dog");
    expect(pangram.isPangram()).toBe(true);
  });

  it('returns sentence as array with no spaces', function() {
    var pangram = new Pangram("This sentence");
    expect(pangram.isPangram()).toEqual(["T","h","i","s","s","e","n","t","e","n","c","e"]);
  });

  xit("missing character 'x'", function()  {
    var pangram = new Pangram("a quick movement of the enemy will jeopardize five gunboats");
    expect(pangram.isPangram()).toBe(false);
  });

  xit("another missing character 'x'", function() {
    var pangram = new Pangram("the quick brown fish jumps over the lazy dog");
    expect(pangram.isPangram()).toBe(false);
  });

  xit("pangram with underscores", function() {
    var pangram = new Pangram("the_quick_brown_fox_jumps_over_the_lazy_dog");
    expect(pangram.isPangram()).toBe(true);
  });

  xit("pangram with numbers", function() {
    var pangram = new Pangram("the 1 quick brown fox jumps over the 2 lazy dogs");
    expect(pangram.isPangram()).toBe(true);
  });

  xit('missing letters replaced by numbers', function() {
    var pangram = new Pangram("7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog");
    expect(pangram.isPangram()).toBe(false);
  });

  xit('pangram with mixed case and punctuation', function()  {
    var pangram = new Pangram("\"Five quacking Zephyrs jolt my wax bed.\"");
    expect(pangram.isPangram()).toBe(true);
  });

  xit('pangram with non-ascii characters', function()  {
    var pangram = new Pangram("Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.");
    expect(pangram.isPangram()).toBe(true);
  });

});
