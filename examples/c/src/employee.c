#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "employee.h"

// String representations for roles
const char* const ROLE_STRINGS[] = {
    "Manager",
    "Developer"
};

// Default values
static const char* const DEFAULT_NAME = "Unknown";
static const double DEFAULT_SALARY = 0.0;
static const EmployeeRole DEFAULT_ROLE = ROLE_DEVELOPER;

// Constructor-like functions
Employee* employee_create(void) {
    Employee* employee = malloc(sizeof(Employee));
    if (employee) {
        strncpy(employee->given_name, DEFAULT_NAME, sizeof(employee->given_name) - 1);
        strncpy(employee->surname, DEFAULT_NAME, sizeof(employee->surname) - 1);
        employee->salary = DEFAULT_SALARY;
        employee->role = DEFAULT_ROLE;
        
        // Ensure null termination
        employee->given_name[sizeof(employee->given_name) - 1] = '\0';
        employee->surname[sizeof(employee->surname) - 1] = '\0';
    }
    return employee;
}

Employee* employee_create_full(const char* given_name, const char* surname, 
                             double salary, EmployeeRole role) {
    Employee* employee = malloc(sizeof(Employee));
    if (employee) {
        strncpy(employee->given_name, given_name, sizeof(employee->given_name) - 1);
        strncpy(employee->surname, surname, sizeof(employee->surname) - 1);
        employee->salary = salary;
        employee->role = role;
        
        // Ensure null termination
        employee->given_name[sizeof(employee->given_name) - 1] = '\0';
        employee->surname[sizeof(employee->surname) - 1] = '\0';
    }
    return employee;
}

// Destructor
void employee_destroy(Employee* employee) {
    free(employee);
}

// Setters
bool employee_set_given_name(Employee* employee, const char* given_name) {
    if (!employee || !given_name) return false;
    strncpy(employee->given_name, given_name, sizeof(employee->given_name) - 1);
    employee->given_name[sizeof(employee->given_name) - 1] = '\0';
    return true;
}

bool employee_set_surname(Employee* employee, const char* surname) {
    if (!employee || !surname) return false;
    strncpy(employee->surname, surname, sizeof(employee->surname) - 1);
    employee->surname[sizeof(employee->surname) - 1] = '\0';
    return true;
}

bool employee_set_salary(Employee* employee, double salary) {
    if (!employee) return false;
    employee->salary = salary;
    return true;
}

bool employee_set_role(Employee* employee, EmployeeRole role) {
    if (!employee || role < ROLE_MANAGER || role > ROLE_DEVELOPER) return false;
    employee->role = role;
    return true;
}

// Getters
const char* employee_get_given_name(const Employee* employee) {
    return employee ? employee->given_name : NULL;
}

const char* employee_get_surname(const Employee* employee) {
    return employee ? employee->surname : NULL;
}

double employee_get_salary(const Employee* employee) {
    return employee ? employee->salary : 0.0;
}

EmployeeRole employee_get_role(const Employee* employee) {
    return employee ? employee->role : DEFAULT_ROLE;
}

// Utility functions
void employee_get_full_name(const Employee* employee, char* buffer, size_t buffer_size) {
    if (!employee || !buffer || buffer_size == 0) return;
    snprintf(buffer, buffer_size, "%s %s", 
             employee->given_name, employee->surname);
}

void employee_to_string(const Employee* employee, char* buffer, size_t buffer_size) {
    if (!employee || !buffer || buffer_size == 0) return;
    char full_name[128];
    employee_get_full_name(employee, full_name, sizeof(full_name));
    snprintf(buffer, buffer_size, "%s: %s - $%.2f",
             ROLE_STRINGS[employee->role], full_name, employee->salary);
}
