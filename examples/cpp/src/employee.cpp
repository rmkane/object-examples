#include "employee.h"
#include <iostream>

Employee::Employee(const std::string &name, float salary) : name(name), salary(salary) {}

void Employee::displayEmployee() const
{
    std::cout << "Name: " << name << ", Salary: $" << salary << std::endl;
}