<?php
interface IEmployee {
    public function getName();
    public function getSalary();
    public function displayEmployee();
}

class Employee implements IEmployee {
    var $name;
    var $salary;

    public function getName() {
        return $this->name;
    }

    protected function setName($name) {
        $this->name = (string)$name;
    }

    public function getSalary() {
        return $this->salary;
    }

    protected function setSalary($salary) {
        $this->salary = floatval($salary);
    }

    public function __construct() {
        $numargs = func_num_args();
        if ($numargs < 2 || $numargs > 2) {
            $this->setName('');
            $this->setSalary(0);
        } else /* Overload */ {
            $this->setName(func_get_arg(0));
            $this->setSalary(func_get_arg(1));
        }
    }

    public function __toString() {
        return sprintf("Name: %s, Salary: $%.2f", $this->getName(), $this->getSalary());
    }

    public function displayEmployee() {
        print(nl2br($this.PHP_EOL));
    }
}

function main() {
    $emp1 = new Employee("Bob", 75000);
    $emp2 = new Employee("Joe", 50000);
    $emp1->displayEmployee();
    $emp2->displayEmployee();
}

main();
?>
