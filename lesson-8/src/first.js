function Calc() {}

/* Calc.prototype.sum = function (a, b) {
  if ((a || a == 0) && (b || b == 0)) {
    let numA = Number(a);
    let numB = Number(b);
    if ((numA || numA == 0) && (numB || numB == 0)) {
      return Number(a) + Number(b);
    }
    return null;
  }
  return null;
}; */

Calc.prototype.sub = function (a, b) {
  if ((a || a == 0) && (b || b == 0)) {
    let numA = Number(a);
    let numB = Number(b);
    if ((numA || numA == 0) && (numB || numB == 0)) {
      return a - b;
    }
    return null;
  }
  return null;
};

Calc.prototype.mult = function (a, b) {
  if ((a || a == 0) && (b || b == 0)) {
    let numA = Number(a);
    let numB = Number(b);
    if ((numA || numA == 0) && (numB || numB == 0)) {
      return a * b;
    }
    return null;
  }
  return null;
};

Calc.prototype.div = function (a, b) {
  if ((a || a == 0) && (b || b == 0)) {
    let numA = Number(a);
    let numB = Number(b);
    if ((numA || numA == 0) && (numB || numB !== 0)) {
      return a / b;
    } else if (b === 0) {
      return Infinity;
    }
    return null;
  }
  return null;
};

Calc.prototype.mod = function (a, b) {
  if ((a || a == 0) && (b || b == 0)) {
    let numA = Number(a);
    let numB = Number(b);
    if ((numA || numA == 0) && (numB || numB !== 0)) {
      return a % b;
    } else if (b === 0) {
      return Infinity;
    }
    return null;
  }
  return null;
};
