local utils = require("utils")

local Employee = {}
Employee.__index = Employee

function Employee:new(name, salary)
    local self = setmetatable({}, Employee)
    self.name = name
    self.salary = salary
    return self
end

function Employee:get_name()
    return self.name
end

function Employee:get_salary()
    return self.salary
end

function Employee:set_name(name)
    self.name = name
end

function Employee:set_salary(salary)
    self.salary = salary
end

function Employee:__tostring()
    local formatted_salary = utils.format_currency(self.salary)
    return "Name: " .. self.name .. ", Salary: " .. formatted_salary
end

function Employee:display()
    print(self:__tostring())
end

return Employee
