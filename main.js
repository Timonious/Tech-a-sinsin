// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];
//1a
const tvsStockMapper = inventory.map((stock) => {
    return stock.originalStock - stock.sold
});
const totalTvsInStock = () => {
    let allStock = 0
    for (let i = 0; i < inventory.length; i++) {
        allStock = allStock + tvsStockMapper[i];
    }
    return allStock
}
// 1b
const stockField = document.getElementById('current-stock');
stockField.innerText = `Totale huidige voorraad: \n${totalTvsInStock().toString()} stuks.`
//  2a
const tvTypeMapper = inventory.map((type) => {
    return type.type;
});
//  2b
const soldOut = inventory.filter((sold) => {
    return sold.originalStock - sold.sold === 0;
});
//  2c
const ambiLight = inventory.filter((ambi) => {
    return ambi.options.ambiLight;
});
//  2d (aka 2e)
const priceSort = inventory.sort((a, b) => a.price - b.price);
// 3a
const price = inventory.map((prijs) => {
    return prijs.price;
});
let totalRevenue = 0;
for (let i = 0; i < inventory.length; i++) {
    totalRevenue += tvsStockMapper[i] * price[i];
}
const target = document.getElementById('goal-revenue');
target.innerText = `Verkoopwaarde huidige voorraad: € ${totalRevenue.toString()},-`;
//3b(aka 6b)
const sold = inventory.map((verk) => {
    return verk.sold;
});
let totalRevenueSoFar = 0;
for (let i = 0; i < inventory.length; i++) {
    totalRevenueSoFar += sold[i] * price[i];
}
const made = document.getElementById('current-revenue');
made.innerText = `Verkoopwaarde verkochte voorraad: € ${totalRevenueSoFar.toString()},-`;

// 4
const tvOne = document.getElementById('tv1');
tvOne.innerText = `Tv typenummer 1: ${tvTypeMapper[0].toString()}.`;

const tvTwo = document.getElementById('tv2');
tvTwo.innerText = `Tv typenummer 2: ${tvTypeMapper[4].toString()}.`;

// 5a
const brandMapper = inventory.map((merk) => {
    return merk.brand;
});
const nameMapper = inventory.map((naam) => {
    return naam.name;
});
const tvNameStringer = (i) => {
    return `${brandMapper[i]} ${tvTypeMapper[i]} - ${nameMapper[i]}`;
}
// 5b
const tvPriceStringer = (i) => {
    return `€${price[i]},-`;
}
// 5c
const retardUnitCalculator = (inch) => {
    const cm = inch * 2.54;
    return Math.round(cm);
}
const screenSizeMapper = inventory.map((size) => {
    return size.availableSizes;
});
const screenSizeStringer = (i) => {
    for (let j = 0; j < screenSizeMapper[i].length; j++) {
        screenSizeMapper[i][j] = `${screenSizeMapper[i][j]} inch (${retardUnitCalculator(screenSizeMapper[i][j])} cm)`
    }
    return screenSizeMapper[i].join(' | ');
}
// 5d
// const infoTv = (i) => {
//   return `\n${tvNameStringer(i)} \n ${tvPriceStringer(i)} \n ${screenSizeStringer(i)}`
// }
// const highlightedTv = document.getElementById('one-tv-information');
// highlightedTv.innerText = infoTv(0)

// 5e
const allTvStringer = (objArray) => {
    let listOfTvs = ''
    for (let i = 0; i < objArray.length; i++) {
        listOfTvs += `\n${tvNameStringer(i)} \n ${tvPriceStringer(i)} \n ${screenSizeStringer(i)}\n`;
    }
    return listOfTvs;
}
const listOfAllTvs = document.getElementById('all-tv-information');
listOfAllTvs.innerText = allTvStringer(inventory)
// Bonusopdracht
const priceButton = document.getElementById('sort-price');
priceButton.addEventListener("click", () => {
    console.log(priceSort)
});
const ambiButton = document.getElementById('ambi');
ambiButton.addEventListener("click", () => {
    console.log(ambiLight)
});
const soldOutButton = document.getElementById('sold-out')
soldOutButton.addEventListener('click', () => {
    console.log(soldOut)
});