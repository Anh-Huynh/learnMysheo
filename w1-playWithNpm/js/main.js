const moment = require ('moment')
const todayDate = new Date()

const myFormattedDate = moment(todayDate).format('LLLL')

console.log(myFormattedDate)
