#!/usr/bin/env python3

from dataclasses import dataclass
from enum import Enum


class EmployeeRole(str, Enum):
    """Employee role enumeration."""

    MANAGER = "Manager"
    DEVELOPER = "Developer"


@dataclass
class EmployeeProps:
    """Properties for an Employee."""

    given_name: str
    surname: str
    salary: float
    role: EmployeeRole


class Employee:
    """Class representing an employee."""

    def __init__(
        self,
        *,
        given_name: str = "Unknown",
        surname: str = "Unknown",
        salary: float = 0.0,
        role: EmployeeRole = EmployeeRole.DEVELOPER,
    ) -> None:
        """
        Initialize an Employee.

        Args:
            given_name: The employee's given name
            surname: The employee's surname
            salary: The employee's salary
            role: The employee's role
        """
        self._given_name: str = given_name
        self._surname: str = surname
        self._salary: float = salary
        self._role: EmployeeRole = role

    @property
    def given_name(self) -> str:
        """Get the employee's given name."""
        return self._given_name

    @property
    def surname(self) -> str:
        """Get the employee's surname."""
        return self._surname

    @property
    def salary(self) -> float:
        """Get the employee's salary."""
        return self._salary

    @property
    def role(self) -> EmployeeRole:
        """Get the employee's role."""
        return self._role

    def get_full_name(self) -> str:
        """Get the employee's full name."""
        return f"{self._given_name} {self._surname}"

    def __str__(self) -> str:
        """String representation of the employee."""
        formatted_salary = f"${self._salary:,.2f}"
        return f"{self._role.value}: {self.get_full_name()} - {formatted_salary}"

    @classmethod
    def create(cls, **kwargs) -> "Employee":
        """Factory method to create a new Employee instance."""
        return cls(**kwargs)
