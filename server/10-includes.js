const pets = ['cat', 'dog', 'bat'];

const rta = pets.includes('dog');
console.log('rta', rta);

function filterByTerm(array, term) {
    return array.filter(item  => {
        return item.includes(term);
    });
}

console.log(filterByTerm(["ana", "santi", "nico", "anastasia"], 'ana'));