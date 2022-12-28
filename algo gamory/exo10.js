const dayInYear = year => year%4 === 0 ? 366 : 365


// const yearBis =  year%4 === 0 

    // return yearBis ? 366 : 365 

console.log(dayInYear(2022))