const dayInMonth = (month, year) => {
    const yearBis = year%4 === 0

    const months = {
        janvier: 31, 
        fevrier: yearBis ? 29: 28, 
        mars: 31,
        avril: 30,
        mai: 31,
        juin: 30,
        juillet: 31,
        aout: 31,
        septempbre: 30,
        octobre: 31,
        novembre: 30,
        decembre: 31
    }
        return months[month]
}
console.log(dayInMonth("fevrier",2016))


