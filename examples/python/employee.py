#!/usr/bin/env python3


class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def __repr__(self):
        return "Name: %s, Salary: $%.2f" % (self.name, self.salary)

    def display_employee(self):
        print(self)
