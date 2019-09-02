'use strict';

const solve = (exp, x) => new Function('x', `return ${exp}`)(x);