package employee

import groovy.transform.CompileStatic

@CompileStatic
interface IEmployee {
    String getGivenName()
    String getSurname()
    float getSalary()
    EmployeeRole getRole()
    String getFullName()
} 
