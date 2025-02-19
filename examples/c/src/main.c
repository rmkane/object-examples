#include "employee.h"
#include <stdlib.h>

int main()
{
    Employee *emp1 = create_employee("Bob", 75000);
    Employee *emp2 = create_employee("Joe", 50000);

    display_employee(emp1);
    display_employee(emp2);

    free_employee(emp1);
    free_employee(emp2);

    return 0;
}
