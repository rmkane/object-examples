#!/usr/bin/env node

import { EmployeeImpl } from "./employee.mjs";

/**
 * Main function to create and display employee information using different creation methods.
 */
function main() {
  // Create employees using the Builder pattern
  const bob = new EmployeeImpl.Builder()
    .withGivenName("Bob")
    .withSurname("Smith")
    .withSalary(75_000.0)
    .build();

  // Create employees using the factory method
  const alice = EmployeeImpl.NewEmployee({
    givenName: "Alice",
    surname: "Jones",
    salary: 50_000.0
  });

  displayEmployees([bob, alice]);
}

function displayEmployees(employees) {
  employees.forEach(employee => {
    console.log(String(employee));
  });
}

// Execute the main function
main();
