interface Number {
    formatCurrency: (precision: number, dot: string, thou: string) => string;
}

Number.prototype.formatCurrency = function (precision: number, dot: string, thou: string): string {
    precision = isNaN(precision = Math.abs(precision)) ? 2 : precision; 
    dot = dot == undefined ? '.' : dot; 
    thou = thou == undefined ? ',' : thou;
    let num = this;
    let sign = num < 0 ? '-' : ''; 
    let digits = String(parseInt(num = Math.abs(Number(num) || 0).toFixed(precision))); 
    var pos = (pos = digits.length) > 3 ? pos % 3 : 0;
    return sign
        + (pos ? digits.substr(0, pos) + thou : '')
        + digits.substr(pos).replace(/(\d{3})(?=\d)/g, "$1" + thou)
        + (precision ? dot + Math.abs(num - parseInt(digits)).toFixed(precision).slice(2) : "");
}

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
        this.name = obj && obj.name || 'Unknown'
        this.salary = obj && obj.salary || 0.00
    }

    public toString = () : string => {
        return `Name ${this.name}, Salary: \$${this.salary.formatCurrency(2, '.', ',')}`;
    }

    public displayEmployee() {
        console.log(this.toString());
    }
}

function main() {
    let emp1 = new Employee({ name: "Bob", salary: 75000.00 });
    let emp2 = new Employee({ name: "Joe", salary: 50000.00 });
    emp1.displayEmployee();
    emp2.displayEmployee();
}

main();
