const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const rta = numbers.every(item => item < 10);

console.log('rta', rta);

const players = [
    {
        name: 'Nicolas',
        age: 27
    },
    {
        name: 'Zulema',
        age: 31
    },
    {
        name: 'Santiago',
        age: 33
    },
    {
        name: 'Valentina',
        age: 25
    },
];

const rta2 = players.every(player => player.age < 30);
console.log('rta2', rta2);

const numbersEven = [2, 4, 6, 8, 10];

const rta3 = numbersEven.every(number => number % 2 === 0);
console.log('rta3', rta3);