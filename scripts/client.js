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
    salary: parseInt($(".js-input-salary").val())
  };
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
