const PRODUCT_SALARY = 50;

export default class Employee {
  constructor(id, fullName, baseSalary, productQuantity, totalSalary) {
    this.id = id;
    this.fullName = fullName;
    this.baseSalary = baseSalary;
    this.productSalary = PRODUCT_SALARY;
    this.productQuantity = productQuantity;
    this.totalSalary = totalSalary;
  }

  get getId() {
    return this.id;
  }

  /**
   * @param {number} id
   */
  set setId(id) {
    this.id = id;
  }

  get getFullName() {
    return this.fullName;
  }

  /**
   * @param {string} fullName
   */
  set setFullName(fullName) {
    this.fullName = fullName;
  }

  get getBaseSalary() {
    return this.baseSalary;
  }

  /**
   * @param {number} baseSalary
   */
  set setBaseSalary(baseSalary) {
    this.baseSalary = baseSalary;
  }

  get getProductQuantity() {
    return this.productQuantity;
  }

  /**
   * @param {number} productQuantity
   */
  set setProductQuantity(productQuantity) {
    this.productQuantity = productQuantity;
  }

  get getTotalSalary() {
    return this.totalSalary;
  }

  /**
   * @param {number} totalSalary
   */
  set setTotalSalary(totalSalary) {
    this.totalSalary = totalSalary;
  }
}
