using Example.Employee.Enums;

namespace Example.Employee.Interfaces
{
    public interface IEmployeeBuilder
    {
        IEmployeeBuilder GivenName(string name);
        IEmployeeBuilder Surname(string name);
        IEmployeeBuilder Salary(double salary);
        IEmployeeBuilder Role(EmployeeRole role);
        IEmployee Build();
    }
} 
