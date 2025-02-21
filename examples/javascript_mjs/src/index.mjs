#!/usr/bin/env node

import { Employee } from "./employee.mjs";

/**
 * Main function to create and display employee information.
 */
function main() {
  let emp1 = new Employee("Bob", 75_000.0);
  let emp2 = new Employee("Joe", 50_000.0);

  emp1.displayEmployee();
  emp2.displayEmployee();
}

// Execute the main function
main();
