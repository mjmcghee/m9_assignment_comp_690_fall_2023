import {default as init} from './init.js'

let empData = await init()

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    let rowCount = 0
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let i = 0; i < Object.keys(empData.employees).length; i++) {
        tbody.innerHTML +=
        `
        <tr>
            <td>${empData.employees[i].id}</td>
            <td>${empData.employees[i].name}</td>
            <td>${empData.employees[i].ext}</td>
            <td><a href="mailto:${empData.employees[i].email}">${empData.employees[i].email}</a></td>
            <td>${empData.employees[i].department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
        empCount.value = `(${i + 1})`
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
}