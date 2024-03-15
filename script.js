let inputData = [];
let TableBody = document.getElementById("tbody");
const tr = document.createElement("tr");
// const td = document.createElement("td");

const fillData = (paraData) => {
  let TableBody = document.getElementById("tbody");
  Array.isArray(paraData)
    ? paraData.forEach((ele, i, arr) => {
        //
        const id = Object.assign(document.createElement("td"), {
          className: "id",
          innerText: ele.id,
        });
        const name = Object.assign(document.createElement("td"), {
          className: "name",
          innerText: ele.name,
        });
        const phone = Object.assign(document.createElement("td"), {
          className: "phone",
          innerText: ele.phone,
        });
        const country = Object.assign(document.createElement("td"), {
          className: "country",
          innerText: ele.country,
        });
        const email = Object.assign(document.createElement("td"), {
          className: "email",
          innerText: ele.email,
        });

        //
        const row = document.createElement("tr");
        //
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(phone);
        row.appendChild(country);
        row.appendChild(email);
        //

        TableBody.append(row);
      })
    : null;
};

// const fetchData = async () => {
//   try {
//     let data = await fetch("./data.json");
//     inputData = await data.json();
//     fillData(inputData);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

const fetchData = () => {
  setTimeout(async () => {
    try {
      let data = await fetch("./data.json");
      inputData = await data.json();
      fillData(inputData);
    } catch (err) {
      console.log(err.message);
    }
  }, 1000);
};

fetchData();

const sortData = (event, sortBy) => {
  let type = event.target.parentElement.parentElement.className;

  if (sortBy == "ASCE") {
    new_data = inputData.sort((a, b) => {
      if (typeof a[type] == "number") {
        return a[type] - b[type];
      } else {
        return a[type].localeCompare(b[type]);
      }
    });
  } else {
    new_data = inputData.sort((a, b) => {
      if (typeof a[type] == "number") {
        return b[type] - a[type];
      } else {
        return b[type].localeCompare(a[type]);
      }
    });
  }
  document.getElementById("tbody").remove();
  let new_TableBody = Object.assign(document.createElement("tbody"), {
    id: "tbody",
  });
  let table = document.getElementById("data-table");
  table.appendChild(new_TableBody);
  fillData(new_data);
};
