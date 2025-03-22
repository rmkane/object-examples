import { Employee, EmployeeImpl } from "./employee.ts";

/**
 * Main function to create and display employee information.
 */
function main() {
  let employees: Employee[] = [
    EmployeeImpl.NewEmployee({ givenName: "Bob", surname: "Smith", salary: 75_000.0 }),
    EmployeeImpl.NewEmployee({ givenName: "Alice", surname: "Jones", salary: 50_000.0 }),
  ];

  displayEmployees(employees);
}

function displayEmployees(employees: Employee[]) {
  employees.forEach(employee => {
    console.log(String(employee));
  });
}

main();
