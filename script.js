
//--------1. pobierz od użykownika liczbę i wyświetl mu czy jest parzysta czy nieparzysta-----------

let numberItem = prompt('please write a number','');

(numberItem%2==0)? console.log("it is paired number"): console.log("it is not paired number");

//--------2. pobierz od użytkownika wyrazy  (ciągi liter oddzielonych spacją) i wyświetl mu złączone je camel casem


let letterItem = prompt('please write a world','');

let camelCaseFunction = (world) =>console.log(world.toLowerCase().split(' ').join(''));

camelCaseFunction(letterItem);

//-------3. pobierz od użytkownika tablice liczb oddzielonych spacją i wyświetl posortowaną tablicę oddzieloną spacją (może być sortowanie bąbelkowe)

let numberRange = prompt('Please, write a range of numbers','');

let numberSortFunction = (number) => console.log(number.split(' ').sort((a,b) => (a-b)).join(' '));

numberSortFunction(numberRange);

//--------4.napisz funkcję, która przyjmuje wyrazy  (ciągi liter oddzielonych spacją) i wyświetla ile razy wystąpił dany wyraz zaczynając od najczęściej występującego słowa


let items = "mleko kasza mleko banan mleko kasza";
function amountCount(arrInputString){
let arrInput = arrInputString.split(' ');
let uniqueItem = new Set(arrInput);

let [...newArr] = uniqueItem;

let amount = [];
amount.length = newArr.length;
amount.fill(0);
let finalArr = [];

newArr.forEach((item, index)=> {
for (let i=0; i<=arrInput.length; i++){
      (item == arrInput[i])? amount[index]+=1: amount[index]+=0;
  }
});

for (let i=0; i<=(newArr.length-1); i+=1){
  finalArr.push(`${newArr[i]}(${amount[i]})`);
};

  console.log(finalArr.join(' '));
  
};
amountCount(items);
