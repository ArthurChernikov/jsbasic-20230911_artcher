let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: "December",
  currency: "USD",
  isPayed: false,
};

function sumSalary(salaries) {
  let sumSalaries = 0;
  for (let key in salaries) {
    let isSalary =
      typeof salaries[key] === "number" && Number.isFinite(salaries[key]);
    if (isSalary) {
      sumSalaries += salaries[key];
    }
  }
  return sumSalaries;
}
sumSalary(salaries);
