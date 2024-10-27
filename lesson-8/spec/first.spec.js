//Класс Calc с методами sum+, sub-, mult*, div/, mod%
//методы: .toBe-значение соответствует; .toBeNull();
//наборы тестов:

let calc = new Calc();

/* describe("Checking sum", function () {
  it("first arg is 1, second arg is 2, result is 3", function () {
    expect(calc.sum(1, 2)).toBe(3);
  });

  it("first arg is'1', second arg is 2, result is 3", function () {
    expect(calc.sum("1", 2)).toBe(3);
  });

  it("first arg is'1', second arg is '2', result is 3", function () {
    expect(calc.sum("1", "2")).toBe(3);
  });

  it("First arg is 'abc', second arg is 2, result is null", function () {
    expect(calc.sum("abc", 2)).toBeNull();
  });

  it("First arg is '123abc', second arg, result is null", function () {
    expect(calc.sum("123abc")).toBeNull();
  });

  it("No args, result is null", function () {
    expect(calc.sum()).toBeNull();
  });

  it("first arg is null, second arg is null, result is null", function () {
    expect(calc.sum(null, null)).toBeNull();
  });

  it("first arg is 0, second arg is 0, result is 0", function () {
    expect(calc.sum(0, 0)).toBe(0);
  });
});
 */

//Покрыть тестами оставшиеся методы в прототипах.

describe("Checking sub", function () {
  it("first arg is 3, second arg is 1, result is 2", function () {
    expect(calc.sub(3, 1)).toBe(2);
  });
  it("first arg is '3' second arg is '1', result is 2 ", function () {
    expect(calc.sub("3", "1")).toBe(2);
  });
  it("first arg is 3, second arg is '1', result is 2 ", function () {
    expect(calc.sub(3, "1")).toBe(2);
  });
  it("first arg is 3, second arg is 'abc', result is null", function () {
    expect(calc.sub(3, "abc")).toBeNull();
  });
  it("first arg is 'abc', second arg is 'abc', result is null", function () {
    expect(calc.sub("abc", "abc")).toBeNull();
  });
  it("No args, result is null", function () {
    expect(calc.sub()).toBeNull();
  });
  it("first arg is null, second arg is null, result is null", function () {
    expect(calc.sub(null, null)).toBeNull();
  });
  it("first arg is 0, second arg is 0, result is 0", function () {
    expect(calc.sub(0, 0)).toBe(0);
  });
  it("first arg is -1, second arg is -3, result is 2", function () {
    expect(calc.sub(-1, -3)).toBe(2);
  });
});

describe("Checking mult", function () {
  it("first arg is 3, second arg is 9, result is 27", function () {
    expect(calc.mult(3, 9)).toBe(27);
  });
  it("first arg is -3, second arg is -9, result is 27", function () {
    expect(calc.mult(-3, -9)).toBe(27);
  });
  it("first arg is 0, second arg is -9, result is 0", function () {
    expect(calc.mult(0, -9)).toBe(0);
  });
  it("first arg is null, second arg is null, result is null", function () {
    expect(calc.mult(null, null)).toBeNull();
  });
  it("first arg is 0, second arg is 0, result is 0", function () {
    expect(calc.mult(0, 0)).toBe(0);
  });
  it("first arg is 'abc', second arg is 'bcd', result is null", function () {
    expect(calc.mult("abc", "bcd")).toBeNull();
  });
});

describe("Checking div", function () {
  it("first arg is '6', second arg is '2', result is 3", function () {
    expect(calc.div("6", "2")).toBe(3);
  });
  it("first arg is null, second arg is null, result is null", function () {
    expect(calc.div(null, null)).toBeNull();
  });

  it("No args, result is null", function () {
    expect(calc.div()).toBeNull();
  });
  it("first arg is 20, second arg is 0, result is infinity", function () {
    expect(calc.div(20, 0)).toBe(Infinity);
  });
  it("first arg is 0, second arg is -20, result is 0", function () {
    expect(calc.div(0, -20)).toBe(0);
  });
  it("first arg is 0, second arg is 20, result is 0", function () {
    expect(calc.div(0, 20)).toBe(0);
  });
  it("first arg is '6', second arg is '2', result is 3", function () {
    expect(calc.div("6", "2")).toBe(3);
  });
  it("first arg is 'abc', second arg is 'bcd', result is null", function () {
    expect(calc.div("abc", "bcd")).toBeNull();
  });
  it("first arg is 0, second arg is 0, result is Infinity", function () {
    expect(calc.div(0, 0)).toBe(Infinity);
  });
});

describe("Checking mod", function () {
  it("first arg is 5, second arg is 2, result is 1", function () {
    expect(calc.mod(5, 2)).toBe(1);
  });
  it("first arg is 12, second arg is 8.5, result is 3.5", function () {
    expect(calc.mod(12, 8.5)).toBe(3.5);
  });
  it("first arg is null, second arg is null, result is null", function () {
    expect(calc.mod(null, null)).toBeNull();
  });
  it("first arg is 'abc', second arg is 'bcd', result is null", function () {
    expect(calc.mod("abc", "bcd")).toBeNull();
  });
  it("No args, result is null", function () {
    expect(calc.mod()).toBeNull();
  });
  it("first arg is 10, second arg is 2, result is 0", function () {
    expect(calc.mod(10, 2)).toBe(0);
  });
  it("first arg is 1, second arg is 7, result is 1", function () {
    expect(calc.mod(1, 7)).toBe(1);
  });
  it("first arg is 0, second arg is 0, result is Infinity", function () {
    expect(calc.mod(0, 0)).toBe(Infinity);
  });
});
