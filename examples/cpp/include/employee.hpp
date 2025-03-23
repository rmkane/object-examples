#ifndef EMPLOYEE_HPP
#define EMPLOYEE_HPP

#include <string>
#include <string_view>

// Employee role enumeration
enum class EmployeeRole {
    Manager,
    Developer
};

// Convert role to string
[[nodiscard]] constexpr std::string_view to_string(EmployeeRole role) noexcept;

class Employee {
public:
    // Forward declare the Builder
    class Builder;

    // Special member functions
    Employee(const Employee&) = default;
    Employee(Employee&&) noexcept = default;
    Employee& operator=(const Employee&) = default;
    Employee& operator=(Employee&&) noexcept = default;
    ~Employee() = default;

    // Static factory methods
    [[nodiscard]] static Employee create() noexcept;
    [[nodiscard]] static Employee NewEmployee(std::string_view given_name,
                                            std::string_view surname,
                                            double salary,
                                            EmployeeRole role);
    [[nodiscard]] static Builder builder() noexcept;

    // Getters
    [[nodiscard]] const std::string& given_name() const noexcept { return given_name_; }
    [[nodiscard]] const std::string& surname() const noexcept { return surname_; }
    [[nodiscard]] double salary() const noexcept { return salary_; }
    [[nodiscard]] EmployeeRole role() const noexcept { return role_; }

    // Utility methods
    [[nodiscard]] std::string get_full_name() const;
    [[nodiscard]] std::string to_string() const;

private:
    friend class Builder;  // Allow Builder to access private constructor

    Employee() noexcept;
    Employee(std::string_view given_name,
            std::string_view surname,
            double salary,
            EmployeeRole role);

    std::string given_name_;
    std::string surname_;
    double salary_;
    EmployeeRole role_;
};

// Builder class definition
class Employee::Builder {
public:
    Builder() noexcept = default;

    [[nodiscard]] Builder& given_name(std::string_view name) {
        employee_.given_name_ = name;
        return *this;
    }

    [[nodiscard]] Builder& surname(std::string_view name) {
        employee_.surname_ = name;
        return *this;
    }

    [[nodiscard]] Builder& salary(double salary) noexcept {
        employee_.salary_ = salary;
        return *this;
    }

    [[nodiscard]] Builder& role(EmployeeRole role) noexcept {
        employee_.role_ = role;
        return *this;
    }

    [[nodiscard]] Employee build() const {
        return employee_;
    }

private:
    Employee employee_{};
};

#endif // EMPLOYEE_HPP 
