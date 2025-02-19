interface Employee {
	public String getName();

	public float getSalary();

	public void displayEmployee();
}

class EmployeeImpl extends Object implements Employee {
	private String name;
	private float salary;

	@Override
	public String getName() {
		return this.name;
	}

	protected void setName(String name) {
		this.name = name;
	}

	@Override
	public float getSalary() {
		return this.salary;
	}

	protected void setSalary(float salary) {
		this.salary = salary;
	}

	public EmployeeImpl(String name, float salary) {
		setName(name);
		setSalary(salary);
	}

	@Override
	public String toString() {
		return String.format("Name: %s, Salary: $%.2f", getName(), getSalary());
	}

	@Override
	public void displayEmployee() {
		System.out.println(this);
	}
}

class Main {
	public static void main(String[] args) {
		Employee emp1 = new EmployeeImpl("Bob", 75000);
		Employee emp2 = new EmployeeImpl("Joe", 50000);
		emp1.displayEmployee();
		emp2.displayEmployee();
		System.exit(0);
	}
}