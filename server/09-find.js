numbers = [1, 30, 49, 29, 10, 13];

const rta = numbers.find(item => item === 30);

console.log('rta', rta);

products = [
    {
        name: 'Pizza',
        price: 12,
        id: '🍕'
    },
    {
        name: 'Burger',
        price: 23,
        id: '🍔'
    },
    {
        name: 'Hot dog',
        price: 34,
        id: '🌭'
    },
    {
        name: 'Hot cakes',
        price: 355,
        id: '🥞'
    },
    {
        name: 'Fries',
        price: 56,
        id: '🍟'
    },
    {
        name: 'Donuts',
        price: 67,
        id: '🍩'
    }
];

const rta2 = products.find(item => item.id === '🍩');
console.log('rta2', rta2);

const rta3 = products.findIndex(item => item.id === '🍩');
console.log('rta3', rta3);