local Employee = require("employee")

-- Main function
local function main()
    -- Create instances of Employee
    local emp1 = Employee:new("Bob", 75000.0)
    local emp2 = Employee:new("Joe", 50000.0)

    -- Call the "display" function
    emp1:display()
    emp2:display()
end

-- Call the main function
main()
