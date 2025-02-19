#!/usr/bin/env python3


class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def __repr__(self):
        return f"Name: {self.name}, Salary: ${self.salary:.2f}"

    def display_employee(self):
        print(self)
