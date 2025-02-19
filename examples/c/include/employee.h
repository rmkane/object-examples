#ifndef EMPLOYEE_H
#define EMPLOYEE_H

#include <stdio.h>

typedef struct
{
    char name[50];
    float salary;
} Employee;

Employee *create_employee(const char *name, float salary);
void display_employee(const Employee *emp);
void free_employee(Employee *emp);

#endif // EMPLOYEE_H
