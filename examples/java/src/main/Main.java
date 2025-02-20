import employee.Employee;
import employee.EmployeeImpl;

public class Main {
    public static void main(String[] args) {
        Employee emp1 = new EmployeeImpl("Bob", 75000);
        Employee emp2 = new EmployeeImpl("Joe", 50000);

        emp1.displayEmployee();
        emp2.displayEmployee();

        System.exit(0);
    }
}
