#include <stdio.h>
#include <stdlib.h>
#include "employee.h"

// Helper macro to get the length of an array
#define ARRAY_LEN(arr) (sizeof(arr) / sizeof((arr)[0]))

/**
 * Display information for a collection of employees.
 * Uses the to_string() method of each employee to format the output.
 * 
 * @param employees Array of employee objects to display
 * @param count Number of employees in the array
 */
void display_employees(const Employee** employees, size_t count) {
    for (size_t i = 0; i < count; i++) {
        char buffer[256];
        employee_to_string(employees[i], buffer, sizeof(buffer));
        printf("%s\n", buffer);
    }
}

/**
 * Main function to create and display employee information.
 */
int main(void) {
    // Create first employee using builder-style pattern
    Employee* bob = employee_create();
    employee_set_given_name(bob, "Bob");
    employee_set_surname(bob, "Smith");
    employee_set_salary(bob, 75000.0);
    employee_set_role(bob, ROLE_MANAGER);

    // Create second employee using factory-style pattern
    Employee* alice = employee_create_full(
        "Alice",
        "Jones",
        50000.0,
        ROLE_DEVELOPER  // Default role
    );

    // Create and display array of employees
    const Employee* employees[] = {bob, alice};

    display_employees(employees, ARRAY_LEN(employees));

    // Clean up
    employee_destroy(bob);
    employee_destroy(alice);

    return EXIT_SUCCESS;
}
