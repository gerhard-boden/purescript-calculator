// Generated by purs version 0.12.0
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_EuclideanRing = require("../Data.EuclideanRing/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Prelude = require("../Prelude/index.js");
var testperson = {
    name: "Gerhard",
    gender: "male",
    weight: 66.0
};
var drinks = [ {
    name: "Gin Tonic",
    percentage: 40.0,
    amount: 32.0
}, {
    name: "Jack Daniel's",
    percentage: 40.0,
    amount: 4.0
}, {
    name: "Shots",
    percentage: 40.0,
    amount: 10.0
} ];
var bloodAlcohol = function (person) {
    return Data_Foldable.sum(Data_Foldable.foldableArray)(Data_Semiring.semiringNumber)(Data_Functor.map(Data_Functor.functorArray)(function (drink) {
        return (drink.amount * 10.0 * (drink.percentage / 100.0) * 0.8) / (person.weight * (function () {
            var $0 = person.gender === "male";
            if ($0) {
                return 0.68;
            };
            return 0.55;
        })());
    })(drinks));
};
var main = bloodAlcohol(testperson);
module.exports = {
    drinks: drinks,
    testperson: testperson,
    bloodAlcohol: bloodAlcohol,
    main: main
};
