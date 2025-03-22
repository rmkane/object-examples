#ifndef EMPLOYEE_H
#define EMPLOYEE_H

#include <stdbool.h>

// Employee role enumeration
typedef enum {
    ROLE_MANAGER,
    ROLE_DEVELOPER
} EmployeeRole;

// String representations for roles
extern const char* const ROLE_STRINGS[];

// Employee structure
typedef struct {
    char given_name[64];
    char surname[64];
    double salary;
    EmployeeRole role;
} Employee;

// Constructor-like functions
Employee* employee_create(void);
Employee* employee_create_full(const char* given_name, const char* surname, 
                             double salary, EmployeeRole role);

// Destructor
void employee_destroy(Employee* employee);

// Setters (returns true if successful)
bool employee_set_given_name(Employee* employee, const char* given_name);
bool employee_set_surname(Employee* employee, const char* surname);
bool employee_set_salary(Employee* employee, double salary);
bool employee_set_role(Employee* employee, EmployeeRole role);

// Getters
const char* employee_get_given_name(const Employee* employee);
const char* employee_get_surname(const Employee* employee);
double employee_get_salary(const Employee* employee);
EmployeeRole employee_get_role(const Employee* employee);

// Utility functions
void employee_get_full_name(const Employee* employee, char* buffer, size_t buffer_size);
void employee_to_string(const Employee* employee, char* buffer, size_t buffer_size);

#endif /* EMPLOYEE_H */
