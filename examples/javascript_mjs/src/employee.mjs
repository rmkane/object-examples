import { formatCurrency } from "./utils.mjs";

/**
 * Class representing an employee implementation.
 */
class EmployeeImpl {
  /**
   * Private constructor for Employee class.
   * @param {Object} [obj] - Optional employee properties object
   * @param {string} [obj.givenName] - The given name of the employee
   * @param {string} [obj.surname] - The surname of the employee
   * @param {number} [obj.salary] - The salary of the employee
   */
  constructor(obj) {
    this.givenName = obj?.givenName ?? "Unknown";
    this.surname = obj?.surname ?? "Unknown";
    this.salary = obj?.salary ?? 0.0;
  }

  /**
   * String representation of the employee.
   * @returns {string} - A string representation of the employee
   */
  toString() {
    const formattedSalary = formatCurrency(this.salary);
    return `Name: ${this.getFullName()}, Salary: ${formattedSalary}`;
  }

  /**
   * Get the full name of the employee.
   * @returns {string} - The full name of the employee
   */
  getFullName() {
    return `${this.givenName} ${this.surname}`;
  }
}

/**
 * Builder for creating Employee instances.
 */
EmployeeImpl.Builder = class {
  constructor() {
    this.givenName = "Unknown";
    this.surname = "Unknown";
    this.salary = 0.0;
  }

  /**
   * Set the given name.
   * @param {string} givenName - The given name to set
   * @returns {EmployeeImpl.Builder} - The builder instance for chaining
   */
  withGivenName(givenName) {
    this.givenName = givenName;
    return this;
  }

  /**
   * Set the surname.
   * @param {string} surname - The surname to set
   * @returns {EmployeeImpl.Builder} - The builder instance for chaining
   */
  withSurname(surname) {
    this.surname = surname;
    return this;
  }

  /**
   * Set the salary.
   * @param {number} salary - The salary to set
   * @returns {EmployeeImpl.Builder} - The builder instance for chaining
   */
  withSalary(salary) {
    this.salary = salary;
    return this;
  }

  /**
   * Build and return a new Employee instance.
   * @returns {EmployeeImpl} - A new Employee instance
   */
  build() {
    return new EmployeeImpl({
      givenName: this.givenName,
      surname: this.surname,
      salary: this.salary,
    });
  }
};

/**
 * Factory method to create a new Employee.
 * @param {Object} [props] - Optional employee properties
 * @returns {EmployeeImpl} - A new Employee instance
 */
EmployeeImpl.NewEmployee = (props) => {
  return new EmployeeImpl(props);
};

export { EmployeeImpl };
