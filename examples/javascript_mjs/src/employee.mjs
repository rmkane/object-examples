import { formatCurrency } from "./utils.mjs";

/**
 * Employee role constants.
 * @readonly
 * @enum {string}
 */
const EmployeeRole = Object.freeze({
  Manager: "Manager",
  Developer: "Developer"
});

/**
 * @typedef {Object} EmployeeProps
 * @property {string} givenName - The given name of the employee
 * @property {string} surname - The surname of the employee
 * @property {number} salary - The salary of the employee
 * @property {keyof typeof EmployeeRole} role - The role of the employee
 */

/**
 * @interface
 * @extends {EmployeeProps}
 */
class Employee {
  #givenName;
  #surname;
  #salary;
  #role;

  /**
   * @returns {string}
   */
  get givenName() {
    return this.#givenName;
  }

  /**
   * @returns {string}
   */
  get surname() {
    return this.#surname;
  }

  /**
   * @returns {number}
   */
  get salary() {
    return this.#salary;
  }

  /**
   * @returns {string}
   */
  get role() {
    return this.#role;
  }

  /**
   * Private constructor for Employee class.
   * @param {Partial<EmployeeProps>} [obj] - Optional employee properties object
   */
  constructor(obj) {
    this.#givenName = obj?.givenName ?? "Unknown";
    this.#surname = obj?.surname ?? "Unknown";
    this.#salary = obj?.salary ?? 0.0;
    this.#role = obj?.role ?? EmployeeRole.Developer;
  }

  /**
   * String representation of the employee.
   * @returns {string} - A string representation of the employee
   */
  toString() {
    const formattedSalary = formatCurrency(this.#salary);
    return `${this.#role}: ${this.getFullName()} - ${formattedSalary}`;
  }

  /**
   * Get the full name of the employee.
   * @returns {string} - The full name of the employee
   */
  getFullName() {
    return `${this.#givenName} ${this.#surname}`;
  }

  /**
   * Builder for creating Employee instances.
   */
  static Builder = class {
    #givenName;
    #surname;
    #salary;
    #role;

    constructor() {
      this.#givenName = "Unknown";
      this.#surname = "Unknown";
      this.#salary = 0.0;
      this.#role = EmployeeRole.Developer;
    }

    /**
     * Set the given name.
     * @param {string} givenName - The given name to set
     * @returns {Employee.Builder} - The builder instance for chaining
     */
    withGivenName(givenName) {
      this.#givenName = givenName;
      return this;
    }

    /**
     * Set the surname.
     * @param {string} surname - The surname to set
     * @returns {Employee.Builder} - The builder instance for chaining
     */
    withSurname(surname) {
      this.#surname = surname;
      return this;
    }

    /**
     * Set the salary.
     * @param {number} salary - The salary to set
     * @returns {Employee.Builder} - The builder instance for chaining
     */
    withSalary(salary) {
      this.#salary = salary;
      return this;
    }

    /**
     * Set the role.
     * @param {keyof typeof EmployeeRole} role - The role to set
     * @returns {Employee.Builder} - The builder instance for chaining
     */
    withRole(role) {
      this.#role = role;
      return this;
    }

    /**
     * Build and return a new Employee instance.
     * @returns {Employee} - A new Employee instance
     */
    build() {
      return new Employee({
        givenName: this.#givenName,
        surname: this.#surname,
        salary: this.#salary,
        role: this.#role
      });
    }
  }

  /**
   * Factory method to create a new Employee.Builder instance.
   * @returns {Employee.Builder} - A new Employee.Builder instance
   */
  static builder() {
    return new Employee.Builder();
  }

  /**
   * Factory method to create a new Employee.
   * @param {Partial<EmployeeProps>} [props] - Optional employee properties
   * @returns {Employee} - A new Employee instance
   */
  static NewEmployee = (props) => {
    return new Employee(props);
  };
}

export { Employee, EmployeeRole };
