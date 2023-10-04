const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const rta = matriz.reduce((acc, curr) => acc.concat(curr), []);
const rta1 = matriz.flat();

console.log('rta', rta);
console.log('rta1', rta1);