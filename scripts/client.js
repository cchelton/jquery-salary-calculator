const employees = [];

$(document).ready(init);

function init() {
  $(".employeeDetailsForm").on("submit", addEmployee);
  $(".theTable").on("click", ".js-delBtn", delEmployee);
}

function addEmployee(event) {
  event.preventDefault();
  const newEmployee = {
    firstName: $(".js-input-fName").val(),
    lastName: $(".js-input-lName").val(),
    ID: $(".js-input-ID").val(),
    title: $(".js-input-title").val(),
    salary: $(".js-input-salary").val()
  };
  employees.push(newEmployee);
  render();
}

function delEmployee() {
  // TODO: delete employee
}

function render() {
  $(".js-emptyThese").empty();
  for (let i; i < employees.length; i++) {
    //
  }
}
