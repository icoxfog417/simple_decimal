Simple Decimal for JavaScript
========================================

The type `sDec` is simple decimal class for javascript. it lets you do the following:

    var value = new sDec(0.3).div(0.1) + 0; //in float , 0.3 / 0.1 = 2.9999999999999996
    console.log(value); // 3

    var value = new sDec(0.1).plus(0.3).minus(0.2).multi(4).div(10) + 0; // by +0 -> to number
    console.log(value); // 0.08

    