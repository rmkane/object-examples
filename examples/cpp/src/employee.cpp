#include "employee.hpp"

// C++ standard library headers in alphabetical order
#include <iomanip>
#include <sstream>
#include <string>

constexpr std::string_view to_string(EmployeeRole role) noexcept {
    switch (role) {
        case EmployeeRole::Manager: return "Manager";
        case EmployeeRole::Developer: return "Developer";
        default: return "Unknown";
    }
}

Employee Employee::create() noexcept {
    return Employee{};
}

Employee::Builder Employee::builder() noexcept {
    return Builder{};
}

std::string Employee::get_full_name() const {
    return given_name_ + " " + surname_;
}

std::string Employee::to_string() const {
    std::ostringstream ss;
    ss << std::fixed << std::setprecision(2);
    ss << ::to_string(role_) << ": " << get_full_name() << " - $" << salary_;
    return ss.str();
}

Employee::Employee() noexcept : 
    given_name_("Unknown"),
    surname_("Unknown"),
    salary_(0.0),
    role_(EmployeeRole::Developer) {}

Employee::Employee(std::string_view given_name,
                  std::string_view surname,
                  double salary,
                  EmployeeRole role) :
    given_name_(given_name),
    surname_(surname),
    salary_(salary),
    role_(role) {}

Employee Employee::NewEmployee(std::string_view given_name,
                                std::string_view surname,
                                double salary,
                                EmployeeRole role) {
    return Employee{given_name, surname, salary, role};
}
