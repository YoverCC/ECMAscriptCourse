const aBigNumber = 8907245920742093847n;
const anotherBigNumber = BigInt(8907245920742093847);

console.log(aBigNumber);
console.log(anotherBigNumber);

/*
JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER. Fuera de estos límites, los cálculos matemáticos pueden fallar y mostrar resultados erróneos. Con BigInt esto se resuelve.
*/