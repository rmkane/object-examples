using System;

namespace Example {
    interface IEmployee {
        void displayEmployee();
    }

    class Employee : IEmployee {
        public string Name { get; set; }
        public float Salary { get; set; }

        public Employee() : this("Unknown", 0.00f) { }

        public Employee(String name, float salary) {
            this.Name = name;
            this.Salary = salary;
        }
        
        public override string ToString() {
            return String.Format("Name: {0}, Salary: ${1:f}", Name, Salary);
        }

        public void displayEmployee() {
            Console.WriteLine(this);
        }

        static void Main(String[] args) {
            Employee emp1 = new Employee("Bob", 75000f);
            Employee emp2 = new Employee("Joe", 50000f);
            emp1.displayEmployee();
            emp2.displayEmployee();
        }
    }
}
