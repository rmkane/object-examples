#ifndef EMPLOYEE_H
#define EMPLOYEE_H

#include <string>

class Employee
{
public:
    Employee(const std::string &name, float salary);
    void displayEmployee() const;

private:
    std::string name;
    float salary;
};

#endif // EMPLOYEE_H