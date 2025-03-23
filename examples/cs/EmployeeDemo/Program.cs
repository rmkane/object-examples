using System;
using Example.Employee.Enums;
using Example.Employee.Models;
using Example.Employee.Interfaces;
using EmployeeModel = Example.Employee.Models.Employee;

namespace Example
{
    class Program
    {
        static void Main(string[] args)
        {
            var bob = EmployeeModel.CreateManager("Bob", "Smith", 75000.0);

            var alice = EmployeeModel.CreateBuilder()
                .GivenName("Alice")
                .Surname("Jones")
                .Salary(50000.0)
                .Role(EmployeeRole.Developer)
                .Build();

            var employees = new[] { bob, alice };

            foreach (var employee in employees)
            {
                Console.WriteLine(employee);
            }
        }
    }
}
