const valid = (s) => {
  let obj = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  let result = [];
  for (let char of s) {
    if (char in obj) {
      result.push(char);
    } else {
      if ((result.length === 0) | (obj[result.pop()] !== char)) {
        return false;
      }
    }
  }
  return result.length === 0;
};

let result = valid("([{]})[]");
console.log(result);
