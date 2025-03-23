using EmployeeDemo.Example.Employee.Enums;

namespace EmployeeDemo.Example.Employee.Interfaces
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
