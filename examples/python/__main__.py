#!/usr/bin/env python3

import sys
from employee import Employee


# Main entry point for the script
def main():
    employees = [
        Employee("Alice", 60_000),
        Employee("Bob", 75_000),
        Employee("Charlie", 50_000),
    ]

    for employee in employees:
        employee.display_employee()

    sys.exit(0)


if __name__ == "__main__":
    main()
