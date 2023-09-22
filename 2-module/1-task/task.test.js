let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: "December",
  currency: "USD",
  isPayed: false,
};

function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries) {
    conditions = salaries[key];

    if (typeof conditions === "number" && isFinite(conditions) === true) {
      sum += conditions;
    }
  }
  return sum;
}
sumSalary(salaries);