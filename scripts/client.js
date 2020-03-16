let employees = [];

$(document).ready(init);

function init() {
  $(".employeeDetailsForm").on("submit", addEmployee);
  $(".theTable").on("click", ".js-delBtn", delEmployee);
}

function addEmployee(event) {
  event.preventDefault();
  if (checkIDMatch()) {
    alert("ID matches existing employee");
    return;
  }
  const newEmployee = {
    firstName: $(".js-input-fName").val(),
    lastName: $(".js-input-lName").val(),
    ID: parseInt($(".js-input-ID").val()),
    title: $(".js-input-title").val(),
    salary: parseInt($(".js-input-salary").val())
  };
  $(".js-input-fName").val("");
  $(".js-input-lName").val("");
  $(".js-input-ID").val("");
  $(".js-input-title").val("");
  $(".js-input-salary").val("");
  employees.push(newEmployee);
  render();
}

function delEmployee() {
  const i = $(this).data("i");
  employees.splice(i, 1);
  render();
}

function render() {
  $(".js-tableEmployeeSection").empty();
  let monthlyTotal = 0;
  let whiteGrey = true;
  sortByID();

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    monthlyTotal += employee.salary;
    if (whiteGrey) {
      wgClass = "white";
    } else {
      wgClass = "grey";
    }
    whiteGrey = !whiteGrey;
    $(".js-tableEmployeeSection").append(`
    <tr class="${wgClass}">
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.ID}</td>
      <td>${employee.title}</td>
      <td>$${employee.salary}</td>
      <td>
        <div class="text_align_center">
          <button class="btn js-delBtn" data-i=${i}>Delete</button>
        </div>
      </td>
    </tr>
    `);
  }
  $(".monthlyPaidOut").text(monthlyTotal);
}

function sortByID() {
  const sortedEmployees = JSON.parse(JSON.stringify(employees)); // need copy, not reference
  let hold = 0;
  for (let i = 0; i < sortedEmployees.length - 1; i++) {
    if (sortedEmployees[i].ID > sortedEmployees[i + 1].ID) {
      hold = sortedEmployees[i];
      sortedEmployees[i] = sortedEmployees[i + 1];
      sortedEmployees[i + 1] = hold;
    }
  }
  employees = JSON.parse(JSON.stringify(sortedEmployees));
}

function checkIDMatch() {
  const ID = parseInt($(".js-input-ID").val());
  for (let employee of employees) {
    if (ID === employee.ID) {
      return true;
    }
  }
  return false;
}
