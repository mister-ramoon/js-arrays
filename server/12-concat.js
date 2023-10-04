const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const rta = elements.concat(otherElements);
const rta2 = [...elements, ...otherElements];
const rta3 = [...elements, 'random'];
elements.push(otherElements);

console.log('rta', rta);
console.log('rta2', rta2);
console.log('rta3', rta3);
console.log('elements', elements);
