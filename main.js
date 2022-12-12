//Para a exportação e importação de apenas uma variável:

// ## ex01/moduloA.js

const variavel = 'Valor';
const variavel2 = 'Outro Valor';

export default variavel;

// ## ex01/moduloB.js

import ModuloA;

console.log(ModuloA); // => 'Valor'


//Para exportação de mais de uma variável:

// ## ex01/moduloA.js

const variavel = 'Valor';
const variavel2 = 'Outro Valor';

export default {
   variavel: variavel,
   variavel2: variavel2,
};

// ## ex01/moduloB.js

import Modulo;

console.log(Modulo); // { variavel: 'Valor', variavel2: 'Outro Valor' }

//Outro exemplo:

// ## ex01/moduloA.js

export const variavel = 'Valor';
export const variavel2 = 'Outro Valor';

export default 'Valor default do módulo';

// ## ex01/moduloB.js

import ValorDoModulo, { variavel, variavel2 };

console.log(variavel, ' e ' ,variavel2); // 'Valor e Outro Valor'
console.log(ValorDoModulo); // Valor default do módulo'