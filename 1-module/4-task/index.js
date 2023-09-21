function checkSpam(str) {
  let stringToUpperCase = str.toUpperCase();
  return (
    stringToUpperCase.includes("1XBET") || stringToUpperCase.includes("XXX")
  );
}

checkSpam("1XbeT now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");
