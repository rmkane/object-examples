#!/usr/bin/env node

import { Employee } from "./employee.mjs";

function main() {
  var emp1 = new Employee("Bob", 75000);
  var emp2 = new Employee("Joe", 50000);

  emp1.displayEmployee();
  emp2.displayEmployee();
}

main();
