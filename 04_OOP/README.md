# Object-Oriented Programming (OOP) dalam Node.js

## 1. Pengenalan OOP
Object-Oriented Programming (OOP) adalah paradigma pemrograman yang berfokus pada objek. Dalam OOP, kode diorganisasikan ke dalam objek yang memiliki properti (data) dan metode (fungsi).

### Konsep Dasar OOP
1. **Class**: Blueprint atau cetak biru dari suatu objek.
2. **Object**: Instance dari suatu class.
3. **Encapsulation**: Menyembunyikan data agar hanya dapat diakses melalui metode yang telah ditentukan.
4. **Inheritance**: Pewarisan properti dan metode dari class induk ke class anak.
5. **Polymorphism**: Kemampuan suatu metode untuk memiliki banyak bentuk yang berbeda.
6. **Abstraction**: Menyembunyikan detail implementasi dan hanya menampilkan fitur yang diperlukan.

## 2. Studi Kasus: Sistem Manajemen Karyawan
Kita akan membuat sistem manajemen karyawan yang terdiri dari beberapa class dengan menerapkan konsep OOP.

### 2.1 Class `Person`
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
```

### 2.2 Class `Employee` (Inheritance)
```javascript
class Employee extends Person {
    constructor(name, age, jobTitle, salary) {
        super(name, age);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`);
    }
}
```

### 2.3 Class `Manager` (Polymorphism & Encapsulation)
```javascript
class Manager extends Employee {
    #bonus;
    
    constructor(name, age, jobTitle, salary, bonus) {
        super(name, age, jobTitle, salary);
        this.#bonus = bonus;
    }

    getTotalSalary() {
        return this.salary + this.#bonus;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, a ${this.jobTitle}. My total salary including bonus is $${this.getTotalSalary()}.`);
    }
}
```

### 2.4 Class `Department` (Abstraction)
```javascript
class Department {
    constructor(name) {
        if (this.constructor === Department) {
            throw new Error("Cannot instantiate abstract class Department");
        }
        this.name = name;
    }

    getDepartmentInfo() {
        throw new Error("Method 'getDepartmentInfo()' must be implemented");
    }
}

class ITDepartment extends Department {
    getDepartmentInfo() {
        return `This is the ${this.name} department, responsible for IT infrastructure.`;
    }
}
```

### 2.5 Contoh Penggunaan
```javascript
const employee1 = new Employee("Alice", 25, "Software Engineer", 5000);
employee1.introduce();

const manager1 = new Manager("Bob", 40, "CTO", 10000, 5000);
manager1.introduce();

const itDept = new ITDepartment("IT");
console.log(itDept.getDepartmentInfo());
```