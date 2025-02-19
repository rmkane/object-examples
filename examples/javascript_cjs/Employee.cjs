/** Utilities */
// String Format
String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};
// Cast Float
Object.prototype.fixedFloat = function() {
  var precision = parseInt(arguments[0]);
    return parseFloat(this).toFixed(precision);
}

// Define a Class for OOP
var Class = function(methods) {   
  var klass = function() { this.initialize.apply(this, arguments); };
  for (var property in methods) klass.prototype[property] = methods[property];   
  if (!klass.prototype.initialize) klass.prototype.initialize = function(){};      
  return klass;    
};

/** Employee.js */
var Employee = Class({
  initialize: function(name, salary) {
    this.name = new String(name);
    this.salary = salary.fixedFloat(2);
  },
  displayEmployee: function() {
    alert("Name: {0}, Salary: ${1} \n".format(this.name, this.salary));
  }
});

var main = function() {
  var emp1 = new Employee("Bob", 75000);
  var emp2 = new Employee("Joe", 50000);
  emp1.displayEmployee();
  emp2.displayEmployee();
};

main();