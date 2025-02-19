package example {
	import mx.utils.StringUtil;
	
  /**
   *  Note: Cannot nest classes/interfaces.
   *
   *  This interface is included for readability.
   */
	public interface Employee {
		function get name():String;
		
		function get salary():Number;
		
		function displayEmployee():void;
	}
	
	public class EmployeeImpl extends Object implements Employee {
		private var _name:String;
		private var _salary:Number;
		
		public function get name():String {
			return _name;
		}
		
		protected function set name(value:String):void {
			_name = value;
		}
		
		public function get salary():Number {
			return _salary;
		}
		
		protected function set salary(value:Number):void {
			_salary = value;
		}
		
		public function EmployeeImpl(name:String, salary:Number) {
			_name = name;
			_salary = salary;
		}
		
		public function toString():String {
			return StringUtil.substitute("Name: {0}, Salary: ${1}", _name, _salary.toFixed(2));
		}
		
		public function displayEmployee():void {
			trace(this);
		}
		
		public static function main():void {
			var emp1:Employee = new EmployeeImpl("Bob", 75000);
			var emp2:Employee = new EmployeeImpl("Joe", 50000);
			emp1.displayEmployee();
			emp2.displayEmployee();
		}
	}
}