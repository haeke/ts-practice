// TypeScript and closures
// Closures allows for inner functions to have access to an outer functions variable scope. This can be used to provide a mechanism to make sure a variable is not modified accidentally. The department variable cannot be manipulated directly without calling the setDept() function.

function employee() {
  let department: string = "IT";
  return {
    getDept(): string {
      return department;
    },
    setDept(newDepartment: string): string {
      return (department = newDepartment);
    }
  };
}

let edwin = employee();
console.log("start employee");
console.log(edwin.getDept());
console.log(edwin.setDept("Web Development"));
