import { formatCurrency } from "./utils.ts";

type EmployeeProps = {
  name?: string;
  salary?: number;
};

interface Employee extends EmployeeProps {
  displayEmployee(): void;
}

class EmployeeImpl {
  name: string;
  salary: number;

  constructor();
  constructor(obj: EmployeeProps);
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

export type { Employee };

export { EmployeeImpl };
