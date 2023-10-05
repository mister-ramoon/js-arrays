const months = ['March', 'Jan', 'Feb', 'Dec'];
const numbers = [1, 30, 4, 21, 100000];
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];

const orders = [
    {
        customerNasme: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerNasme: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerNasme: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerNasme: 'Valentina',
        total: 240,
        delivered: true
    }
];

// Sort months
console.log(months.sort());

// Sort numbers
console.log(numbers.sort( (a,b) => a - b ));
console.log(numbers.sort( (a,b) => b - a ));

// Sort words
console.log(words.sort( (a,b) => a.localeCompare(b) ));

// Sort orders
console.log(orders.sort( (a,b) => a.total - b.total ));