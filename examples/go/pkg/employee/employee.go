package employee

import (
	"fmt"

	"example.com/employee/pkg/utils"
)

type Employee struct {
	Name   string
	Salary float32
}

func (e Employee) String() string {
	formattedSalary := utils.FormatCurrency(float64(e.Salary))
	return fmt.Sprintf("Name: %s, Salary: %s", e.Name, formattedSalary)
}

func (e Employee) DisplayEmployee() {
	fmt.Println(e)
}

func NewEmployee(name string, salary float32) Employee {
	return Employee{
		Name:   name,
		Salary: salary,
	}
}
