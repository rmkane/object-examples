class Employee {
  constructor(name, salary) {
    this.name = new String(name);
    this.salary = salary;
  }
  toString() {
  	return `Name: ${this.name}, Salary: \$${this.salary}`;
  }
  displayEmployee() {
    console.log(this.toString());
  }
}

function main() {
  var emp1 = new Employee("Bob", 75000);
  var emp2 = new Employee("Joe", 50000);
  emp1.displayEmployee();
  emp2.displayEmployee();
}

main();
