const fs = require('fs')

//File printing
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary":2000}', 'utf-8', (err) => {
    if(err) console.log(err);
    console.log('The JSON file was successfully printed.')
})

// //File reading
// fs.readFile('employees.json', 'utf-8', (err, data) => {
//     if(err) console.log(err);
//     console.log(data);
//     console.log('The file was read successfully.')
// })

// //Data update
// fs.appendFile('employees.json', ',\n{"name":"Employees 2 Name", "salary":5000}', 'utf-8', (err) => {
//     if(err) console.log(err);
//     console.log('New data has been successfully added.')
// })

// //File deleting
// fs.unlink('employees.json', (err) => {
//     if(err) console.log(err);
//     console.log('File deleted.')
// })