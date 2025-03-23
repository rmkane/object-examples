using Example.Employee.Enums;

namespace Example.Employee.Interfaces
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
