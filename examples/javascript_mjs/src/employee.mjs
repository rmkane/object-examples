class Employee {
  constructor(name, salary) {
    this.name = new String(name);
    this.salary = salary;
  }

  toString() {
    return `Name: ${this.name}, Salary: \$${this.salary}`;
  }

  displayEmployee() {
    console.log(String(this));
  }
}

export { Employee };
