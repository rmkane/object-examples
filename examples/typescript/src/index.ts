import { Employee, EmployeeRole } from "./employee.ts";
import type { TEmployee } from "./employee.ts";

/**
 * Main function to create and display employee information.
 */
function main() {
  const bob = Employee.builder()
    .withGivenName("Bob")
    .withSurname("Smith")
    .withSalary(75_000)
    .withRole(EmployeeRole.Manager)
    .build();

  const alice = Employee.NewEmployee({
    givenName: "Alice",
    surname: "Jones",
    salary: 50_000.0
  });

  displayEmployees([bob, alice]);
}

/**
 * Displays information for a collection of employees.
 * Uses the toString() method of each employee to format the output.
 * 
 * @param employees - Array of employee objects to display
 */
function displayEmployees(employees: TEmployee[]) {
  employees.forEach(employee => {
    console.log(String(employee));
  });
}

main();
