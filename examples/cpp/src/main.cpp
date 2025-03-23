#include <iostream>
#include <vector>
#include "employee.hpp"

/**
 * Display information for a collection of employees.
 * Uses the to_string() method of each employee to format the output.
 * 
 * @param employees Vector of employee objects to display
 */
void display_employees(const std::vector<Employee>& employees) {
    for (const auto& employee : employees) {
        std::cout << employee.to_string() << '\n';
    }
}

/**
 * Main function to create and display employee information.
 */
int main() {
    // Create first employee using builder pattern
    auto bob = Employee::builder()
        .given_name("Bob")
        .surname("Smith")
        .salary(75'000.0)
        .role(EmployeeRole::Manager)
        .build();

    // Create second employee using factory method
    auto alice = Employee::NewEmployee(
        "Alice",
        "Jones",
        50'000.0,
        EmployeeRole::Developer
    );

    // Create and display vector of employees
    std::vector<Employee> employees{bob, alice};
    display_employees(employees);
}