#!/usr/bin/ruby

class Employee
  attr_accessor :name, :salary
  
  def initialize(name, salary)
    @name = name
    @salary = salary
  end

  def to_s
    return "Name: %s, Salary: $%.2f" % [@name, @salary]
  end
  
  def displayEmployee
    puts self
  end
end

def main
  emp1 = Employee.new("Bob", 75000)
  emp2 = Employee.new("Joe", 50000)
  emp1.displayEmployee()
  emp2.displayEmployee()
  exit(0)
end
 
if __FILE__ == $PROGRAM_NAME
  main()
end
