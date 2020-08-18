// Задание № 1
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    const weaponsNames = weapons.map(item => item.name);
    return weaponsNames; 
}

function getCountReliableWeapons(durability) {
    return weapons.filter(item => item.durability > durability).length;
}

function hasReliableWeapons(durability) {
     return weapons.some(item => item.durability > durability);
}

function getReliableWeaponsNames(durability) {
    const durableNames = weapons.filter(item => item.durability > durability);
    return durableNames.map(item => item.name);
}

function getTotalDamage() {
    let sumAttack = 0;
    weapons.find(item => {
        sumAttack += item.attack;
    })
    return sumAttack;
}

function getValuestCountToSumValues(arr, sum) {
    let mySum = 0;

    mySum = arr.reduce((total, item) => {
        if (mySum < sum) {
            mySum = total + arr[item];        
        }
    }, 0);

    if (mySum < sum) {
        return arr.length;
    } else {
        return // количество итераций arr.reduce???
    } 
}

getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10);
getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20);
    

