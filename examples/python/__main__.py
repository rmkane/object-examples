#!/usr/bin/env python3

from employee import Employee, EmployeeRole
from typing import List


def main() -> None:
    """Main function to create and display employee information."""
    bob = Employee(
        given_name="Bob",
        surname="Smith",
        salary=85_000.0,
        role=EmployeeRole.MANAGER,
    )

    alice = Employee.create(given_name="Alice", surname="Jones", salary=70_000.0)

    display_employees([bob, alice])


def display_employees(employees: list[Employee]) -> None:
    """Display information for a collection of employees."""
    for employee in employees:
        print(str(employee))


if __name__ == "__main__":
    main()
