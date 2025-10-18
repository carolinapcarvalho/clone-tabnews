test("nome do teste", callbackfunction);

function callbackfunction() {
  expect(1).toBe(1);
}

test("espero que 1 + 2 seja 3", () => {
  expect(soma(1, 2)).toBe(3);
});

test("espero que 1 + 0 seja 1", () => {
  expect(soma(1, 0)).toBe("Erro, nao pode ser 0");
});

test("espero que 1 + (-1) seja 0", () => {
  expect(soma(1, -1)).toBe(0);
});

function soma(a, b) {
  if (a == 0 || b == 0) {
    return "Erro, nao pode ser 0";
  }
  return a + b;
}
