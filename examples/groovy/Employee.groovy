class Employee {
	String name
	float salary

	Employee() {
		this('Unknown', 0.00)
	}

	Employee(String name, float salary) {
		this.name = name
		this.salary = salary
	}

	String toString() {
		sprintf 'Name: %s, Salary: $%.2f', [name, salary]
	}

	void displayEmployee() {
		println this
	}

	static void main(String... args) {
		def emp1 = new Employee('Bob', 75000.00)
		def emp2 = new Employee('Joe', 50000.00)
		emp1.displayEmployee()
		emp2.displayEmployee()
	}
}