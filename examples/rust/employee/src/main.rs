mod employee;
mod utils;

use crate::employee::Employee;

fn main() {
    // Create a new employees
    let emp1 = Employee::new("Bob".to_string(), 75_000.0);
    let emp2 = Employee::new("Joe".to_string(), 50_000.0);

    // Display the employee information
    emp1.display_employee();
    emp2.display_employee();
}
