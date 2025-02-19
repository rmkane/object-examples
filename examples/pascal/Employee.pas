{$mode delphi} // directive to be used for defining classes
{$m+}		   // directive to be used for using constructor

program EmployeeTest;
type
  Employee = class
  private
    name:String;
    salary:Real;
  public
    constructor create(name:String; salary:Real);
    procedure setName(name:String);
    function getName():String;
    procedure setSalary(salary:Real);
    function getSalary():Real;
    procedure displayEmployee;
end;

var empl1,empl2:Employee;

constructor Employee.create(name:String; salary:Real);
begin
  setName(name);
  setSalary(salary);
end;

procedure Employee.setName(name:String);
begin
  self.name := name;
end;

procedure Employee.setSalary(salary:Real);
begin
  self.salary := salary;
end;

function Employee.getName():String;
begin
  getName := self.name;
end;

function Employee.getSalary():Real;
begin
  getSalary := self.salary;
end;

procedure Employee.displayEmployee;
begin
  writeln('Name: ',getName,', Salary: $',getSalary:0:2);
end;

begin
  empl1 := Employee.create('Bob', 75000);
  empl2 := Employee.create('Joe', 50000);
  empl1.displayEmployee();
  empl2.displayEmployee();
  readln; {pause}
end.
