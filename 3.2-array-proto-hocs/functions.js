// Задание № 1
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

const weaponsNames = [weapons[0].name, weapons[1].name, weapons[2].name, weapons[3].name, weapons[4].name, weapons[5].name];

const weaponsDurability = [weapons[0].durability, weapons[1].durability, weapons[2].durability, weapons[3].durability, weapons[4].durability, weapons[5].durability];


function getNames() {
    return weaponsNames;
}

function getCountReliableWeapons(durability) {
    const durableWeapons = weaponsDurability.filter(item => item > durability)
    return durableWeapons.length;
}

function hasReliableWeapons(durability) {
    let isDurable;
    weaponsDurability.map(item => {
        if (item > durability) {
            isDurable = true;
        }
    })
    return isDurable;
}

function getReliableWeaponsNames(durability) {
    let durableNames = [];
    weapons.map(item => {
        if (item.durability > durability) {
            durableNames.push(item.name);
        }
    })
    return durableNames;
}

function getTotalDamage() {
    let sumAttack = 0;
    weapons.find(item => {
        sumAttack += item.attack;
    })
    return sumAttack;
}

function getValuestCountToSumValues(arr, sum) {
    let mySum = [];
    arr.map(item => mySum.push(item));
    let toSum = 0;
    toSum = mySum.map(item => {
        if (toSum < sum) {
            toSum += item;
        }
    })

    if (toSum < sum) {
        return arr.length;
    } else {
        return //тут должно быть количество итераций... mySum.map
    }
}

getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10);
getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20);
    

// Задание № 2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum() {
    sleep(100);
    const args = Array.from(arguments);
    let sum = 0;
    for (item in args) {
        sum += item;
    }
    return sum;
  }

function compareArrays(arr1, arr2) {
    for (element in arr1, arr2) {
        if (arr1[element] === arr2[element] || (arr1.length === 0 && arr2.length === 0)) {
            return true;
        } else {
            return false;
        }
    }
}

