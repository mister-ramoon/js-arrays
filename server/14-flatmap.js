const users = [
    { name: 'John', age: 34, hobbies: ['swimming', 'music'] },
    { name: 'Amy', age: 20, hobbies: ['hiking', 'music'] },
    { name: 'sam', age: 30, hobbies: ['swimming', 'music'] },
]

const rta = users.map(user => user.hobbies).flat();
const rta1 = users.flatMap(user => user.hobbies);

console.log('rta', rta);
console.log('rta1', rta1);

const calendars = {
    srimaryCalendar : [
        {
            startDate: '2020-01-01',
            endDate: '2020-01-02',
            title: 'Cita 1'
        },
        {
            startDate: '2020-01-03',
            endDate: '2020-01-04',
            title: 'Cita 2'
        }
    ],
    secondaryCalendar : [
        {
            startDate: '2020-01-05',
            endDate: '2020-01-06',
            title: 'Cita 3'
        },
        {
            startDate: '2020-01-07',
            endDate: '2020-01-08',
            title: 'Cita 4'
        }
    ],
}

const starDateArray = Object.values(calendars).flatMap(calendar => calendar.map(event => event.startDate));
console.log('starDateArray', starDateArray);