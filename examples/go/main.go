package main

import "example.com/employee/pkg/employee"

// Main entry point of the program
func main() {
	employees := []employee.Employee{
		employee.NewEmployee("Alice", 100_000),
		employee.NewEmployee("Bob", 75_000),
		employee.NewEmployee("Charlie", 50_000),
	}

	for _, emp := range employees {
		emp.DisplayEmployee()
	}
}
