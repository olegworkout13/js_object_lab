function Product(name) {
    this.name = name;
}

function Manufacturer(name){
    this.name = name;
}



mapManufacturerName = new Map();
mapCostName = new Map();
mapTimeName = new Map();
let arr = [new Product("tomate"), new Product("Reverseengineered"), new Product("Fresh"), new Product("Corporate")];

mapManufacturerName.set(new Manufacturer("miller"), arr[0]);
mapManufacturerName.set(new Manufacturer("miller"), arr[1]);
mapManufacturerName.set(new Manufacturer("miller"), arr[2]);
mapManufacturerName.set(new Manufacturer("miller"), arr[3]);

mapCostName.set(3033, arr[0]);
mapCostName.set(80044, arr[1]);
mapCostName.set(7438, arr[2]);
mapCostName.set(65472, arr[3]);


mapTimeName.set(12978, arr[0]);
mapTimeName.set(63437, arr[1]);
mapTimeName.set(51163, arr[2]);
mapTimeName.set(73578, arr[3]);

console.log(mapManufacturerName);
console.log(mapCostName);
console.log(mapTimeName);

// 2. вивести в об'єкт товар із найменшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}

let min = Infinity;
let name;

mapCostName.forEach((value, key) => {
    if (key < min) {
        min = key;
        name = value;
    }
});



let manufacturer;

mapManufacturerName.forEach((value, key) => {
    if(value == name){
        manufacturer = key;
    }
});


mapTimeName.forEach((value, key) => {
    if(value == name){
        time = key;
    }  
})


let obj1 = {};
obj1[name.name] = min + ' ' + manufacturer.name + ' ' + time;
console.log(obj1);

// 3. вивести в об'єкт товар із найменшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}


min = Infinity;

mapTimeName.forEach((value, key) => {
    if (key < min) {
        min = key;
        name = value;
    }
});




mapManufacturerName.forEach((value, key) => {
    if(value == name){
        manufacturer = key;
    }
});


mapCostName.forEach((value, key) => {
    if(value == name){
        cost = key;
    }  
})


let obj2 = {};
obj2[name.name] = cost + ' ' + manufacturer.name + ' ' + min;
console.log(obj2);


// 4. вивести в об'єкт товар із найбільшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}

min = 0;

mapCostName.forEach((value, key) => {
    if (key > min) {
        min = key;
        name = value;
    }
});




mapManufacturerName.forEach((value, key) => {
    if(value == name){
        manufacturer = key;
    }
});


mapTimeName.forEach((value, key) => {
    if(value == name){
        time = key;
    }  
})


let obj3 = {};
obj3[name.name] = min + ' ' + manufacturer.name + ' ' + time;
console.log(obj3);

// 5. вивести в об'єкт товар із найбільшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}


min = 0;

mapTimeName.forEach((value, key) => {
    if (key > min) {
        min = key;
        name = value;
    }
});




mapManufacturerName.forEach((value, key) => {
    if(value == name){
        manufacturer = key;
    }
});


mapCostName.forEach((value, key) => {
    if(value == name){
        cost = key;
    }  
})


let obj4 = {};
obj4[name.name] = cost + ' ' + manufacturer.name + ' ' + min;
console.log(obj4);
