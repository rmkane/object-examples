//import 'package:intl/intl.dart';

//final CurrencyFormatter = new NumberFormat("#,##0.00", "en_US");

class Employee {
  String name;
  double salary;

  Employee(this.name, this.salary);

  String toString() {
    return "Name: $name, Salary: \$$salary"; // CurrencyFormatter.format(this.salary)
  }

  void displayEmployee() {
    print(this);
  }
}

void main() {
  Employee emp1 = new Employee("Bob", 75000.00);
  Employee emp2 = new Employee("Joe", 50000.00);
  emp1.displayEmployee();
  emp2.displayEmployee();
}
