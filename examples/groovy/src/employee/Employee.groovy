package employee

import groovy.transform.CompileStatic
import groovy.transform.ToString
import groovy.transform.TupleConstructor

@CompileStatic
@ToString(includeNames=true, includePackage=false)
class Employee implements IEmployee {
    final String givenName
    final String surname
    final float salary
    final EmployeeRole role

    private Employee(Builder builder) {
        this.givenName = builder.givenName
        this.surname = builder.surname
        this.salary = builder.salary
        this.role = builder.role
    }

    String getFullName() {
        "$givenName $surname"
    }

    String toString() {
        "${role}: ${fullName} - ${formatSalary()}"
    }

    private String formatSalary() {
        String.format('$%,.2f', salary)
    }

    // Static factory methods
    static Employee create(String givenName, String surname, float salary, EmployeeRole role) {
        builder()
            .givenName(givenName)
            .surname(surname)
            .salary(salary)
            .role(role)
            .build()
    }

    static Builder builder() {
        new Builder()
    }

    // Builder - Groovy style with named params and null-safe operators
    static class Builder {
        String givenName = 'Unknown'
        String surname = 'Unknown'
        float salary = 0.0
        EmployeeRole role = EmployeeRole.DEVELOPER

        Builder givenName(String givenName) {
            this.givenName = givenName ?: this.givenName
            this
        }

        Builder surname(String surname) {
            this.surname = surname ?: this.surname
            this
        }

        Builder salary(float salary) {
            this.salary = salary ?: this.salary
            this
        }

        Builder role(EmployeeRole role) {
            this.role = role ?: this.role
            this
        }

        Employee build() {
            new Employee(this)
        }
    }
} 