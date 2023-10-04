const products = [
    {title: 'Pizza', price: 12, id: '🍕'},
    {title: 'Burger', price: 23, id: '🍔'},
    {title: 'Hot dog', price: 34, id: '🌭'}
];
const myProducts = [];
const productIndex = products.findIndex(item => item.id === '🍔');

if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

// Update 
const products2 = [
    {title: 'Pizza', price: 12, id: '🍕'},
    {title: 'Burger', price: 23, id: '🍔'},
    {title: 'Hot dog', price: 34, id: '🌭'}
];

const update = {
    id: '🌭',
    changes: {
        price: 100,
        description: 'Delicious hot dog'
    }
};

const productIndex2 = products2.findIndex(item => item.id === update.id);

products2[productIndex2] = {
    ...products2[productIndex2],
    ...update.changes
};

console.log('products2', products2);