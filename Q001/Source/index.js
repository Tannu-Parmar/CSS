import axios from "axios"
import fs from "fs"


let data1 = await axios.get('https://res.cloudinary.com/des3si8bs/raw/upload/v1654770778/attendance/attandance_alc65n.JSON')

fs.writeFileSync("./data.json", JSON.stringify(data1.data))



const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
// console.log(data)

// 1. Each User Name has took how many leaves.

// const data2 = data.map(e => {
//     return {
//         user: e.EmployeeName,
//         leave: e.LeaveDays
//     }
// })

// console.log(data2)


//2. Find out the users who took more than 5 leaves

// const data3 = data.filter(e => {
//     return e.LeaveDays > 5
// })

// console.log(data3)


//3. Each day a employees needs to work for 8.5 hours. find out whose totalworkingday*8.5=TotalProductiveTime

// const data4 = data.filter((e) => {
//     const time = e.TotalProductiveTime.split(":").join(".")
//     return (e.TotalWorkingDays * 8.5 == Number(time))
// })
// console.log(data4)


//4. Find out the experience of each employee

// const data5 = data.map(e => {
//     return {
//         name: e.EmployeeName,
//         experience: Math.floor((Date.now() - new Date(e.JoinDate)) / 31536000000)
//     }
// })

// console.log(data5)


//5. Find out the user who has not took any leave

// const data6 = data.filter(e => e.LeaveDays == 0)
// console.log(data6)

