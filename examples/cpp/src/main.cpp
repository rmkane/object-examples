#include "employee.h"
#include <iostream>

int main()
{
    Employee emp1("Bob", 75000);
    Employee emp2("Joe", 50000);

    emp1.displayEmployee();
    emp2.displayEmployee();

    return 0;
}