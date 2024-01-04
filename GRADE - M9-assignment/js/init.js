async function init() {
try {
    let response = await fetch("../data/employees.json")
    let data = await response.json()
    return data
} catch (error) {
    console.log(`Error caught!`)
    console.log(error.message)
    }
}

export default init