package employee;

import utils.FormatUtils;

public class EmployeeImpl implements Employee {
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
        String formattedSalary = FormatUtils.formatCurrency(salary);
        return String.format("Name: %s, Salary: %s", getName(), formattedSalary);
    }

    @Override
    public void displayEmployee() {
        System.out.println(this);
    }
}
