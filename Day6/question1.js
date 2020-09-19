let employees = [
  {
    name: "Ross",
    age: 40,
    city: "New York",
    salary: 50000,
  },
  {
    name: "Monica",
    age: 35,
    city: "New York",
    salary: 45000,
  },
  {
    name: "Chandler",
    age: 40,
    city: "Canada",
    salary: 100000,
  },
  {
    name: "Joey",
    age: 30,
    city: "London",
    salary: 20000,
  },
];

function display(employees) {
  let employee_data = "";
  let n = 1;

  employees.forEach(function (element, index) {
    let presetrow = `<tr>
                <td>${n}</td>
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.city}</td>
                <td>${element.salary}</td>
                <td><button onclick="delete_ele(${index})" class="del_btn">Delete</button></td>`;

    employee_data += presetrow;

    n++;
  });
  document.getElementById("tablerows").innerHTML = employee_data;
}

function insert(e) {
  e.preventDefault();
  let employee = {};
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;
  let salary = document.getElementById("salary").value;
  employee.name = name;
  employee.age = Number(age);
  employees.city = city;
  employees.salary = Number(salary);
  console.log(salary);

  employees.push(employee);
  display(employees);
  return false;
}

display(employees);

function search() {
  let ser_ele = document.getElementById("searching").value;
  let ser_res_arr = employees.filter(function (employees) {
    if (employees.name.indexOf(ser_ele) != -1) {
      return employees.name.toLowerCase().indexOf(ser_ele.toLowerCase()) != -1;
    } else if (employees.city.indexOf(ser_ele) != -1) {
      return employees.city.toLowerCase().indexOf(ser_ele.toLowerCase()) != -1;
    }
  });

  display(ser_res_arr);
}

function delete_ele(index) {
  console.log(index);
  employees.splice(index, 1);
  display(employees);
}
