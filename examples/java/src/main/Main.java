import employee.Employee;
import employee.EmployeeImpl;

public class Main {
    public static void main(String[] args) {
        Employee emp1 = new EmployeeImpl("Bob", 75_000);
        Employee emp2 = new EmployeeImpl("Joe", 50_000);

        emp1.displayEmployee();
        emp2.displayEmployee();
    }
}
