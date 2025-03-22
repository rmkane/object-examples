import { formatCurrency } from "./utils.ts";

const EmployeeRole = {
  Manager: "Manager",
  Developer: "Developer",
} as const;

type TEmployeeRole = keyof typeof EmployeeRole;

type TEmployeeProps = {
  givenName: string;
  surname: string;
  salary: number;
  role: TEmployeeRole;
};

interface TEmployee extends TEmployeeProps {
  getFullName(): string;
}

class Employee implements TEmployee {
  #givenName: string;
  #surname: string;
  #salary: number;
  #role: TEmployeeRole;

  get givenName(): string {
    return this.#givenName;
  }

  get surname(): string {
    return this.#surname;
  }

  get salary(): number {
    return this.#salary;
  }

  get role(): TEmployeeRole {
    return this.#role;
  }

  private constructor();
  private constructor(obj: Partial<TEmployee>);
  private constructor(obj?: any) {
    this.#givenName = obj?.givenName ?? "Unknown";
    this.#surname = obj?.surname ?? "Unknown";
    this.#salary = obj?.salary ?? 0.0;
    this.#role = obj?.role ?? EmployeeRole.Developer;
  }

  public toString = (): string => {
    const formattedSalary = formatCurrency(this.#salary);
    return `${this.#role}: ${this.getFullName()} - ${formattedSalary}`;
  };

  public getFullName() {
    return `${this.#givenName} ${this.#surname}`;
  }

  static Builder = class {
    private givenName: string;
    private surname: string;
    private salary: number;
    private role: TEmployeeRole;
  
    constructor() {
      this.givenName = "Unknown";
      this.surname = "Unknown";
      this.salary = 0.0;
      this.role = EmployeeRole.Developer;
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

    public withRole(role: TEmployeeRole) {
      this.role = role;
      return this;
    }

    public build() {
      return new Employee({
        givenName: this.givenName,
        surname: this.surname,
        salary: this.salary,
        role: this.role,
      });
    }
  }

  static builder() {
    return new Employee.Builder();
  }
  
  static NewEmployee = (props: Partial<TEmployeeProps>) => {
    return new Employee(props);
  };
}

export type { TEmployee, TEmployeeProps, TEmployeeRole };

export { Employee, EmployeeRole };
