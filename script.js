
// zad 1
function task1() { ///pobierz od użykownika liczbę i wyświetl mu czy jest parzysta czy nieparzysta

let numberItem = prompt('please write a number','');

(numberItem%2==0)? console.log("it is paired number"): console.log("it is not paired number");
}

task1()

// zad 2  

function task2() {  ///pobierz od użytkownika wyrazy  (ciągi liter oddzielonych spacją) i wyświetl mu złączone je camel casem
      
let letterItem = prompt('please write a world','');
let camelCaseFunction = (world) => console.log(world.toLowerCase().split(' ').join(''));
      
camelCaseFunction(letterItem);
}
task2()

// zad 3

function task3() {  ///pobierz od użytkownika tablice liczb oddzielonych spacją i wyświetl posortowaną tablicę oddzieloną spacją (może być sortowanie bąbelkowe)
      
let numberRange = prompt('Please, write a range of numbers','');
let numberSortFunction = (number) => console.log(number.split(' ').sort((a,b) => (a-b)).join(' '));

numberSortFunction(numberRange);

//zad 4
     

let items = "mleko kasza mleko banan mleko kasza";
function task4(arrInputString){// napisz funkcję, która przyjmuje wyrazy  (ciągi liter oddzielonych spacją) i wyświetla ile razy wystąpił dany wyraz zaczynając od najczęściej występującego słowa

let arrInput = arrInputString.split(' ');
let uniqueItem = new Set(arrInput);
let [...newArr] = uniqueItem;
let occurrences = [];
occurrences.length = newArr.length;
occurrences.fill(0);
let finalArr = [];

newArr.forEach((item, index) => {
      
for (let i=0; i<=arrInput.length; i++){
      (item == arrInput[i])? occurrences[index]+=1: occurrences[index]+=0;
  }
});

for (let i=0; i<=(newArr.length-1); i+=1){
  finalArr.push(`${newArr[i]}(${occurrences[i]})`);
};

  console.log(finalArr.join(' '));
  
};
task4(items);
