var sDec = require("./simple_decimal.js").sDec;

//test for constructor
describe("constructor", function() {
  it("new sDec by number", function() {
  	var rawValue = 10.1111;
  	var decValue = new sDec(rawValue);
    expect(decValue + 0).toBe(rawValue);
  });
});

describe("constructor", function() {
  it("new sDec by string", function() {
  	var rawValue = "110.12345";
  	var decValue = new sDec(rawValue);
    expect(decValue + 0).toBe(parseFloat(rawValue));
  });
});

describe("constructor", function() {
  it("new sDec by null", function() {
  	var rawValue = "";
  	var decValue = new sDec(rawValue);
    expect(decValue + 0).toBe(0);
  });
});

//test for culculation
describe("plus", function() {
  it("simple plus test", function() {
  	//in float , 1.1 + 3.2 = 4.300000000000001
  	var decValue = new sDec(1.1); 
    expect(decValue.plus(3.2)+0).toBe(4.3);
	expect(decValue.plus(3.2).plus(2.9)+0).toBe(7.2);

  });
});

describe("minus", function() {
  it("simple minus test", function() {
  	//in float , 1 - 0.9 - 0.1 = -2.7755575615628914e-17
  	var decValue = new sDec(1); 
    expect(decValue.minus(0.9).minus(0.1)+0).toBe(0);

  });
});

describe("multi", function() {
  it("simple multi test", function() {
  	//in float , 0.31 * 0.02 * 0.15 = 0.0009299999999999999
  	var decValue = new sDec(0.31); 
    expect(decValue.multi(0.02).multi(0.15)+0).toBe(0.00093);

  });
});

describe("div", function() {
  it("simple div test", function() {
  	//in float , 0.3 / 0.1 = 2.9999999999999996
    expect(new sDec(0.3).div(0.1)+0).toBe(3);
  });
});

describe("complex", function() {
  it("test for complex calculation", function() {
    expect(new sDec(0.1).plus(0.3).minus(0.2).multi(4).div(10) + 0).toBe(0.08);
  });
});

describe("toString", function() {
  it("toString test", function() {
    expect(new sDec(10.3010000).toString()).toBe("10.301");
  });
});





