import { Employee } from "./employee.ts";

/**
 * Main function to create and display employee information.
 */
function main() {
  let emp1 = new Employee({ name: "Bob", salary: 75_000.0 });
  let emp2 = new Employee({ name: "Joe", salary: 50_000.0 });

  emp1.displayEmployee();
  emp2.displayEmployee();
}

main();
