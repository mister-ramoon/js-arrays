const numbers = [1,2,3,4,5,6,7,8,9,10];

const rta = numbers.some(item => item % 2 === 0);
console.log('rta', rta);

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
]

const rta2 = orders.some(item => item.delivered);
console.log('rta2', rta2);

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10, 0),
        endDate: new Date(2021, 1, 1, 11, 0),
        title: 'Cita de trabajo'
    },
    {
        startDate: new Date(2021, 1, 1, 15, 0),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: 'Cita con mi jefe'
    },
    {
        startDate: new Date(2021, 1, 1, 20, 0),
        endDate: new Date(2021, 1, 1, 21, 0),
        title: 'Cena'
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8, 0),
    endDate: new Date(2021, 1, 1, 9, 30),
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverLap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate }
        )
    });
};

console.log('isOverLap', isOverLap(newAppointment));