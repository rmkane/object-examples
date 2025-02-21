import { formatCurrency } from "./utils.ts";

interface IEmployee {
  name: string;
  salary: number;
}

class Employee {
  private name: string;
  private salary: number;

  constructor();
  constructor(obj: IEmployee);
  constructor(obj?: any) {
    this.name = obj?.name ?? "Unknown";
    this.salary = obj?.salary ?? 0.0;
  }

  public toString = (): string => {
    const formattedSalary = formatCurrency(this.salary);
    return `Name ${this.name}, Salary: ${formattedSalary}`;
  };

  public displayEmployee() {
    console.log(String(this));
  }
}

export type { IEmployee };

export { Employee };
