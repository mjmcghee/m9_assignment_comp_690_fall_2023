async function init() { 
try {
    let response = await fetch("../data/employees.json")
    let data = await response.json()
    console.log(data)
    console.log(data.employees)
    console.log(data.employees[0].id)
    for (let employee of data.employees) {
        
    }
} catch (error) {
    console.log(`Error caught!`)
    console.log(error.message)
    }
}

// From Stack Exchange
// let url = "../data/employees.json"
// function getData(url, cb) {
//     fetch(url)
//       .then(response => response.json())
//       .then(result => cb(result));
//   }
// getData(url, (data) => console.log({ data }))
// From Stack Exchange
// async function init() {
//     let url = "../data/employees.json"
//     function getData(url, cb) {
//         fetch(url)
//         .then(response => response.json())
//         .then(result => cb(result))
//     }
//     // getData(url, (data) => console.log({ data }))
//     // getData(url, (data) => console.log( data ))
// }

// async function init() { 
//         // const response = await fetch("../data/employees.json")
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data.name)
//                 // for (let employee of data) {
//                 //     // document.body.innerHTML += `${employee.name}<br>${employee.position}<br><br>`
//                 //     console.log(employee.name)
//                 // }
//             })
//         // return employees
//             .catch( error => console.log(error.message) )
//     }

export default init