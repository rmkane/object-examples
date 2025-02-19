#include "employee.h"
#include <stdlib.h>
#include <string.h>

Employee *create_employee(const char *name, float salary)
{
    Employee *emp = (Employee *)malloc(sizeof(Employee));
    if (!emp)
    {
        perror("Failed to allocate memory");
        exit(EXIT_FAILURE);
    }
    strncpy(emp->name, name, sizeof(emp->name) - 1);
    emp->name[sizeof(emp->name) - 1] = '\0'; // Ensure null termination
    emp->salary = salary;
    return emp;
}

void display_employee(const Employee *emp)
{
    printf("Name: %s, Salary: $%.2f\n", emp->name, emp->salary);
}

void free_employee(Employee *emp)
{
    free(emp);
}
