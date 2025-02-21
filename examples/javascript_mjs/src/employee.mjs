import { formatCurrency } from "./utils.mjs";

/**
 * Class representing an employee.
 */
class Employee {
  /**
   * Constructor for Employee class.
   *
   * @param {string} name - The name of the employee
   * @param {number} salary - The salary of the employee
   */
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  /**
   * String representation of the employee.
   *
   * @returns {string} - A string representation of the employee
   */
  toString() {
    return `Name: ${this.name}, Salary: ${formatCurrency(this.salary)}`;
  }

  /**
   * Display the employee information.
   */
  displayEmployee() {
    console.log(String(this));
  }
}

export { Employee };
