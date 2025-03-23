using EmployeeDemo.Example.Employee.Enums;

namespace EmployeeDemo.Example.Employee.Interfaces
{
    public interface IEmployee
    {
        string GivenName { get; }
        string Surname { get; }
        double Salary { get; }
        EmployeeRole Role { get; }
        string GetFullName();
    }
}
