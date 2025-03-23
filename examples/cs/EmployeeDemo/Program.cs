using EmployeeDemo.Example.Employee.Enums;
using EmployeeModel = EmployeeDemo.Example.Employee.Models.Employee;

// Top-level statements - no explicit Program class needed
var bob = EmployeeModel.CreateBuilder()
    .GivenName("Bob")
    .Surname("Smith")
    .Salary(75000.0)
    .Role(EmployeeRole.Manager)
    .Build();

var alice = EmployeeModel.Create(
    "Alice",
    "Jones",
    50000.0,
    EmployeeRole.Developer
);

var employees = new[] { bob, alice };

foreach (var employee in employees)
{
    Console.WriteLine(employee);
}
