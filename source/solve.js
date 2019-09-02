'use strict';

const solve = (exp, x) => new Function('x, exp', `return ${exp}`)(x);