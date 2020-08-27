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
    

