import java.util.List;

import employee.Employee;
import employee.EmployeeImpl;

// Main entry point for the Java application
public class Main {
    public static void main(String[] args) {
        List<Employee> employees = List.of(
                new EmployeeImpl("Alice", 100_000),
                new EmployeeImpl("Bob", 75_000),
                new EmployeeImpl("Charlie", 50_000));

        // Print the details of each employee
        for (Employee employee : employees) {
            employee.displayEmployee();
        }
    }
}
