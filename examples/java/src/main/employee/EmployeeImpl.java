package employee;

import utils.FormatUtils;

public class EmployeeImpl implements Employee {
    private final String givenName;
    private final String surname;
    private final float salary;
    private final EmployeeRole role;

    private EmployeeImpl(Builder builder) {
        this.givenName = builder.givenName;
        this.surname = builder.surname;
        this.salary = builder.salary;
        this.role = builder.role;
    }

    @Override
    public String getGivenName() {
        return this.givenName;
    }

    @Override
    public String getSurname() {
        return this.surname;
    }

    @Override
    public float getSalary() {
        return this.salary;
    }

    @Override
    public EmployeeRole getRole() {
        return this.role;
    }

    @Override
    public String getFullName() {
        return String.format("%s %s", this.givenName, this.surname);
    }

    @Override
    public String toString() {
        return String.format("%s: %s - %s", 
            this.role, 
            this.getFullName(), 
            FormatUtils.formatCurrency(this.salary));
    }

    // Static factory methods
    public static Employee create(String givenName, String surname, float salary, EmployeeRole role) {
        return new Builder()
            .givenName(givenName)
            .surname(surname)
            .salary(salary)
            .role(role)
            .build();
    }

    public static Builder builder() {
        return new Builder();
    }

    // Builder class
    public static class Builder {
        private String givenName = "Unknown";
        private String surname = "Unknown";
        private float salary = 0.0f;
        private EmployeeRole role = EmployeeRole.DEVELOPER;

        public Builder givenName(String givenName) {
            this.givenName = givenName;
            return this;
        }

        public Builder surname(String surname) {
            this.surname = surname;
            return this;
        }

        public Builder salary(float salary) {
            this.salary = salary;
            return this;
        }

        public Builder role(EmployeeRole role) {
            this.role = role;
            return this;
        }

        public Employee build() {
            return new EmployeeImpl(this);
        }
    }
}
