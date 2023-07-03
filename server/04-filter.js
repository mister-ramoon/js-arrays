const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    },
];

const rta = words.filter(word => word.length > 6);

console.log('original', words);
console.log('rta', rta);

const rta2 = orders.filter(item => item.delivered && item.total >= 100);
console.log('rta2', rta2);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
};

console.log('search', search('Santiago'));