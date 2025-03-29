import java.util.List;

import employee.Employee;
import employee.EmployeeImpl;
import employee.EmployeeRole;

// Main entry point for the Java application
public class Main {
    public static void main(String[] args) {
        Employee bob = EmployeeImpl.builder()
            .givenName("Bob")
            .surname("Smith")
            .salary(75000)
            .role(EmployeeRole.MANAGER)
            .build();

        Employee alice = EmployeeImpl.create(
            "Alice",
            "Jones",
            50000,
            EmployeeRole.DEVELOPER
        );

        List<Employee> employees = List.of(bob, alice);

        // Print the details of each employee
        for (Employee employee : employees) {
            System.out.println(employee);
        }
    }
}
