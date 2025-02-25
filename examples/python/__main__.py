#!/usr/bin/env python3

import sys
from employee import Employee


# Main entry point for the script
def main():
    emp1 = Employee("Bob", 75000)
    emp2 = Employee("Joe", 50000)
    emp1.display_employee()
    emp2.display_employee()
    sys.exit(0)


if __name__ == "__main__":
    main()
