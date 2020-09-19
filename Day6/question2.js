window.onload = function () {
  let initialbuses = [
    {
      name: "Thor",
      age: 1500,
      planet: "Asgard",
      height: "6.3",
    },
    {
      name: "Iron Man",
      age: 34,
      planet: "Earth",
      height: "5.10",
    },
    {
      name: "Captain America",
      age: 101,
      planet: "Earth",
      height: "6",
    },
  ];

  if (localStorage.getItem("buses") == null) {
    localStorage.setItem("buses", JSON.stringify(initialbuses));
  }
};
function display(bus_data = undefined) {
  let buses;
  let samplearray = "";
  if (bus_data == undefined) {
    buses = JSON.parse(localStorage.getItem("buses"));
  } else {
    buses = bus_data;
  }

  resbuses.forEach(function (bus, index) {
    let currentrow = `
      <tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.passengerCapacity}</td>
      <td><button onclick="delete_ele(${index})" class="del_btn">Delete</button>
      </td>
      </tr>`;
    samplearray += currentrow;
  });

  //   console.log(typeof(resbuses));
  document.getElementById("tablerows").innerHTML = samplearray;
}

display();

function insert(e) {
  e.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let dest = document.getElementById("dest").value;
  let number = document.getElementById("number").value;
  let passcap = document.getElementById("passcap").value;

  bus.name = name;
  bus.source = source;
  bus.destination = dest;
  bus.number = Number(number);
  bus.passengerCapacity = Number(passcap);

  let retbus = JSON.parse(localStorage.getItem("buses"));
  retbus.push(bus);
  localStorage.setItem("buses", JSON.stringify(retbus));

  let retbus1 = JSON.parse(localStorage.getItem("buses"));
  display(retbus1);

  return false;
}

display();

function search() {
  let ser_ele = document.getElementById("searching").value;

  let arrbus = JSON.parse(localStorage.getItem("buses"));

  let bus_arr = arrbus.filter(function (element) {
    if (element.source.indexOf(ser_ele) != -1) {
      return element.source.indexOf(ser_ele) != -1;
    } else if (element.destination.indexOf(ser_ele) != -1) {
      return element.destination.indexOf(ser_ele) != -1;
    }
  });
  display(bus_arr);
}

function delete_ele(index) {
  let rtbuses1 = JSON.parse(localStorage.getItem("buses"));
  rtbuses1.splice(index, 1);
  display(rtbuses1);
  localStorage.setItem("buses", JSON.stringify(rtbuses1));
}
