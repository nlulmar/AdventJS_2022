function countHours(year, holidays) {
    const countDays = holidays
    .map(date=> new Date(`${date}/${year}`).getDay())
    .filter(day => day!==0 && day!==6)
    .length
    return countDays * 2
  }

console.log(countHours(2022,['01/06', '04/01', '12/25', '12/17']))