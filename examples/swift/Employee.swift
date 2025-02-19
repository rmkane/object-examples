import Foundation

extension Float {
    func format(f: String) -> String {
        return String(format: "%\(f)f", self)
    }
}

// Tested with: https://swiftlang.ng.bluemix.net/#/repl
class Employee {
    var name: String
    var salary: Float

    convenience init() {
        self.init(name: "Unknown", salary: 0.00)
    }

    init(name: String, salary: Float) {
        self.name = name
        self.salary = salary
    }

    //var description: String {
    //    return "Name: \(name), Salary: $\(salary.format(f: "0.2"))"
    //}

    func displayEmployee() {
        print(self)
    }
}

extension Employee: CustomStringConvertible {
    var description: String {
        return "Name: \(name), Salary: $\(salary.format(f: "0.2"))"
    }
}

func main() {
  let emp1 = Employee(name : "Bob", salary : 75000.00)
  let emp2 = Employee(name : "Joe", salary : 50000.00)
  emp1.displayEmployee()
  emp2.displayEmployee()
}

main()
