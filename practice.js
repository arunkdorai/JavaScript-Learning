let employees = [
  { empName: "Arun", salary: 150000 },
  { empName: "Jamie", salary: 100000 },
  { empName: "Philip", salary: 120000 },
];

// filter method

let filterData = employees.filter((val, index, array) => {
  console.log(index);
  return val.salary > 110000;
});
// let filterData = employees.filter(val => val.salary>110000).fill({id:1, name1:"xyz"})

console.log(filterData);

// find

let filterDataByFind = employees.find((val, index, array) => {
  console.log(index)
  return val.salary > 100000;
});

console.log(filterDataByFind);