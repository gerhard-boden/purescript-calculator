// Generated by purs version 0.12.0
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Prelude = require("../Prelude/index.js");
var Alternate = function (x) {
    return x;
};
var showAlternate = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Alternate " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupAlternate = function (dictAlt) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Control_Alt.alt(dictAlt)(v)(v1);
        };
    });
};
var plusAlternate = function (dictPlus) {
    return dictPlus;
};
var ordAlternate = function (dictOrd) {
    return dictOrd;
};
var ord1Alternate = function (dictOrd1) {
    return dictOrd1;
};
var monoidAlternate = function (dictPlus) {
    return new Data_Monoid.Monoid(function () {
        return semigroupAlternate(dictPlus.Alt0());
    }, Control_Plus.empty(dictPlus));
};
var monadAlternate = function (dictMonad) {
    return dictMonad;
};
var functorAlternate = function (dictFunctor) {
    return dictFunctor;
};
var extendAlternate = function (dictExtend) {
    return dictExtend;
};
var eqAlternate = function (dictEq) {
    return dictEq;
};
var eq1Alternate = function (dictEq1) {
    return dictEq1;
};
var comonadAlternate = function (dictComonad) {
    return dictComonad;
};
var boundedAlternate = function (dictBounded) {
    return dictBounded;
};
var bindAlternate = function (dictBind) {
    return dictBind;
};
var applyAlternate = function (dictApply) {
    return dictApply;
};
var applicativeAlternate = function (dictApplicative) {
    return dictApplicative;
};
var alternativeAlternate = function (dictAlternative) {
    return dictAlternative;
};
var altAlternate = function (dictAlt) {
    return dictAlt;
};
module.exports = {
    Alternate: Alternate,
    eqAlternate: eqAlternate,
    eq1Alternate: eq1Alternate,
    ordAlternate: ordAlternate,
    ord1Alternate: ord1Alternate,
    boundedAlternate: boundedAlternate,
    functorAlternate: functorAlternate,
    applyAlternate: applyAlternate,
    applicativeAlternate: applicativeAlternate,
    altAlternate: altAlternate,
    plusAlternate: plusAlternate,
    alternativeAlternate: alternativeAlternate,
    bindAlternate: bindAlternate,
    monadAlternate: monadAlternate,
    extendAlternate: extendAlternate,
    comonadAlternate: comonadAlternate,
    showAlternate: showAlternate,
    semigroupAlternate: semigroupAlternate,
    monoidAlternate: monoidAlternate
};