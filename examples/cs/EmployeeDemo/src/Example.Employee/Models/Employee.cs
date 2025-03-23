using EmployeeDemo.Example.Employee.Enums;
using EmployeeDemo.Example.Employee.Interfaces;

namespace EmployeeDemo.Example.Employee.Models
{
    public class Employee : IEmployee
    {
        // Use init-only properties for better immutability
        public string GivenName { get; init; }
        public string Surname { get; init; }
        public double Salary { get; init; }
        public EmployeeRole Role { get; init; }

        // Use record for value-based equality and immutability
        private record EmployeeData(
            string GivenName,
            string Surname,
            double Salary,
            EmployeeRole Role
        );

        private Employee(EmployeeData data)
        {
            GivenName = data.GivenName;
            Surname = data.Surname;
            Salary = data.Salary;
            Role = data.Role;
        }

        public string GetFullName() => $"{GivenName} {Surname}";

        public override string ToString() => $"{Role}: {GetFullName()} - ${Salary:F2}";

        // Static factory methods with more descriptive names
        public static Employee Create(string givenName, string surname, double salary, EmployeeRole role)
            => new(new EmployeeData(givenName, surname, salary, role));

        public static IEmployeeBuilder CreateBuilder() => new EmployeeBuilder();

        private class EmployeeBuilder : IEmployeeBuilder
        {
            private string _givenName = string.Empty;
            private string _surname = string.Empty;
            private double _salary;
            private EmployeeRole _role = EmployeeRole.Developer;

            public IEmployeeBuilder GivenName(string name)
            {
                _givenName = name ?? throw new ArgumentNullException(nameof(name));
                return this;
            }

            public IEmployeeBuilder Surname(string name)
            {
                _surname = name ?? throw new ArgumentNullException(nameof(name));
                return this;
            }

            public IEmployeeBuilder Salary(double salary)
            {
                if (salary < 0) throw new ArgumentException("Salary cannot be negative", nameof(salary));
                _salary = salary;
                return this;
            }

            public IEmployeeBuilder Role(EmployeeRole role)
            {
                _role = role;
                return this;
            }

            public IEmployee Build()
            {
                if (string.IsNullOrWhiteSpace(_givenName))
                    throw new InvalidOperationException("GivenName is required");
                if (string.IsNullOrWhiteSpace(_surname))
                    throw new InvalidOperationException("Surname is required");

                return new Employee(new EmployeeData(_givenName, _surname, _salary, _role));
            }
        }
    }
}
