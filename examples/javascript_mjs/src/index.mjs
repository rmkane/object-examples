#!/usr/bin/env node

import { Employee, EmployeeRole } from "./employee.mjs";

/**
 * Main function to create and display employee information using different creation methods.
 */
function main() {
  // Create employees using the Builder pattern
  const bob = Employee.builder()
    .withGivenName("Bob")
    .withSurname("Smith")
    .withSalary(75_000.0)
    .withRole(EmployeeRole.Manager)
    .build();

  // Create employees using the factory method
  const alice = Employee.NewEmployee({
    givenName: "Alice",
    surname: "Jones",
    salary: 50_000.0,
  });

  displayEmployees([bob, alice]);
}

/**
 * Displays employee information.
 * @param {Employee[]} employees - An array of employee objects.
 */
function displayEmployees(employees) {
  employees.forEach(employee => {
    console.log(String(employee));
  });
}

// Execute the main function
main();
