import Employee from "./Employee.mjs";

const main = () => {
  let employees = [];

  employees = inputEmployees(employees);
  console.log("Array of employees: ");
  outputEmployees(employees);
  console.log("Calculating salary...");
  calculateSalary(employees);
  console.log("List of employee salary is: ");
  outputEmployees(employees);

  console.log("Sorting increase by total salary...");
  sortIncreasingByTotalSalary(employees);
  console.log("Sorted employee array is: ");
  outputEmployees(employees);

  console.log("Searching max total salary...");
  sortIncreasingByTotalSalary(employees);
  console.log("Max total salary employee is: ");
  console.log(searchMaxTotalSalary(employees));

  console.log("Editing employee info...");
  editEmployee(employees);
  calculateSalary(employees);
  console.log("After editing, employee array is: ");
  outputEmployees(employees);

  console.log("Removing employee...");
  removeEmployee(employees);
  console.log("After removing, employee array is: ");
  outputEmployees(employees);
};

const inputEmployee = (idx) => {
  let id = Number(prompt("Enter employee[" + (idx + 1) + "] ID: "));
  let fullName = prompt("Enter employee[" + (idx + 1) + "] full name: ");
  let baseSalary = Number(
    prompt("Enter employee[" + (idx + 1) + "] base salary: ")
  );
  let productQuantity = Number(
    prompt("Enter employee[" + (idx + 1) + "] product quantity: ")
  );

  let employee = new Employee(id, fullName, baseSalary, productQuantity);
  return employee;
};

const inputEmployees = (listEmployee) => {
  let n = Number(prompt("Enter number of employee: "));

  for (let i = 0; i < n; i++) {
    listEmployee[i] = inputEmployee(i);
  }

  return listEmployee;
};

const outputEmployees = (listEmployee) => {
  for (let i = 0; i < listEmployee.length; i++) {
    console.log(listEmployee[i]);
  }
};

const calculateSalary = (listEmployee) => {
  for (let i = 0; i < listEmployee.length; i++) {
    let baseSalary = listEmployee[i].baseSalary;
    let productSalary = listEmployee[i].productSalary;
    let productQuantity = listEmployee[i].productQuantity;
    let totalSalary = handleCalculateSalary(
      baseSalary,
      productSalary,
      productQuantity
    );
    listEmployee[i].totalSalary = totalSalary;
  }
};

const handleCalculateSalary = (baseSalary, productSalary, productQuantity) => {
  const PRODUCT_QUANTITY_TARGET_AT_LEAST_PER_MONTH = 50;
  const INCREASE_10_PERCENT_OF_PRODUCT_SALARY = 0.1;
  const DECREASE_10_PERCENT_OF_TOTAL_SALARY = 0.9;
  let totalSalary = baseSalary + productSalary * productQuantity;

  if (productQuantity < PRODUCT_QUANTITY_TARGET_AT_LEAST_PER_MONTH) {
    totalSalary = totalSalary * DECREASE_10_PERCENT_OF_TOTAL_SALARY;
  } else if (productQuantity > PRODUCT_QUANTITY_TARGET_AT_LEAST_PER_MONTH) {
    // Number of products exceeded the target
    let exceededTargetProductQty =
      productQuantity - PRODUCT_QUANTITY_TARGET_AT_LEAST_PER_MONTH;
    let exccededTargetProductSalary =
      exceededTargetProductQty *
      INCREASE_10_PERCENT_OF_PRODUCT_SALARY *
      productSalary;

    totalSalary = totalSalary + exccededTargetProductSalary;
  } else {
    return totalSalary;
  }

  return totalSalary;
};

const sortIncreasingByTotalSalary = (listEmployee) => {
  listEmployee.sort((employeeA, employeeB) => {
    const totalSalaryA = employeeA.totalSalary;
    const totalSalaryB = employeeB.totalSalary;
    return totalSalaryA - totalSalaryB;
  });
};

const searchMaxTotalSalary = (listEmployee) => {
  let maxSalaryEmployee = listEmployee[0];

  for (let i = 0; i < listEmployee.length; i++) {
    if (maxSalaryEmployee.totalSalary < listEmployee[i].totalSalary) {
      maxSalaryEmployee = listEmployee[i];
    }
  }
  return maxSalaryEmployee;
};

const editEmployee = (listEmployee) => {
  let editingId = Number(prompt("Enter employee id want to edit: "));
  for (let i = 0; i < listEmployee.length; i++) {
    if (editingId == listEmployee[i].id) {
      listEmployee[i].fullName = prompt("Enter full name to edit: ");
      listEmployee[i].baseSalary = Number(
        prompt("Enter base salary to edit: ")
      );
      listEmployee[i].productQuantity = Number(
        prompt("Enter product quantity to edit: ")
      );
    }
  }
};

const removeEmployee = (listEmployee) => {
  let removingId = Number(prompt("Enter employee id want to remove: "));
  for (let i = 0; i < listEmployee.length; i++) {
    if (removingId == listEmployee[i].id) {
      listEmployee.splice(i, 1);
      break;
    }
  }
};

main();
