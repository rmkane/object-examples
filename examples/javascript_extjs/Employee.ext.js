Ext.define('Employee', {
  config : {
    name: 'Unknown',
    salary: 0.00
  },
  constructor : function(name, salary) {
    this.name = new String(name);
    this.salary = salary;
  },
  toString : function() {
    return Ext.String.format("Name: ${0}, Salary: ${1}", this.name, this.salary);
  },
  displayEmployee : function() {
    console.log(this.toString());
  }
});

function main() {
  var emp1 = Ext.create('Employee', "Bob", 75000.00);
  var emp2 = Ext.create('Employee', "Joe", 50000.00);
  emp1.displayEmployee();
  emp2.displayEmployee();
}

main();
