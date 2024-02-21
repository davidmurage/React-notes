const vehicles = ['Motorcycle', 'Bus', 'Car'];

const formatter1 = new Intl.ListFormat('en');
console.log(formatter1.format(vehicles));
// output: 'Motocycle, Bus, and Car'

const formatter2 = new Intl.ListFormat('en', {style: 'short',});
console.log(formatter2.format(vehicles));
//output: Motorcycle, Bus, & Car

const formatter3 = new Intl.ListFormat('en', {
    style: 'short',
    type: 'disjunction'
});
console.log(formatter3.format(vehicles));
//output: Motorcycle, Bus, or Car