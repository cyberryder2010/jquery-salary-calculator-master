$(document).ready(init);

const employeeList = [];

function init() {
  // create events to listen for
  $(".js-empInfo-form").on("submit", submitEmpInfo);
  $(".js-table-body").on("click", ".js-btn-delete", delEmployee);
}

function submitEmpInfo(event) {
  event.preventDefault();
  console.log("Employee Info");

  const empInfo = {
    First: $(".js-input-fName").val(),
    Last: $(".js-input-lname").val(),
    Id: $(".js-input-idNum").val(),
    JobTitle: $(".js-input-jobTitle").val(),
    AnnSalary: parseFloat($(".js-input-annSalary").val())
  };
  employeeList.push(empInfo);
  console.log("List of Employees", employeeList);
  render();
}
function render() {
  $(".js-table-body").empty();
  for (let i = 0; i < employeeList.length; i++) {
    const individualEmp = employeeList[i];
    totalMonthlySalary = individualEmp.AnnSalary / 12;

    $(".js-table-body").append(`<tr>
        <td>${individualEmp.First}</td>
        <td>${individualEmp.Last}</td>
        <td>${individualEmp.Id}</td>
        <td>${individualEmp.JobTitle}</td>
        <td>${individualEmp.AnnSalary}</td>
        <td><button class='js-btn-delete'>Delete</button></td>
    </tr>`);
  }
  //total monthly salary for all employees
  $(".js-total-monthly-salary").text(`$${totalMonthlySalary}`);
  console.log("Total", totalMonthlySalary);
}
function delEmployee() {
  console.log("Delete", this);
  $(this)
    .parent()
    .parent()
    .remove();
}
