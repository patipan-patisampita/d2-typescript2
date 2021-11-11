let code: any = 123
//Type Assertion
//let employeeCode = <number>code;
let employeeCode = code as number;
console.log(typeof(employeeCode));