// Задание № 1
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];



function getNames() {
    return weaponsNames = [weapons[0].name, weapons[1].name, weapons[2].name, weapons[3].name, weapons[4].name, weapons[5].name]
    }

function getCountReliableWeapons(durability) {
    const weaponsDurability = [weapons[0].durability, weapons[1].durability, weapons[2].durability, weapons[3].durability, weapons[4].durability, weapons[5].durability];
    let arrItem = [];
    weaponsDurability.map(item => {
        if (durability < item) {
        arrItem.push(item);
        }
    })
    return arrItem.length;
}


    
