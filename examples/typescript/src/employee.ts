import { formatCurrency } from "./utils.ts";

type EmployeeProps = {
  givenName: string;
  surname: string;
  salary: number;
};

interface Employee extends EmployeeProps {
  getFullName(): string;
}

class EmployeeImpl implements Employee {
  givenName: string;
  surname: string;
  salary: number;

  private constructor();
  private constructor(obj: Partial<EmployeeProps>);
  private constructor(obj?: any) {
    this.givenName = obj?.givenName ?? "Unknown";
    this.surname = obj?.surname ?? "Unknown";
    this.salary = obj?.salary ?? 0.0;
  }

  public toString = (): string => {
    const formattedSalary = formatCurrency(this.salary);
    return `Name ${this.getFullName()}, Salary: ${formattedSalary}`;
  };

  public getFullName() {
    return `${this.givenName} ${this.surname}`;
  }

  static Builder = class {
    private givenName: string;
    private surname: string;
    private salary: number;
    
    constructor() {
      this.givenName = "Unknown";
      this.surname = "Unknown";
      this.salary = 0.0;
    }

    public withGivenName(givenName: string) {
      this.givenName = givenName;
      return this;
    }

    public withSurname(surname: string) {
      this.surname = surname;
      return this;
    }

    public withSalary(salary: number) {
      this.salary = salary;
      return this;
    }

    public build() {
      return new EmployeeImpl({
        givenName: this.givenName,
        surname: this.surname,
        salary: this.salary,
      });
    }
  }

  static NewEmployee = (props: Partial<EmployeeProps>) => {
    return new EmployeeImpl(props);
  };
}

export type { Employee };

export { EmployeeImpl };
