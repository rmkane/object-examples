package main

import pkg "example.com/employee/pkg/employee"

// Main entry point of the program
func main() {
	emp1 := pkg.NewEmployee("Bob", 75_000)
	emp2 := pkg.NewEmployee("Joe", 50_000)

	emp1.DisplayEmployee()
	emp2.DisplayEmployee()
}
