use crate::utils::format_currency;
use std::fmt;

pub struct Employee {
    name: String,
    salary: f64,
}

impl Employee {
    // Constructor with arguments
    pub fn new(name: String, salary: f64) -> Employee {
        Employee { name, salary }
    }

    pub fn display_employee(&self) {
        println!("{}", self);
    }
}

impl fmt::Display for Employee {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let formatted_salary = format_currency(self.salary);
        write!(f, "Name: {}, Salary: {}", self.name, formatted_salary)
    }
}
