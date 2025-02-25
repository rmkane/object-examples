import { Employee, EmployeeImpl } from "./employee.ts";

/**
 * Main function to create and display employee information.
 */
function main() {
  let employees: Employee[] = [
    new EmployeeImpl({ name: "Bob", salary: 75_000.0 }),
    new EmployeeImpl({ name: "Joe", salary: 50_000.0 }),
  ];

  displayEmployees(employees);
}

function displayEmployees(employees: Employee[]) {
  employees.forEach((employee) => {
    console.log(employee.toString());
  });
}

main();
