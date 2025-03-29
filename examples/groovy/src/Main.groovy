import employee.Employee
import employee.EmployeeRole

// Using builder pattern
def bob = Employee.builder()
    .givenName('Bob')
    .surname('Smith')
    .salary(75_000.00)
    .role(EmployeeRole.MANAGER)
    .build()

// Using factory method
def alice = Employee.create(
    'Alice',
    'Jones',
    50_000.00,
    EmployeeRole.DEVELOPER
)

// Using Groovy's collection methods
[bob, alice].each { employee ->
    println employee
} 
