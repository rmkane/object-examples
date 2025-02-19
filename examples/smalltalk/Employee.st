"A subclass of Object that adds protocol needed for 
  employees with a name and salary"

"Notes: http://www.angelfire.com/tx4/cus/notes/smalltalk.html"
"Run: http://www.compileonline.com/execute_smalltalk_online.php"
  
Object subclass: #Employee
  instanceVariableNames:  'name salary'
  classVariableNames: ' '
  poolDictionaries: ' ' !

! Employee publicMethods !

  name: aString 
    name := aString !
  
  name 
    ^name !
  
  salary: n 
    salary := n !
  
  salary 
    ^salary ! !
  
  "Broken..."
  asString
    ^'Name: ', name, ', Salary: ', salary.
  
  "Broken..."
  displayEmployee
    Transcript show:self printString.

"Main execution:"

| aEmployee |
aEmployee := (Employee new).

aEmployee name:'Bob'.
aEmployee salary:75000.00.
 
Transcript show: name displayString.

"Smalltalk quitPrimitive !" "Exit system"