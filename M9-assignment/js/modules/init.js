export async function init() { 
// const init = async () => {
try {
    const response = await fetch('./employees.json')
    const employees = await response.json()
    for (let employee of employees) {
        document.body.innerHTML += `${employee.name}<br>${employee.position}<br><br>`
        console.log(employee.name)
    }
    return employees
} catch (error) {
    console.log(`Error caught`)
    console.log(error.message)
    }
}

// async function fetchUsers() {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/users')
// 	const users = await response.json()
// 	for (let user of users) {
// 		document.body.innerHTML += `${user.name}<br>${user.email}<br><br>`
// 	}
// }
// fetchUsers()

// init()

// export default init